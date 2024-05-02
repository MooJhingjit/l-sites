export type SiteAvailable =
  | "sorasak.com"
  | "gps.com"
  | "begis-law.com"
  | "invalid"
  | "propertyspace.co.th"
  | "property.com";

type SiteConfig = {
  name: string;
  locales: string[];
  defaultLocale: string;
  phone?: string;
  email?: string;
};

const siteConfig: Record<SiteAvailable, SiteConfig> = {
  "sorasak.com": {
    name: "Sorasak",
    locales: ["en"],
    defaultLocale: "en",
  },
  "gps.com": {
    name: "GPS",
    locales: ["en"],
    defaultLocale: "en",
  },
  "begis-law.com": {
    name: "Begis Law",
    locales: ["en"],
    defaultLocale: "en",
  },
  "propertyspace.co.th": {
    name: "Property Space",
    locales: ["en", "th"],
    defaultLocale: "th",
  },
  "property.com": {
    name: "Property",
    locales: ["en", "th"],
    defaultLocale: "en",
  },
  invalid: {
    name: "Invalid",
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default siteConfig;
