import * as zod from "zod";

import { getEmail, getUsername } from "@/actions/checkCredentialExist";
import debounce from "lodash.debounce";

export type EmailAlreadyTakenError = string | undefined;

const checkEmailAvailability = debounce(
  (email: string) =>
    getEmail(email).then((v) => {
      if (v) {
        console.log("emailsssss", v);
        return v;
      } else {
        return null;
      }
    }),
  1000
);
const checkUsernameAvailability = debounce(
  (email: string) =>
    getUsername(email).then((v) => {
      if (v) {
        return v;
      } else {
        return null;
      }
    }),
  1000
);
export const LoginSchema = zod.object({
  password: zod.string().min(1),
  username: zod.string(),
});

export const CredentialValidationSchema = zod
  .object({
    email: zod
      .string()
      .email()
      .refine(
        async (email) => {
          const checkEmail = await checkEmailAvailability(email);

          if (checkEmail) {
            return false;
          } else {
            return true;
          }
        },
        {
          message: "email is already in use",
        }
      ),
    username: zod
      .string()
      .min(1, { message: "username cannot be empty" })
      .refine(
        async (username) => {
          const data = await checkUsernameAvailability(username);
          if (data) {
            return false;
          } else {
            return true;
          }
        },
        { message: "username is already in use" }
      ),
    password: zod.string().min(6),
    confirmPassword: zod.string().min(6),
  })
  .refine(
    (data) => {
      if (data.confirmPassword !== data.password) {
        return false;
      }
      return true;
    },
    {
      message: "Your confirmed password doesn't match.",
      path: ["confirmPassword"],
    }
  )

  .refine(
    (str) => {
      console.log("str", str);
      const instagramUsernameRegex = /^[a-zA-Z0-9._]{1,30}$/;
      if (!instagramUsernameRegex.test(str.username)) {
        return false;
      }
      return true;
    },
    { message: "invalid username", path: ["username"] }
  );

export const EmailConfirmationSchema = zod.object({
  token: zod
    .string()
    .min(6, { message: "string length min is 6" })
    .max(6, { message: "max string length is 6" }),
});

export const PersonalInformationsSchema = zod.object({
  name: zod.string().min(1, { message: "name is required" }),

  gender: zod.enum(["MALE", "FEMALE"]),
  birthDate: zod.date(),
});
