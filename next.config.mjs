import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const propertyTypes = [
  "properties",
  "condos",
  "apartments",
  "houses",
  "land",
].join("|");

const tenure = ["for-sale", "for-rent"].join("|");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Define rewrites
  async rewrites() {
    return [
      {
        source: `/:locale/:tenure(${tenure})/:type(${propertyTypes})`,
        destination: "/:locale/search?type=:type&tenure=for-sale",
      },
      {
        source: `/:locale/:tenure(${tenure})/:type(${propertyTypes})/:beds(\\d+-beds)`,
        destination: "/:locale/search?type=:type&tenure=for-sale&beds=:beds",
      },
      {
        source: `/:locale/:tenure(${tenure})/:type(${propertyTypes})/:location1`,
        destination:
          "/:locale/search?type=:type&tenure=for-sale&location1=:location1",
      },
      {
        source: `/:locale/:tenure(${tenure})/:type(${propertyTypes})/:location1/:location2`,
        destination:
          "/:locale/search?type=:type&tenure=for-sale&location1=:location1&location2=:location2",
      },
    ];
  },
};

export default withNextIntl(nextConfig);

// https://nextjs.org/docs/app/api-reference/next-config-js/rewrites#regex-path-matching
