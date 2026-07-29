import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin routes (except /admin/login)
  if (pathname.startsWith("/admin") && pathname !== "/admin/login") {
    const adminSession = request.cookies.get("admin_session")?.value;
    if (adminSession !== "authenticated") {
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Protect mutation methods on admin API routes
  if (
    (pathname.startsWith("/api/projects") ||
      pathname.startsWith("/api/testimonials") ||
      pathname.startsWith("/api/upload")) &&
    request.method !== "GET"
  ) {
    const adminSession = request.cookies.get("admin_session")?.value;
    if (adminSession !== "authenticated") {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/projects/:path*", "/api/testimonials/:path*", "/api/upload/:path*"],
};
