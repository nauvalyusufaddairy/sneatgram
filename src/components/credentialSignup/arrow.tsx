import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const arrowVariants = cva("w-full flex items-center _lg:py-2 _md:py-1 mt-3", {
  variants: {
    variant: {
      prevStep: "text-white ml-2 hover:cursor-pointer",
      currentStep:
        "text-bg10  font-bold border-l-[5px] ml-2 border-l-bg10 hover:cursor-pointer ",
      nextStep: "text-white/50  ml-2 hover:cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "nextStep",
  },
});
interface ArrowProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof arrowVariants> {
  label: Steps;
}
export const Arrow = React.forwardRef<HTMLButtonElement, ArrowProps>(
  ({ label, className, variant, ...props }, ref) => (
    <button
      {...props}
      ref={ref}
      className={cn(arrowVariants({ variant, className }), className)}
    >
      <p className="ml-8">{label}</p>
    </button>
  )
);
