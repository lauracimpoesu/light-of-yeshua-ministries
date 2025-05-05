
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogHeader, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CreditCard, Mail, ExternalLink } from "lucide-react";
import { toast } from "sonner";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  isMonthly: boolean;
}

// Wrapper component for the modal
export const DonationModal = ({ isOpen, onClose, amount, isMonthly }: DonationModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState<"paypal" | "revolut" | "other">("revolut");
  
  const handleRevolutPayment = () => {
    // Open Revolut link in a new tab
    window.open("https://revolut.me/lightofyeshua", "_blank");
    toast.success("Thank you for your support!");
    onClose();
  };

  const handlePayPalPayment = () => {
    // Open PayPal link in a new tab
    window.open("https://www.paypal.me/lightofyeshua", "_blank");
    toast.success("Thank you for your support!");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
            Choose Payment Method
          </DialogTitle>
          <DialogDescription className="text-center">
            Support our ministry with your donation
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col space-y-4 py-4 items-center">
          <div className="bg-blue-50/50 dark:bg-blue-900/20 p-6 rounded-lg text-center w-full">
            <p className="text-lg font-medium mb-2">
              {isMonthly ? `$${amount} monthly donation` : `$${amount} one-time donation`}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Your support helps us spread the Light of Yeshua
            </p>
          </div>
          
          <Button 
            onClick={handlePayPalPayment}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <CreditCard size={18} />
            Donate with PayPal
          </Button>
          
          <Button 
            onClick={handleRevolutPayment}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700"
          >
            <ExternalLink size={18} />
            Donate with Revolut
          </Button>
          
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg w-full text-center my-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <Mail size={16} className="inline mr-2" />
              If you prefer other methods, email us at: 
              <a href="mailto:lightofyeshuaministries@gmail.com" className="ml-1 text-blue-600 dark:text-blue-400 hover:underline">
                lightofyeshuaministries@gmail.com
              </a>
              <br />
              <span className="text-xs mt-1 block">
                We can provide IBAN or other payment methods
              </span>
            </p>
          </div>
          
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DonationModal;
