import React from "react";
import dynamic from "next/dynamic";
import InvalidDomain from "./_components/exception/InvalidDomain";
import { getDomain, decodeSearchParams } from "@/app/sites/utils/site.helpers";
import { Params, SearchParams } from "@/lib/definitions";

const loadDynamicPage = (domain: string, params: Params, searchParams: SearchParams) => {
  const layoutPath = `./${domain}/layout`;

  return dynamic(async () => {
    let pagePath = `./${domain}/${params.routes[0]}`;
    // let pagePath = `./${domain}/home`;
    pagePath = pagePath.replace(/,/g, "/");
    try {
      // Try importing the specified page, If import fails, switch to the 404 page
      // console.log("load component", pagePath);
      await import("" + pagePath);
    } catch (e) {
      pagePath = "./_components/404";
    }

    // Load both Page and Layout components simultaneously
    try {
      const [Page, Layout] = await Promise.all([
        import("" + pagePath).then((module) => module.default),
        import("" + layoutPath).then((module) => module.default),
      ]);
      return () => {
        // { searchParams }: { searchParams: SearchParams }

        console.log('params', params)
        console.log('searchParams', searchParams)
        return (
          <Layout routes={params.routes}>
            <Page searchParams={searchParams} params={params} />
          </Layout>
        );
      };
    } catch (error) {
      console.error(error);
      return () => <InvalidDomain />;
    }
  });
};

type Props = {
  params: Params;
  searchParams: SearchParams
}

export default async function PageController(props: Readonly<Props>) {
  const { searchParams, params } = props;
  // console.log("original parameters", params, searchParams)
  const domain = getDomain();

  if (!domain) {
    return <InvalidDomain />;
  }

  // to support url localization the searchParams should be decoded (encoded in the url by default)
  const DynamicPage = await loadDynamicPage(domain, params, decodeSearchParams(searchParams));
  return <DynamicPage />;
}
