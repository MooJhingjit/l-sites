import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { getDomain } from "@/app/(web)/sites/utils/site.helpers";

// Can be imported from a shared config
const locales = ["en", "th", "fr"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  const domain = getDomain();
  if (!domain) {
    return { messages: {} };
  }

  const [siteMessages, globalMessages] = await Promise.all([
    import(`./app/(web)/sites/${domain}/_components/_messages/${locale}.json`),
    import(`./app/(web)/sites/_components/_messages/${locale}.json`),
  ]);

  const messages = { ...siteMessages.default, ...globalMessages.default };
  return { messages };
});
