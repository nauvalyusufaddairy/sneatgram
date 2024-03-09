"use client";
import * as Rawrrr from "react";
import {
  SignupContainer,
  SignupContent,
  SignupHeader,
} from "./ui/signup-form-ui";
import {
  CredentialSignupContext,
  CredentialSignupContextProps,
} from "@/context/credential-signup-context";
import { Timeline } from "./ui/signup-timeline";

export function SignupForm() {
  const { labelPointer, CVFData, setCVFData, setLabelPointer } =
    Rawrrr.useContext(CredentialSignupContext) as CredentialSignupContextProps;
  return (
    <SignupContainer>
      <SignupHeader>{labelPointer}</SignupHeader>
      <SignupContent>
        <Timeline label="Credential validations" steps={labelPointer} />
      </SignupContent>
    </SignupContainer>
  );
}
