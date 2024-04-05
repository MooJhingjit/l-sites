import { headers } from "next/headers";
import { SiteKeys, sites } from "./site.config";

export const getDomain = () => {
  let referer = headers().get('referer')
  if (!referer) {
    referer = 'invalid'
  }
  const url = new URL(referer);
  return url.hostname.replace("test.", "") as SiteKeys;
}

export const getMetaData = (route: string) => {
  const domain = getDomain();
  const { metaData } = sites[domain]
  return metaData[route]
}