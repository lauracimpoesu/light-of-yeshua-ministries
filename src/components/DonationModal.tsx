
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Coffee, Wallet, AlertCircle, ExternalLink } from "lucide-react";
import { toast } from "sonner";

// Temporarily removed sensitive information
const stripePromise = Promise.resolve(null);

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  isMonthly: boolean;
}

// Wrapper component for the modal
export const DonationModal = ({ isOpen, onClose, amount, isMonthly }: DonationModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<"revolut" | "direct">("revolut");
  
  const handleRevolutPayment = () => {
    // Open Revolut link in a new tab
    window.open("https://revolut.me/lightofyeshua", "_blank");
    toast.success("Thank you for your support!");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
            Donate via Revolut
          </DialogTitle>
          <DialogDescription className="text-center">
            Support our ministry with your donation
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col space-y-4 py-4 items-center">
          <div className="bg-blue-50/50 dark:bg-blue-900/20 p-6 rounded-lg text-center w-full">
            <p className="text-lg font-medium mb-2">
              {isMonthly ? `${amount} monthly donation` : `${amount} one-time donation`}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your support helps us spread the Light of Yeshua
            </p>
          </div>
          
          <Button 
            onClick={handleRevolutPayment}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <ExternalLink size={18} />
            Donate with Revolut
          </Button>
          
          <p className="text-sm text-gray-500 text-center">
            You'll be redirected to our Revolut page to complete your donation
          </p>
          
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
