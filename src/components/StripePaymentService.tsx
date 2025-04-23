import { loadStripe } from "@stripe/stripe-js";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe("pk_live_51RH0YjG3klR9z0xVwrZvfM2HoTdx6U14sCv1ULjOlxSFFEcLr5Kmdhx0A4FgzKsETzjHX9TVep9vQC9lqHv7Fdc600yI2Znvjd");

export const StripePaymentService = {
  // Function to create a payment intent or checkout session
  createPayment: async (amount: number, isSubscription: boolean): Promise<{ clientSecret?: string, sessionId?: string, url?: string }> => {
    try {
      console.log("Creating payment:", { amount, isMonthly: isSubscription });
      
      const { data, error } = await supabase.functions.invoke("create-payment", {
        body: {
          amount,
          isMonthly: isSubscription,
        },
      });

      if (error) {
        console.error("Payment function error:", error);
        throw new Error(error.message);
      }
      
      if (!data) {
        console.error("No data returned from payment function");
        throw new Error("No data returned from payment function");
      }

      console.log("Payment function response:", data);
      return data;
    } catch (error) {
      console.error("Error creating payment:", error);
      toast.error("Payment setup failed. Please try again later.");
      // Return empty object to prevent further errors
      return {};
    }
  },

  // Get Stripe instance
  getStripe: () => stripePromise,
};

export default StripePaymentService;
