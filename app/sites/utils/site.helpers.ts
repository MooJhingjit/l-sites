import { headers } from "next/headers";
import { SiteKeys, sites } from "./site.config";

export const getDomain = () => {
  let host = headers().get("host") ?? "invalid";
  const hostname = host.replace("test.", "").split(":")[0];
  return hostname as SiteKeys;
};

export const getMetaData = (
  route: string,
  options?: {
    isDynamic: boolean;
  }
) => {
  const domain = getDomain();

  console.log('domain', domain);
  
  const { metaData } = sites[domain];
  return metaData['home']; // route
};
