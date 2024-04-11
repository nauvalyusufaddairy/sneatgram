import { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credential from "next-auth/providers/credentials";
import { LoginSchema } from "./lib/schemas";
import bcrypt from "bcryptjs";
import { getUserByEmail, getUserByUsername } from "./data/users";

export default {
  providers: [
    Credential({
      async authorize(credentials) {
        const validateFields = LoginSchema.safeParse(credentials);
        if (validateFields.success) {
          const { username, password } = validateFields.data;

          // regex for recognize any valid email
          const emailRegex: RegExp =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          // test if user login by email or user name
          const isValidEmail: boolean = emailRegex.test(username);
          // while user login by their email if false then user login by their username
          if (isValidEmail) {
            // get user email
            const byEmail = await getUserByEmail(username);
            // check if user is not recognized or user dont set up their password it means user login by SSO provider
            if (!byEmail || !byEmail.password) {
              return null;
            }
            if (byEmail) {
              //check is password match?
              const isPasswordMatch = await bcrypt.compare(
                password,
                byEmail.password
              );
              if (isPasswordMatch) {
                return byEmail;
              }
              return null;
            }
          } else {
            // get user username
            const byUsername = await getUserByUsername(username);
            // check if user is not recognized or user dont set up their password it means user login by SSO provider
            if (!byUsername || !byUsername.password) {
              return null;
            }
            if (byUsername) {
              const isPasswordMatch = await bcrypt.compare(
                password,
                byUsername.password
              );
              if (isPasswordMatch) {
                return byUsername;
              }
              return null;
            }
          }
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ account, user, credentials, email, profile }) {
      console.log("signIn callback account", account);
      console.log("signIn callback user", user);
      console.log("signIn callback credentials", credentials);
      console.log("signIn callback email", email);
      console.log("signIn callback profile", profile);

      return true;
    },
    async session({ newSession, session, token, trigger, user }) {
      console.log("session callback newSession", newSession);
      console.log("session callback session", session);
      console.log("session callback token", token);
      console.log("session callback trigger", trigger);
      console.log("session callback user", user);
      return session;
    },
  },
} satisfies NextAuthConfig;
export const config = {
  unstable_allowDynamic: ["**/node_modules/lodash.debounce/**/*.js"],
};
