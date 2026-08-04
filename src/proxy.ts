import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { API } from "@/config/api";
import { getNewAccessToken } from "@/services/auth/refreshToken";
import { jwtUtils } from "@/utils/jwt";

const AUTH_ROUTES = ["/login", "/register"];
const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/contact",
  "/services",
  "/faq",
  "/unauthorized",
  "/gears",
];

export async function proxy(request: NextRequest) {
  console.log("🔥 PROXY HIT:", request.nextUrl.pathname);
  const pathname = request.nextUrl.pathname;

  const cookieStore = await cookies();

  let accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  let decodedAccessToken = accessToken
    ? jwtUtils.verifyToken(accessToken, API.ACCESS_URL as string)
    : null;

  const decodedRefreshToken = refreshToken
    ? jwtUtils.verifyToken(refreshToken, API.REFRESH_URL as string)
    : null;

  // If the token is invalid or expired, clear the cookies
  if (!decodedAccessToken?.success) {
    cookieStore.delete("accessToken");
  }

  if (!decodedAccessToken?.success && decodedRefreshToken?.success) {
    const result = await getNewAccessToken();
    if (result.success) {
      const newAccessToken = result.data.accessToken;
      cookieStore.set("accessToken", newAccessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
      });
      accessToken = newAccessToken;

      // new access token again verify
      decodedAccessToken = jwtUtils.verifyToken(
        newAccessToken,
        API.ACCESS_URL as string,
      );
    }
  }

  let userRole = null;

  if (decodedAccessToken?.success && decodedAccessToken.data) {
    userRole = (decodedAccessToken.data as JwtPayload).role;
  }

  // logged in user can't use /login, /register routes
  if (decodedAccessToken?.success && AUTH_ROUTES.includes(pathname)) {
    if (userRole === "CUSTOMER") {
      return NextResponse.redirect(new URL("/dashboard/customer", request.url));
    } else if (userRole === "ADMIN") {
      return NextResponse.redirect(new URL("/dashboard/admin", request.url));
    } else if (userRole === "PROVIDER") {
      return NextResponse.redirect(new URL("/dashboard/provider", request.url));
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // not logged in user can't use protected routes without public routes
  const isPublicRoute = PUBLIC_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );
  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  if (!accessToken && !isPublicRoute && !isAuthRoute) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Authorization protection for specific routes
  if (pathname.startsWith("/dashboard/admin") && userRole !== "ADMIN") {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  } else if (
    pathname.startsWith("/dashboard/provider") &&
    userRole !== "PROVIDER"
  ) {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  } else if (
    pathname.startsWith("/dashboard/customer") &&
    userRole !== "CUSTOMER"
  ) {
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
