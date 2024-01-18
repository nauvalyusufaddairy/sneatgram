import * as zod from "zod";

export const LoginSchema = zod.object({
  password: zod.string().min(1),
  username: zod.string(),
});

export const StepHijiSchema = zod.object({
  email: zod.string().email(),
  username: zod.string().refine(
    (str) => {
      const instagramUsernameRegex = /^[a-zA-Z0-9._]{1,30}$/;
      if (!instagramUsernameRegex.test(str)) {
        throw new Error("Invalid Instagram username format");
      }
      return str;
    },
    { message: "invalid username" }
  ),
  password: zod.string().min(6),
});
