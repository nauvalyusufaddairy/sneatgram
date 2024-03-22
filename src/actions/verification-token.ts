"use server";
import prisma from "@/lib/dbConnect";
import { number } from "zod";

export const getVeficationTokenByToken = async (token: string) => {
  const verificationToken = await prisma.verificationToken.findFirst({
    where: { token },
  });
  if (verificationToken) {
    return verificationToken;
  } else {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  const verificationToken = await prisma.verificationToken.findFirst({
    where: { email },
  });
  if (verificationToken) {
    return verificationToken;
  } else {
    return null;
  }
};

export const verifyToken = async (email: string, token: string) => {
  const reqDate = new Date().getTime();
  const data = await prisma.verificationToken.findFirst({
    where: {
      email,
    },
  });
  const dbDate = data?.expires.getTime() || 0;
  const result = dbDate - reqDate;
  if (token !== data?.token) {
    return { error: "your verification code is wrong" };
  }
  if (result <= 0) {
    return { error: "your verification code is expired" };
  }

  return { succes: "success" };
};
