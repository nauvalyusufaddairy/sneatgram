"use client";

import { Arrow } from "@/components/credentialSignup/arrow";
import { FormCard } from "@/components/credentialSignup/form-card";
import { useState } from "react";

const step: Steps[] = [
  { step: "1", label: "Credential validations" },
  { step: "2", label: "Personal informastions" },
  { step: "3", label: "Review" },
];
export default function CredentialSignup() {
  return (
    <div className=" w-screen h-screen bg-bg60  text-gray-50 pt-8 ">
      <ArrowContainer steps={step} />
      <FormCard steps={{ step: "1" }} />
    </div>
  );
}

const ArrowContainer = ({ steps }: { steps: Steps[] }) => {
  return (
    <div className="flex w-screen justify-center gap-6 ">
      {steps.map((v, i) => (
        <Arrow props={v} />
      ))}
    </div>
  );
};
