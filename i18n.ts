import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { getSite } from "@/lib/server-utils";
import loadMessages from "./lib/data";

// Can be imported from a shared config
const locales = ["en", "th", "fr"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  const { domain } = getSite();
  const messages = await loadMessages(domain, locale);
  // console.log("messages", messages)
  return { messages };
});
