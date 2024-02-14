"use client";
import * as z from "zod";

import { Arrow } from "@/components/credentialSignup/arrow";
import { Forms } from "@/components/credentialSignup/form-card";
import React, { useState } from "react";
import { CredentialValidationSchema } from "@/lib/schemas";

export default function CredentialSignup() {
  const [labelPointer, setLabelPointer] = useState<Steps>(
    "Credential validations"
  );
  const initialsteps: Steps[] = ["Credential validations"];
  const [steps, setSteps] = useState<Steps[]>(initialsteps);
  const initialUserData: z.infer<typeof CredentialValidationSchema> = {
    confirmPassword: "",
    email: "",
    password: "",
    username: "",
  };
  /**
   *  @param CVFData Credential Validation Form Data
   */
  const [CVFData, setCVFData] = useState(initialUserData);

  console.log("label : ", labelPointer, "----", "steps : ", steps);
  return (
    <div className="w-screen h-screen bg-bg60 p-0  ">
      <Forms
        CVFData={CVFData}
        setCVFData={setCVFData}
        setSteps={setSteps}
        steps={steps}
        labelPointer={labelPointer}
        setLabelPointer={setLabelPointer}
      />
    </div>
  );
}
