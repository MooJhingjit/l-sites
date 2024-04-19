import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

// Custom middleware to log or use the hostname
export async function middleware(req: NextRequest) {
  const host = req.headers.get("host");
  const domain = host?.replace("test.", "").split(":")[0];

  if (!domain) {
    return NextResponse.next();
  }

  // all available languages will be configured in the site config
  const config = await import(`./app/sites/${domain}/config.ts`);
  const { default: siteConfig } = config;
  
  const intlMiddleware = createMiddleware({
    locales: siteConfig.locales,
    defaultLocale: siteConfig.defaultLocale,
    localePrefix: "as-needed",
  });
  // Continue with the intl middleware
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/", "/(th|en|fr|de)/:path*"],
};
