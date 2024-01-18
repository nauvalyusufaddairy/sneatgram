import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./dbConnect";
export const {
  handlers: { POST, GET },
  signIn,
  signOut,
  auth,
} = NextAuth({
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma as any),
  ...authConfig,
});
