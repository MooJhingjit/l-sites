// import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { getSite } from "./lib/server-utils";

// Custom middleware to log or use the hostname
export async function middleware(req: NextRequest) {
  // const host = req.headers.get("host");
  // const domain = host?.replace("test.", "").split(":")[0]; // Remove the test subdomain and port

  const { config } = getSite();
  // all available languages will be configured in the site config
  // const config = await import(`./app/sites/${domain}/config.ts`);
  // const { default: siteConfig } = config;

  const intlMiddleware = createMiddleware({
    locales: config.locales,
    defaultLocale: config.defaultLocale,
    localePrefix: "as-needed",
  });

  // Continue with the intl middleware
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)", "/(th|en|fr|de)/:path*"],
};

// https://next-intl-docs.vercel.app/docs/routing/middleware#locale-prefix

// Additional logic to handle specific routes
// const { pathname } = req.nextUrl;
// // Regex to check for specific routes
// console.log('first pathname', pathname)
// const localeRegexPart = siteConfig.locales.join('|');
// if (pathname.match(`^\/(?:${localeRegexPart})?\/?(for-sale|for-rent|ขาย|เช่า)`)) {

//   const segments = pathname.split('/');
//   console.log("segments", segments)
//   // const locale = segments[1];
//   // const type = segments[2];
//   // if (type === 'for-sale' || type === 'for-rent') {
//   req.nextUrl.pathname = `/th/search`;
//   NextResponse.rewrite(req.nextUrl);
//   // )}
// }
