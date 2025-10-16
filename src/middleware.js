import { NextResponse } from "next/server";

export function middleware(request) {
//   console.log("Middleware running for:", request.nextUrl.pathname);
  return NextResponse.next();
}
