
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-gold-light via-gold to-gold-dark hover:from-gold hover:via-gold-light hover:to-gold text-black dark:text-black font-semibold animate-gold-shimmer shadow-md hover:shadow-gold/30",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-gold bg-background hover:bg-gold/10 text-foreground hover:text-gold-dark dark:hover:text-gold-light",
        secondary:
          "bg-gradient-to-r from-gold-medium to-gold-light text-black hover:from-gold-light hover:to-gold-medium shadow-sm",
        royal:
          "bg-gradient-to-r from-gold-darkest via-gold to-gold-lightest text-black font-bold animate-gold-shine-slow shadow-md hover:shadow-lg hover:shadow-gold/30",
        ghost: "hover:bg-gold/10 hover:text-gold-dark dark:hover:text-gold-light",
        link: "text-gold underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
