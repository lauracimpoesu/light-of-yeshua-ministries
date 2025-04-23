
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe("pk_test_51RFQexPUpliuo3lSgotCgDTn50H5NTwyEyWNUWhTminronSSSlATYKMsTq27xnUXgNkU7YSZ2lgVBMADs2xRB8KN00fCB3cQxU");

// Note: This is a simplified implementation for client-side only payments
// In a real production app, you should use a backend to create payment intents

interface CreatePaymentIntentResponse {
  clientSecret: string;
}

export const StripePaymentService = {
  // Function to create a payment intent
  createPaymentIntent: async (amount: number, isSubscription: boolean): Promise<string> => {
    try {
      // In a real implementation, you would call your backend API to create a payment intent
      // For testing purposes, we're returning a static client secret
      // This will not work for actual payments - you need a backend in production!
      
      // Mock API response
      const mockResponse: CreatePaymentIntentResponse = {
        clientSecret: `pi_${Math.random().toString(36).substring(2)}_secret_${Math.random().toString(36).substring(2)}`,
      };
      
      return mockResponse.clientSecret;
    } catch (error) {
      console.error("Error creating payment intent:", error);
      throw error;
    }
  },

  // Get Stripe instance
  getStripe: () => stripePromise,
};

export default StripePaymentService;
