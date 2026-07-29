import { NextResponse } from "next/server";

const ADMIN_PASSCODE = process.env.ADMIN_PASSCODE || "robbie2026!";

export async function POST(request: Request) {
  try {
    const { passcode } = await request.json();

    if (passcode === ADMIN_PASSCODE) {
      const response = NextResponse.json({ success: true, message: "Authenticated successfully" });
      response.cookies.set("admin_session", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      });
      return response;
    }

    return NextResponse.json({ success: false, message: "Invalid admin passcode" }, { status: 401 });
  } catch {
    return NextResponse.json({ success: false, message: "Authentication failed" }, { status: 500 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true, message: "Logged out" });
  response.cookies.set("admin_session", "", { maxAge: 0, path: "/" });
  return response;
}
