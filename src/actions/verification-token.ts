"use server";
import prisma from "@/lib/dbConnect";

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

export const getVerificationToken = async (email: string) => {
  const verificationToken = await prisma.verificationToken.findFirst({
    where: { email },
  });
  if (verificationToken) {
    return verificationToken;
  } else {
    return null;
  }
};
