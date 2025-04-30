
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

// Stripe integration temporarily disabled
// const stripePromise = loadStripe("");

export const StripePaymentService = {
  // Function to create a payment intent or checkout session
  createPayment: async (amount: number, isSubscription: boolean): Promise<{ clientSecret?: string, sessionId?: string, url?: string }> => {
    try {
      console.log("Payment functionality temporarily disabled");
      toast.error("Payment functionality is currently disabled");
      return {};
    } catch (error) {
      console.error("Error creating payment:", error);
      toast.error("Payment setup failed. Please try again later.");
      return {};
    }
  },

  // Get Stripe instance
  getStripe: () => {
    console.log("Stripe functionality temporarily disabled");
    // Return a Promise that resolves to null
    return Promise.resolve(null);
  }
};

export default StripePaymentService;
