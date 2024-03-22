import { CredentialValidationSchema } from "@/lib/schemas";
import React from "react";
import * as zod from "zod";

/*
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
 
 
const [CVFData, setCVFData] = useState(initialUserData);

*/

export type CredentialSignupContextProps = {
  labelPointer: Steps;
  setLabelPointer: React.Dispatch<React.SetStateAction<Steps>>;
  steps: Steps[];
  setSteps: React.Dispatch<React.SetStateAction<Steps[]>>;
  CVFData: zod.infer<typeof CredentialValidationSchema>;
  setCVFData: React.Dispatch<
    React.SetStateAction<zod.infer<typeof CredentialValidationSchema>>
  >;
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
      }}
    >
      {children}
    </CredentialSignupContext.Provider>
  );
};
