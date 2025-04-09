
import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { motion } from "framer-motion";
import { Check, Heart } from "lucide-react";
import { toast } from "sonner";

interface StripeCheckoutFormProps {
  amount: number;
  isMonthly: boolean;
  onSuccess: () => void;
  onCancel: () => void;
}

const StripeCheckoutForm = ({ amount, isMonthly, onSuccess, onCancel }: StripeCheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [billingDetails, setBillingDetails] = useState({
    name: '',
    email: '',
    address: {
      line1: '',
      city: '',
      state: '',
      postal_code: '',
      country: '',
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setBillingDetails(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof typeof prev] as Record<string, string>,
          [child]: value
        }
      }));
    } else {
      setBillingDetails(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet
      toast.error("Payment processing unavailable. Please try again later.");
      return;
    }
    
    setLoading(true);
    setError(null);
    
    const cardElement = elements.getElement(CardElement);
    
    if (!cardElement) {
      setLoading(false);
      setError("Payment form not found. Please refresh and try again.");
      return;
    }
    
    try {
      // In a real implementation, you would:
      // 1. Call your backend to create a payment intent
      // 2. Send the client secret to this component
      // 3. Confirm the payment with stripe.confirmCardPayment()
      
      // This is a mock implementation for demonstration purposes
      setTimeout(() => {
        // Simulate successful payment
        toast.success("Payment processed successfully!");
        setLoading(false);
        onSuccess();
      }, 2000);
    } catch (err) {
      console.error("Payment error:", err);
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input 
          name="name" 
          type="text" 
          required 
          value={billingDetails.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          placeholder="John Doe"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input 
          name="email" 
          type="email" 
          required 
          value={billingDetails.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          placeholder="john@example.com"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Address</label>
        <input 
          name="address.line1" 
          type="text" 
          required 
          value={billingDetails.address.line1}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 mb-2"
          placeholder="123 Main St"
        />
        
        <div className="grid grid-cols-2 gap-2 mb-2">
          <input 
            name="address.city" 
            type="text" 
            required 
            value={billingDetails.address.city}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="City"
          />
          <input 
            name="address.state" 
            type="text" 
            required 
            value={billingDetails.address.state}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="State"
          />
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <input 
            name="address.postal_code" 
            type="text" 
            required 
            value={billingDetails.address.postal_code}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="Postal Code"
          />
          <input 
            name="address.country" 
            type="text" 
            required 
            value={billingDetails.address.country}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            placeholder="Country"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Card Details</label>
        <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700">
          <CardElement options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }} />
        </div>
      </div>
      
      {error && (
        <div className="text-red-500 text-sm mt-2">
          {error}
        </div>
      )}
      
      <div className="flex space-x-4 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="w-1/2 py-3 px-4 rounded-lg border border-gray-300 dark:border-gray-600 font-medium transition-all duration-500"
          disabled={loading}
        >
          Back
        </button>
        
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={!stripe || loading}
          className="w-1/2 py-3 px-4 rounded-lg ministry-gradient-bg text-gray-900 font-bold flex items-center justify-center gap-2 shadow-lg transition-all duration-500 disabled:opacity-70"
        >
          {loading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            <>
              <Heart size={18} />
              {isMonthly ? "Subscribe" : "Donate Now"}
            </>
          )}
        </motion.button>
      </div>
    </form>
  );
};

export default StripeCheckoutForm;
