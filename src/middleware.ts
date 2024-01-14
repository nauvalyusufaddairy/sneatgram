import authConfig from "./auth.config";
import NextAuth from "next-auth";
const { auth } = NextAuth(authConfig);
import {
  privateRoutes,
  publicRoutes,
  nextAuthPrefix,
  DEFAULT_REDIRECT,
} from "./routes";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isPriveteRoutes = privateRoutes.includes(nextUrl.pathname);
  const isPublicRoutes = publicRoutes.includes(nextUrl.pathname);
  const isNextauthPrefix = nextAuthPrefix.startsWith(nextUrl.pathname);

  if (isNextauthPrefix) {
    return null;
  }
  if (isPublicRoutes) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl));
    }
    return null;
  }
  if (isPriveteRoutes) {
    if (!isLoggedIn) {
      return Response.redirect(new URL("/", nextUrl));
    }
    return null;
  }
});
