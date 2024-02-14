"use state";
import * as zod from "zod";
import { CredentialValidationSchema } from "@/lib/schemas";
import { Arrow } from "./arrow";
import { CredentialValidation } from "./credential-validation-form";

export const Forms = ({
  steps,
  labelPointer,
  setLabelPointer,
  setSteps,
  CVFData,
  setCVFData,
}: {
  setSteps: React.Dispatch<React.SetStateAction<Steps[]>>;
  steps: Steps[];
  labelPointer: Steps;
  setLabelPointer: React.Dispatch<React.SetStateAction<Steps>>;
  CVFData: zod.infer<typeof CredentialValidationSchema>;
  setCVFData: React.Dispatch<
    React.SetStateAction<zod.infer<typeof CredentialValidationSchema>>
  >;
}) => {
  return (
    <div className=" hidden md:block lg:block xl:block 2xl:block">
      <div className="w-full _md:h-[64px] _lg:h-[77px] border-b-[1px] border-b-bg30 text-xl _lg:pl-12 _md:pl-4 text-white flex items-center ">
        Credential signup forms{" "}
      </div>

      <div className="w-full flex">
        {/* Arrow */}
        <div className="w-[20%] pr-1 text-white _lg:h-[calc(100vh-77px)] _md:h-[calc(100vh-64px)] border-r-[1px] border-r-bg30 flex flex-col items-center">
          <Arrow
            disabled={!steps.includes("Credential validations")}
            onClick={() => setLabelPointer("Credential validations")}
            variant={
              labelPointer !== "Credential validations"
                ? "prevStep"
                : "currentStep"
            }
            className="mt-8"
            label="Credential validations"
          />
          <Arrow
            disabled={!steps.includes("Email confirmation")}
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
            disabled={!steps.includes("Personal informations")}
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
          <div className="w-full">
            {labelPointer === "Credential validations" && (
              <CredentialValidation
                setLabelPointer={setLabelPointer}
                setSteps={setSteps}
                CVFData={CVFData}
                setCVFData={setCVFData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
