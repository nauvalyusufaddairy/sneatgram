"use server";
import { v4 as uuid } from "uuid";
import prisma from "./dbConnect";
import sendEmail from "@/actions/send-email";

export const generateVeficationToken = async (email: string) => {
  function generateVerificationCode() {
    // Generate a random number between 100000 and 999999
    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    return verificationCode.toString();
  }
  const code = generateVerificationCode();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await prisma.verificationToken.findFirst({
    where: { email },
  });

  if (existingToken?.email) {
    await prisma.verificationToken.delete({
      where: { id: existingToken.id },
    });
  }
  sendEmail(email, code);
  const verificationToken = await prisma.verificationToken.create({
    data: {
      email,
      expires,
      token: code,
    },
  });
  console.log("verificationToken ", verificationToken);
  return verificationToken;
};
