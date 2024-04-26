import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const exceptRouteParams = {
  en: {
    propertyTypes: ["properties", "condos", "apartments", "houses", "land"],
    placeTypes: ["mrt", "bts"],
    tenure: ["for-sale", "for-rent"],
  },
  th: {
    propertyTypes: [
      "อสังหาริมทรัพย์",
      "คอนโด",
      "อพาร์ทเม้นท์",
      "บ้าน",
      "ที่ดิน",
    ],
    placeTypes: ["เอ็มอาร์ที", "บีทีเอส"],
    tenure: ["ขาย", "เช่า"],
  },
};

const propertyTypes = [
  ...exceptRouteParams.en.propertyTypes,
  ...exceptRouteParams.th.propertyTypes.map(encodeURIComponent),
].join("|");

const placeTypes = [
  ...exceptRouteParams.en.placeTypes,
  ...exceptRouteParams.th.placeTypes.map(encodeURIComponent),
].join("|");

const tenure = [
  ...exceptRouteParams.en.tenure,
  ...exceptRouteParams.th.tenure.map(encodeURIComponent),
].join("|");

const bedUnit = `-beds|${encodeURIComponent("ห้องนอน")}`;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // tenure and type is required
      {
        source: `/:locale/:tenure(${tenure})/:type(${propertyTypes})`,
        destination: "/:locale/property-search?type=:type&tenure=:tenure",
      },
      {
        source: `/:locale/:tenure(${tenure})/:type(${propertyTypes})/:bedrooms(\\d)(${bedUnit})`,
        destination:
          "/:locale/property-search?type=:type&tenure=:tenure&bedrooms=:bedrooms",
      },
      // place, beds
      {
        source: `/:locale/:tenure(${tenure})/:placeType(${placeTypes})/:place/:type(${propertyTypes})`,
        destination:
          "/:locale/property-search?type=:type&tenure=:tenure&placeType=:placeType&place=:place",
      },
      {
        source: `/:locale/:tenure(${tenure})/:placeType(${placeTypes})/:place/:type(${propertyTypes})/:bedrooms(\\d)(${bedUnit})`,
        destination:
          "/:locale/property-search?type=:type&tenure=:tenure&bedrooms=:bedrooms&placeType=:placeType&place=:place",
      },

      // location, beds
      {
        source: `/:locale/:tenure(${tenure})/:location_1/:type(${propertyTypes})`,
        destination:
          "/:locale/property-search?type=:type&tenure=:tenure&location_1=:location_1",
      },
      {
        source: `/:locale/:tenure(${tenure})/:location_1/:type(${propertyTypes})/:bedrooms(\\d)(${bedUnit})`,
        destination:
          "/:locale/property-search?type=:type&tenure=:tenure&location_1=:location_1&bedrooms=:bedrooms",
      },
      {
        source: `/:locale/:tenure(${tenure})/:location_1/:location_2/:type(${propertyTypes})`,
        destination:
          "/:locale/property-search?type=:type&tenure=:tenure&location_1=:location_1&location_2=:location_2",
      },
      {
        source: `/:locale/:tenure(${tenure})/:location_1/:location_2/:type(${propertyTypes})/:bedrooms(\\d)(${bedUnit})`,
        destination:
          "/:locale/property-search?type=:type&tenure=:tenure&location_1=:location_1&location_2=:location_2&bedrooms=:bedrooms",
      },
      {
        source: `/:locale/:tenure(${tenure})/:location_1/:location_2/:location_3/:type(${propertyTypes})`,
        destination:
          "/:locale/property-search?type=:type&tenure=:tenure&location_1=:location_1&location_2=:location_2&location_3=:location_3",
      },
      {
        source: `/:locale/:tenure(${tenure})/:location_1/:location_2/:location_3/:type(${propertyTypes})/:bedrooms(\\d)(${bedUnit})`,
        destination:
          "/:locale/property-search?type=:type&tenure=:tenure&location_1=:location_1&location_2=:location_2&location_3=:location_3&bedrooms=:bedrooms",
      },
    ];
  },
};

export default withNextIntl(nextConfig);

// https://nextjs.org/docs/app/api-reference/next-config-js/rewrites#regex-path-matching
