"use server";

import { getUserByEmail, findAllEmail } from "@/data/users";

type CredentialStatus = {
  success?: string;
  error?: string;
};

export const getEmail = async (
  email: string,
  customErrorMessage?: string | null,
  customSuccessMessage?: string
): Promise<CredentialStatus> => {
  const user = await getUserByEmail(email);

  if (user) {
    return {
      error: customErrorMessage || "email is already in use",
      success: "",
    };
  } else {
    return { error: "", success: customSuccessMessage || "oke sukses" };
  }
};
