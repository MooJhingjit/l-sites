import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "th", "fr"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  const currentSite = "gps.com";
  const [siteMessages, globalMessages] = await Promise.all([
    import(`./app/(web)/sites/${currentSite}/_components/_messages/${locale}.json`),
    import(`./app/(web)/sites/_components/_messages/${locale}.json`),
  ]);

  const messages = { ...siteMessages.default, ...globalMessages.default };
//   console.log(messages);
  return { messages };
});
