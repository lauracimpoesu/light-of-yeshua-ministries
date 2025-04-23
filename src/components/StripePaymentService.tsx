
import { loadStripe } from "@stripe/stripe-js";
import { createClient } from "@supabase/supabase-js";
import { toast } from "sonner";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe("pk_test_51RFQexPUpliuo3lSgotCgDTn50H5NTwyEyWNUWhTminronSSSlATYKMsTq27xnUXgNkU7YSZ2lgVBMADs2xRB8KN00fCB3cQxU");

// Use the provided Supabase URL if environment variable is missing
const SUPABASE_URL_FALLBACK = "https://ntvoggymweighghdsdvz.supabase.co";
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || SUPABASE_URL_FALLBACK;
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50dm9nZ3ltd2VpZ2hnaGRzZHZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MDEzNTQsImV4cCI6MjA2MDk3NzM1NH0.GGKXQevXzaParBk0qBDmYtESonSomqQuberSHmGx2vQ";

// Check if Supabase credentials are available before creating the client
let supabase;
try {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Missing Supabase environment variables. Using fallback mode.");
    // We'll handle this in the methods below
  } else {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
    console.log("Supabase client initialized successfully");
  }
} catch (error) {
  console.error("Error initializing Supabase client:", error);
}

export const StripePaymentService = {
  // Function to create a payment intent or checkout session
  createPayment: async (amount: number, isSubscription: boolean): Promise<{ clientSecret?: string, sessionId?: string, url?: string }> => {
    try {
      // Check if Supabase is properly initialized
      if (!supabase) {
        throw new Error("Supabase client not initialized. Please check your environment variables.");
      }

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
      toast.error("Payment setup failed. Please try again later.");
      // Return empty object to prevent further errors
      return {};
    }
  },

  // Get Stripe instance
  getStripe: () => stripePromise,
};

export default StripePaymentService;
