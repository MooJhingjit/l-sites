import { headers } from "next/headers";

type SiteKeys = 'sorasak.com' | 'gps.com' | 'begis-law.com' | 'invalid' | 'propertyspace.co.th';

export const getDomain = () => {
  let host = headers().get("host") ?? "invalid";
  const hostname = host.replace("test.", "").split(":")[0];
  return hostname as SiteKeys;
};

