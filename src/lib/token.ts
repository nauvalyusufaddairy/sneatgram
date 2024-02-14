"use server";
import { v4 as uuid } from "uuid";
import prisma from "./dbConnect";

export const generateVeficationToken = async (email: string) => {
  const generatedToken = uuid();
  const expires = new Date(new Date().getTime() + 3600 * 1000);

  const existingToken = await prisma.verificationToken.findFirst({
    where: { email },
  });

  if (existingToken?.email) {
    await prisma.verificationToken.delete({
      where: { id: existingToken.id },
    });
  }

  const verificationToken = await prisma.verificationToken.create({
    data: {
      email,
      expires,
      token: generatedToken,
    },
  });
  console.log("verificationToken ", verificationToken);
  return verificationToken;
};
