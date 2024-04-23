import PageController from "@/app/sites/PageController";
import { Meta, Params, SearchParams } from "@/lib/definitions";
import { getMessages, getTranslations } from "next-intl/server";
import type { ResolvingMetadata } from 'next'

type Props = {
  params: Params
  searchParams: SearchParams
}

export async function generateMetadata(
  { params, searchParams }: Props
) {
  const t = await getTranslations(`for-sale.meta`);
  console.log(params)
  
  const title = t("title", {
    bed: "2",
    propertyType: "Condo",
    country: "Thailand",
  })

  console.log(title)

  return {
    title,
    description: t("description", { propertyType: "Condo" })
  };
}

export default function PropertyForSale({ params, searchParams }: Readonly<Props>) {
  console.log("params", { ...params, routes: ['for-sale'] })
  return (
    <PageController
      params={{ ...params, routes: ['for-sale'] }}
      searchParams={searchParams}
    />
  );
}


