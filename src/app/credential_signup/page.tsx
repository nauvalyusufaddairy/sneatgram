"use client";

import { Arrow } from "@/components/credentialSignup/arrow";
import { Forms } from "@/components/credentialSignup/form-card";
import React, { useState } from "react";

export default function CredentialSignup() {
  const [labelPointer, setLabelPointer] = useState<Steps>(
    "Credential validations"
  );
  const initial: Steps[] = ["Credential validations"];
  const [steps, setSteps] = useState<Steps[]>(initial);

  console.log("label : ", labelPointer, "----", "steps : ", steps);
  return (
    <div className="w-screen h-screen bg-bg60 p-0  ">
      <Forms
        setSteps={setSteps}
        steps={steps}
        labelPointer={labelPointer}
        setLabelPointer={setLabelPointer}
      />
    </div>
  );
}
