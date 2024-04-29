import { SearchParams } from "@/lib/definitions";
import { headers } from "next/headers";
import siteConfig, { SiteAvailable } from "./siteConfig";

const getDomain = () => {
  let host = headers().get("host") ?? "invalid";
  const hostname = host.replace("test.", "").split(":")[0];
  return hostname as SiteAvailable;
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
