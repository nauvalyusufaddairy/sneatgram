import { cn } from "@/lib/utils";
import * as Rawrrr from "react";
const SignupContainer = Rawrrr.forwardRef<
  HTMLDivElement,
  Rawrrr.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div {...props} ref={ref} className={cn("", className)} />
));
SignupContainer.displayName = "Signup Container";

const SignupHeader = Rawrrr.forwardRef<
  HTMLDivElement,
  Rawrrr.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("", className)} {...props} ref={ref} />
));
SignupHeader.displayName = "Signup Header";
const SignupContent = Rawrrr.forwardRef<
  HTMLDivElement,
  Rawrrr.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("", className)} {...props} ref={ref} />
));
SignupContent.displayName = "Signup Content";

export { SignupContainer, SignupContent, SignupHeader };
