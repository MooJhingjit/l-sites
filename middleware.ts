import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'th', 'fr'],
 
  // Used when no locale matches
  defaultLocale: 'en'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(th|en|fr)/:path*']
};

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import createMiddleware from 'next-intl/middleware';

// export default async function Middleware(req: NextRequest) {
//   const requestHeaders = new Headers(req.headers);
//   requestHeaders.set("x-url", req.url);

//   return NextResponse.next({
//     request: {
//       headers: requestHeaders,
//     },
//   });
// }
