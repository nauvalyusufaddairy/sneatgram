"use server";

import { getUserByEmail, findAllEmail, getUserByUsername } from "@/data/users";
import prisma from "@/lib/dbConnect";

type CredentialStatus = {
  success?: string;
  error?: string;
};

export const getEmail = async (
  email: string,
  customErrorMessage?: string | null,
  customSuccessMessage?: string
) => {
  const user = await getUserByEmail(email);

  if (user) {
    return user;
  } else {
    return null;
  }
};
export const getUsername = async (username: string) => {
  const user = await getUserByUsername(username);
  if (user) {
    return user;
  } else {
    return null;
  }
};
