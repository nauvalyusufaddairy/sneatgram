"use client";

import { SignupForms } from "@/components/signup-form";
import { useRef, useImperativeHandle } from "react";
const Child = () => {
  const childRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  useImperativeHandle(childRef, () => ({
    getValue: childRef.current.value || "",
  }));

  return <input ref={childRef} />;
};

export default function CredentialSignup() {
  return (
    <div className="w-screen h-screen bg-bg60 p-0 overflow-y-auto m-0  ">
      <SignupForms />
    </div>
  );
}
