import PageController from "@/app/sites/PageController";
import { Meta, Params, SearchParams } from "@/lib/definitions";
import { getMessages, getTranslations } from "next-intl/server";
import type { ResolvingMetadata } from 'next'

type Props = {
  params: Params
  searchParams: SearchParams
}

// export async function generateMetadata(
//   { params, searchParams }: Props
// ) {
//   // const message = await getMessages();
//   const routeName =  "hone"// params.routes[0]
//   const t = await getTranslations(`${routeName}.meta`);
//   console.log('t = ', t("title", { propertyType: "Condo" }))

//   // const t = useTranslations('home.hero')
//   // console.log(t)
//   // const { meta } = message.home as { meta: Meta }

//   return {
//     title: t("title", { propertyType: "Condo" }),
//     description: t("title", { propertyType: "Condo" })
//   };
// }

export default function CustomRoute({ params, searchParams }: Readonly<Props>) {

  return (
    <PageController
      params={{...params, routes: ["blog"]}}
      searchParams={searchParams}
    />
  );
}


