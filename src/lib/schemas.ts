import * as zod from "zod";
import throttle from "lodash.throttle";

import { getEmail } from "@/actions/checkCredentialExist";
import debounce from "lodash.debounce";

export type EmailAlreadyTakenError = string | undefined;

const checkEmailAvailability = debounce(
  (email: string) =>
    getEmail(email).then((v) => {
      if (v.error) {
        return null;
      } else {
        return v;
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
    email: zod.string().email(),
    username: zod.string().min(1, { message: "username cannot be empty" }),
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
    async (email) => {
      const checkEmail = await checkEmailAvailability(email.email);

      if (checkEmail === null) {
        return false;
      } else {
        return true;
      }
    },
    {
      message: "email is already taken" as EmailAlreadyTakenError,
      path: ["email"],
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
