"use server";
import { CredentialValidationSchema } from "@/lib/schemas";
import * as zod from "zod";
import * as bcrypt from "bcryptjs";
import prisma from "@/lib/dbConnect";

export const cvUpload = async (
  values: zod.infer<typeof CredentialValidationSchema>
) => {
  try {
    const data = await CredentialValidationSchema.parseAsync(values);

    const { username, email, password } = data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        username,
        gender: "MALE", // for testing purpose
      },
    });
    return user;
  } catch (e) {
    console.log("erorororororororrororororororororo", e);
    return null;
  }
};
