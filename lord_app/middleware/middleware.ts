import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "@/app/lib/jwt";

export function middleware(req: NextRequest) {
  const auth = req.headers.get("authorization");

  if (!auth) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  const token = auth.split(" ")[1];

  try {
    verifyToken(token);
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
