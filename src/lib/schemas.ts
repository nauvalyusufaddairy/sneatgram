import * as zod from "zod";

export const LoginSchema = zod.object({
  password: zod.string().min(1),
  username: zod.string(),
});

export const StepHijiSchema = zod
  .object({
    email: zod.string().email(),
    username: zod.string(),
    password: zod.string().min(6),
    confirmPassword: zod.string(),
  })
  .refine(
    (data) => {
      console.log("data", data);
      if (data.confirmPassword !== data.password) {
        return false;
      }
      return true;
    },
    {
      message: "Your confirmed password doesn't match.",
      path: ["confirmPassword"],
    }
  );

// .refine(
//   (str) => {
//     console.log("str", str);
//     const instagramUsernameRegex = /^[a-zA-Z0-9._]{1,30}$/;
//     if (!instagramUsernameRegex.test(str.username)) {
//       return false;
//     }
//     return true;
//   },
//   { message: "invalid username" }
// );
