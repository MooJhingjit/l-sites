import { headers } from "next/headers";
import { SiteKeys, sites } from "./site.config";

export const getDomain = () => {
  // switch to x-url instead of referer on production
  let referer = headers().get("referer") ?? "invalid";

  const url = new URL(referer);
  const hostname = url.hostname.replace("test.", "");
  return hostname as SiteKeys;
};

export const getMetaData = (
  route: string,
  options?: {
    isDynamic: boolean;
  }
) => {
  const domain = getDomain();
  const { metaData } = sites[domain];
  return metaData[route];
};
