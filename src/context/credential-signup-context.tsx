import { CredentialValidationSchema } from "@/lib/schemas";
import React, { useState } from "react";
import * as zod from "zod";

export type CredentialSignupContextProps = {
  labelPointer: Steps;
  setLabelPointer: React.Dispatch<React.SetStateAction<Steps>>;
  steps: Steps[];
  setSteps: React.Dispatch<React.SetStateAction<Steps[]>>;
  CVFData: zod.infer<typeof CredentialValidationSchema>;
  setCVFData: React.Dispatch<
    React.SetStateAction<zod.infer<typeof CredentialValidationSchema>>
  >;
  setUserRecordId: React.Dispatch<React.SetStateAction<string>>;
  userRecordId: string;
};
export const CredentialSignupContext =
  React.createContext<CredentialSignupContextProps>(
    {} as CredentialSignupContextProps
  );

export const CredentialSignupProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [labelPointer, setLabelPointer] = React.useState<Steps>(
    "Credential validations"
  );
  const initialsteps: Steps[] = ["Credential validations"];
  const [steps, setSteps] = React.useState<Steps[]>(initialsteps);
  const initialUserData: zod.infer<typeof CredentialValidationSchema> = {
    confirmPassword: "",
    email: "",
    password: "",
    username: "",
  };

  const [userRecordId, setUserRecordId] = useState<string>("");
  const [CVFData, setCVFData] = React.useState(initialUserData);
  return (
    <CredentialSignupContext.Provider
      value={{
        labelPointer,
        setLabelPointer,
        CVFData,
        steps,
        setSteps,
        setCVFData,
        setUserRecordId,
        userRecordId,
      }}
    >
      {children}
    </CredentialSignupContext.Provider>
  );
};
