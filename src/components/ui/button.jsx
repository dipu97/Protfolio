import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-500 ease-out hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-white/70",
  {
    variants: {
      variant: {
        default:
          "bg-white text-slate-950 shadow-[0_14px_40px_rgba(255,255,255,0.18)] hover:bg-white/90",
        secondary:
          "border border-white/25 bg-white/10 text-white hover:bg-white/16",
        ghost: "text-white hover:bg-white/10",
      },
      size: {
        default: "h-11 px-6",
        lg: "h-12 px-8 text-[0.95rem]",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
