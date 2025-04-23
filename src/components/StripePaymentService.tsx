
import { loadStripe } from "@stripe/stripe-js";
import { createClient } from "@supabase/supabase-js";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe("pk_test_51RFQexPUpliuo3lSgotCgDTn50H5NTwyEyWNUWhTminronSSSlATYKMsTq27xnUXgNkU7YSZ2lgVBMADs2xRB8KN00fCB3cQxU");

// Initialize Supabase client - use environment variables for production
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const StripePaymentService = {
  // Function to create a payment intent or checkout session
  createPayment: async (amount: number, isSubscription: boolean): Promise<{ clientSecret?: string, sessionId?: string, url?: string }> => {
    try {
      const { data, error } = await supabase.functions.invoke("create-payment", {
        body: {
          amount,
          isMonthly: isSubscription,
        },
      });

      if (error) throw new Error(error.message);
      if (!data) throw new Error("No data returned from payment function");

      return data;
    } catch (error) {
      console.error("Error creating payment:", error);
      throw error;
    }
  },

  // Get Stripe instance
  getStripe: () => stripePromise,
};

export default StripePaymentService;
