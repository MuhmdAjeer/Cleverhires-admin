// import { NextResponse } from "next/server";
// import {verify} from 'jsonwebtoken'


// export default function middleware() {
// //  console.log('hello');
// }
// import { NextRequest } from 'next/server'

// export function middleware(request) {
//     // token = JSON.parse(token)
//     const token = request.cookies['requestCookies']
//     console.log(token);
//   if (request.nextUrl.pathname.startsWith('/about')) {
//     // This logic is only applied to /about
//   }

//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     // This logic is only applied to /dashboard
//   }
// }

import { useRouter } from 'next/router';
import { NextRequest, NextResponse } from 'next/server'
import verify from './helpers/verify'

export function middleware(req) {
  const { pathname } = req.nextUrl;
	console.log({pathname});
  // check for authenticated routes
  // if (pathname === '<path-for-which-you-want-to-authenticate>') {
    if(pathname !== '/login'){

      if (verify(req)) {
        const url = req.nextUrl.clone()
        url.pathname = '/login'
        console.log(url);
        return NextResponse.redirect(url)
        
      }
    }
      
  // }

  // if user is authenticated this will be called which continues the
  // normal flow of application
  return NextResponse.next()
}
