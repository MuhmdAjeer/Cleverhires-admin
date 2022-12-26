import { NextRequest, NextResponse } from "next/server";
import verify from "./helpers/verify";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // check for authenticated routes
  // if (pathname === '<path-for-which-you-want-to-authenticate>') {
  console.log({ pathname });
  if (pathname.startsWith("/_next")) return NextResponse.next();
  const cookie = req.cookies.get("token");
  const url = req.nextUrl.clone();
  url.pathname = '/users'
  if (pathname === "/login" && !cookie) return NextResponse.next();
  else if(pathname === '/login' && cookie) return NextResponse.redirect(url)

  if (!cookie) {
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  // if (verify(req)) {
  //   console.log('in');
  //   const url = req.nextUrl.clone()
  //   url.pathname = '/login'
  //   return NextResponse.redirect(url)

  // }

  console.log("out");

  // }

  // if user is authenticated this will be called which continues the
  // normal flow of application
  return NextResponse.next();
}
