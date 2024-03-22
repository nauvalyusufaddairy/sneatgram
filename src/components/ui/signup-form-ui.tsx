"use client";
import * as Rawwrrr from "react";

import { CredentialSignupContext } from "@/context/credential-signup-context";
import { cn } from "@/lib/utils";

const useSignupForm = () => {
  const ctx = Rawwrrr.useContext(CredentialSignupContext);
  const innerCtx = Rawwrrr.useContext(SignupFormContext);

  if (!ctx) {
    throw new Error("useSignupForm should be used within <SignupForm> yeaaah");
  }

  const {
    CVFData,
    labelPointer,
    setCVFData,
    setLabelPointer,
    setSteps,
    steps,
  } = ctx;
  const { name } = innerCtx;
  return {
    CVFData,
    labelPointer,
    setCVFData,
    setLabelPointer,
    setSteps,
    steps,
    name,
  };
};

type SignupFormContextType = {
  name: Steps;
};

const SignupFormContext = Rawwrrr.createContext<SignupFormContextType>(
  {} as SignupFormContextType
);

const SignupForm = Rawwrrr.forwardRef<
  HTMLDivElement,
  Rawwrrr.HTMLAttributes<HTMLDivElement> & { name: Steps }
>(({ className, name, ...props }, ref) => {
  const { steps } = useSignupForm();
  return (
    <SignupFormContext.Provider value={{ name }}>
      <div
        className={cn(
          " _md:ml-16 w-[300px] m-auto h-fit _md:w-[425px] _lg:w-[530px] _xl:w-[600px] relative bg-gradient-to-t from-label/10  via-label/50  to-label/10 pl-[1px]",
          !steps.includes(name) ? "opacity-50 hover:cursor-not-allowed" : "",
          className
        )}
        {...props}
        ref={ref}
      />
    </SignupFormContext.Provider>
  );
});
SignupForm.displayName = "SignupForm";

const SignupFormDot = Rawwrrr.forwardRef<
  HTMLDivElement,
  Rawwrrr.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { labelPointer, name } = useSignupForm();
  return (
    <div
      className={cn(
        "w-[14px] h-[14px] bg-bg60 border-[2px] border-label rounded-full absolute top-[42px] _md:left-[-7px]  left-[-6px]",
        name === labelPointer ? "border-bg10" : "bg-bg60",
        className
      )}
      {...props}
      ref={ref}
    />
  );
});
SignupFormDot.displayName = "SignupFormDot";

const SignupFormField = Rawwrrr.forwardRef<
  HTMLDivElement,
  Rawwrrr.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }) => {
  const { labelPointer } = useSignupForm();
  return (
    <div
      className={cn(
        "h-fit w-full flex flex-col pl-4 _md:pl-12 _lg:pl-16 _xl:pl-20 _md:pb-4 bg-bg60 text-label",
        className
      )}
      {...props}
    />
  );
});
SignupFormField.displayName = "SignupFormField";

const SignupFormLabel = Rawwrrr.forwardRef<
  HTMLDivElement,
  Rawwrrr.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { labelPointer, name } = useSignupForm();

  return (
    <div
      className={cn(
        "mb-[24px] mt-[34px] text-xl text-label",
        name === labelPointer ? "text-bg10" : "text-label",
        className
      )}
      {...props}
      ref={ref}
    >
      {name}
    </div>
  );
});
SignupFormLabel.displayName = "SignupFormLabel";

const SignupFormContents = Rawwrrr.forwardRef<
  HTMLDivElement,
  Rawwrrr.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { labelPointer, name } = useSignupForm();
  return (
    <div
      className={cn(
        "w-full h-fit flex flex-col _lg:px-8 _lg:py-8 px-4 py-4 rounded-md border-[1px] border-label/50 ",
        name === labelPointer ? "border-bg10/50 shadow-md shadow-bg10/20" : "",
        className
      )}
      {...props}
      ref={ref}
    />
  );
});
SignupFormContents.displayName = "SignupFormContents";

export {
  SignupForm,
  SignupFormDot,
  SignupFormField,
  SignupFormLabel,
  SignupFormContents,
};
//#22252D
