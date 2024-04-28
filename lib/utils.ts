import { SearchParams } from "@/lib/definitions";
import { headers } from "next/headers";

type SiteKeys =
  | "sorasak.com"
  | "gps.com"
  | "begis-law.com"
  | "invalid"
  | "propertyspace.co.th";

type SiteConfig = {
  locales: string[];
  defaultLocale: string;
};

const siteConfig: Record<SiteKeys, SiteConfig> = {
  "sorasak.com": {
    locales: ["en"],
    defaultLocale: "en",
  },
  "gps.com": {
    locales: ["en"],
    defaultLocale: "en",
  },
  "begis-law.com": {
    locales: ["en"],
    defaultLocale: "en",
  },
  "propertyspace.co.th": {
    locales: ["en", "th"],
    defaultLocale: "th",
  },
  invalid: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

const getDomain = () => {
  let host = headers().get("host") ?? "invalid";
  const hostname = host.replace("test.", "").split(":")[0];
  return hostname as SiteKeys;
};

export const getSite = () => {
  const domain = getDomain();
  return {
    domain,
    config: siteConfig[domain],
  };
};

export const decodeSearchParams = (searchParams: SearchParams) => {
  const decodedSearchParams: SearchParams = {};

  Object.keys(searchParams).forEach((key) => {
    decodedSearchParams[key] = decodeURIComponent(searchParams[key]);
  });

  return decodedSearchParams;
};
