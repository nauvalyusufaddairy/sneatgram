"use server";
import {
  CredentialValidationSchema,
  PersonalInformationsSchema,
} from "@/lib/schemas";
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
        emailVerified: new Date(),
      },
    });
    return user;
  } catch (e) {
    return null;
  }
};

export const personalInformationUpload = async (
  e: zod.infer<typeof PersonalInformationsSchema>,
  id: string
) => {
  const data = await PersonalInformationsSchema.parseAsync(e);
  const userData = await prisma.user.update({
    where: { id },
    data: {
      gender: data.gender,
      birthDate: data.birthDate,
      name: data.name,
    },
  });
  if (userData) {
    return userData;
  } else {
    return null;
  }
};
