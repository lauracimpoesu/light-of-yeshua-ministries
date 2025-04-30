
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@12.7.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { amount, isMonthly } = await req.json();
    
    // Log request details for debugging
    console.log("Received payment request:", { amount, isMonthly });

    // Validate amount
    if (!amount || amount <= 0) {
      return new Response(
        JSON.stringify({ error: "Invalid donation amount" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Initialize Stripe with your secret key
    const stripeKey = "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";
    const stripe = new Stripe(stripeKey, {
      apiVersion: "2023-08-16",
    });

    if (isMonthly) {
      // For subscriptions, create a checkout session
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "Monthly Donation",
                description: "Support our ministry with a monthly donation",
              },
              unit_amount: amount * 100, // convert to cents
              recurring: { interval: "month" },
            },
            quantity: 1,
          },
        ],
        mode: "subscription",
        success_url: `${req.headers.get("origin")}/donation-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.get("origin")}/donate`,
      });

      console.log("Created subscription session:", session.id);
      
      return new Response(
        JSON.stringify({ sessionId: session.id, url: session.url }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    } else {
      // For one-time payments, create a payment intent
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100, // convert to cents
        currency: "usd",
        description: "One-time Donation",
        automatic_payment_methods: {
          enabled: true,
        },
      });

      console.log("Created payment intent:", paymentIntent.id);
      
      return new Response(
        JSON.stringify({ 
          clientSecret: paymentIntent.client_secret 
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    console.error("Error processing payment:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
