// import { NextResponse } from "next/server";
// import {verify} from 'jsonwebtoken'


// export default function middleware() {
// //  console.log('hello');
// }
import { NextRequest } from 'next/server'

export function middleware(request) {
    // token = JSON.parse(token)
    const token = request.cookies['requestCookies']
    console.log(token);
  if (request.nextUrl.pathname.startsWith('/about')) {
    // This logic is only applied to /about
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // This logic is only applied to /dashboard
  }
}