"use client";

import { Arrow } from "@/components/credentialSignup/arrow";
import FormCard from "@/components/credentialSignup/form-card";
import React, { useState } from "react";

export default function CredentialSignup() {
  const [labelPointer, setLabelPointer] = useState<Steps>("");
  const initial: Steps[] = ["Credential validations", "Email confirmation"];
  const [steps, setSteps] = useState<Steps[]>(initial);

  return (
    <div className="w-screen h-screen bg-bg60 p-0  ">
      <Form
        steps={steps}
        labelPointer={labelPointer}
        setLabelPointer={setLabelPointer}
      />
    </div>
  );
}

const Form = ({
  steps,
  labelPointer,
  setLabelPointer,
}: {
  steps: Steps[];
  labelPointer: Steps;
  setLabelPointer: React.Dispatch<React.SetStateAction<Steps>>;
}) => {
  return (
    <div className=" hidden md:block lg:block xl:block 2xl:block">
      <div className="w-full _md:h-[64px] _lg:h-[77px] border-b-[1px] border-b-bg30 text-xl _lg:pl-12 _md:pl-4 text-white flex items-center ">
        Credential signup forms{" "}
      </div>

      <div className="w-full flex">
        {/* Arrow */}
        <div className="w-[20%] text-white _lg:h-[calc(100vh-77px)] _md:h-[calc(100vh-64px)] border-r-[1px] border-r-bg30 flex flex-col items-center">
          <Arrow
            onClick={() => setLabelPointer("Credential validations")}
            variant={
              !steps.includes("Credential validations")
                ? "nextStep"
                : labelPointer === "Credential validations"
                ? "currentStep"
                : "prevStep"
            }
            className="mt-8"
            label="Credential validations"
          />
          <Arrow
            label="Email confirmation"
            onClick={() => setLabelPointer("Email confirmation")}
            variant={
              !steps.includes("Email confirmation")
                ? "nextStep"
                : labelPointer === "Email confirmation"
                ? "currentStep"
                : "prevStep"
            }
          />
          <Arrow
            onClick={() => setLabelPointer("Personal informations")}
            variant={
              !steps.includes("Personal informations")
                ? "nextStep"
                : labelPointer === "Personal informations"
                ? "currentStep"
                : "prevStep"
            }
            label="Personal informations"
          />
        </div>
        {/* panel */}
        <div className="w-[80%] _lg:h-[calc(100vh-77px)] _md:h-[calc(100vh-64px)] ">
          <div className="w-full"> </div>
        </div>
      </div>
    </div>
  );
};

// "use client";

// import { Arrow } from "@/components/credentialSignup/arrow";
// import { FormCard } from "@/components/credentialSignup/form-card";
// import { useState } from "react";

// const step: Steps[] = [
//   { step: "1", label: "Credential validations" },
//   { step: "2", label: "Email confirmation" },
//   { step: "3", label: "Personal informations" },
// ];
// export default function CredentialSignup() {
//   const [finishedStep, setFinishedStep] = useState([""]);

//   return (
//     <div className=" w-screen h-screen bg-bg60  text-gray-50 pt-8 ">
//       <ArrowContainer finishedStep={finishedStep} steps={step} />
//       <FormCard setFinishedStep={setFinishedStep} steps={{ step: "1" }} />
//     </div>
//   );
// }

// const ArrowContainer = ({
//   steps,
//   finishedStep,
// }: {
//   steps: Steps[];
//   finishedStep: string[];
// }) => {
//   return (
//     <div className="flex w-screen justify-center gap-6 ">
//       {steps.map((v, i) => (
//         <Arrow finishedStep={finishedStep} props={v} />
//       ))}
//     </div>
//   );
// };
