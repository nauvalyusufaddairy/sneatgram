import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import { privateRoutes, publicRoutes, nextAuthPrefix } from "@/routes";

const { auth } = NextAuth({ ...authConfig });
export default auth((req) => {
  const { nextUrl } = req;
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isPrivateRoutes = privateRoutes.includes(nextUrl.pathname);
  const isNextauthApiPrefix = nextUrl.pathname.startsWith(nextAuthPrefix);
  const isLoggedIn = !!req.auth;

  if (isNextauthApiPrefix) {
    return null;
  }
  if (isPrivateRoutes) {
    if (!isLoggedIn) {
      return Response.redirect(new URL("/", nextUrl));
    }
    return null;
  }

  if (isPublicRoutes) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/home", nextUrl));
    }
    return null;
  }
});
