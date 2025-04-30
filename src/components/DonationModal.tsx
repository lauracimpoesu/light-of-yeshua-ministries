
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Coffee, Wallet, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { StripePaymentService } from "./StripePaymentService";

// Stripe integration temporarily disabled
const stripePromise = Promise.resolve(null);

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  isMonthly: boolean;
}

// Wrapper component for the modal
export const DonationModal = ({ isOpen, onClose, amount, isMonthly }: DonationModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<"stripe" | "paypal" | "buymeacoffee">("stripe");
  const [serviceError, setServiceError] = useState<boolean>(true); // Set to true to show warning

  const handleExternalPayment = (method: "paypal" | "buymeacoffee") => {
    toast.info("Donation functionality is currently disabled");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
            Donation Functionality Disabled
          </DialogTitle>
          <DialogDescription className="text-center">
            The donation system is currently under maintenance
          </DialogDescription>
        </DialogHeader>

        {serviceError && (
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <AlertCircle className="h-5 w-5 text-amber-500" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-amber-700">
                  Donation functionality is temporarily disabled.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col space-y-4 py-4">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Stripe checkout form component
const StripeCheckoutForm = ({ amount, isMonthly, onClose }: { amount: number, isMonthly: boolean, onClose: () => void }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cardComplete, setCardComplete] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Donation functionality is currently disabled");
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Card Details</label>
        <div className="p-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700">
          <CardElement 
            options={{
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
            }} 
            onChange={(e) => {
              setCardComplete(e.complete);
              if (e.error) {
                setError(e.error.message);
              } else {
                setError(null);
              }
            }}
          />
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {error}
          </p>
        )}
      </div>
      
      <Button 
        type="submit"
        disabled={true}
        className="w-full"
      >
        Donations Disabled
      </Button>
    </form>
  );
};
