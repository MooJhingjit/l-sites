import React from 'react'
import { headers } from "next/headers";
import dynamic from "next/dynamic";
import InvalidDomain from './_components/exception/InvalidDomain';

type Props = {
  routePattern: string;
}

function extractHostname(urlString: string) {
  const url = new URL(urlString);
  return url.hostname; // This returns the domain along with any subdomains
}

const loadDynamicPage = (domain: string, routePattern: string) => {
  // in the client (domain) folder must have layout.tsx
  const layoutPath = `./${domain}/layout`;

  return dynamic(async () => {
    let pagePath = `./${domain}/${routePattern}`;

    try {
      // Try importing the specified page, If import fails, switch to the 404 page
      await import("" + pagePath);
    } catch (e) {
      pagePath = "./_components/404";
    }

    // Load both Page and Layout components simultaneously
    try {
      const [Page, Layout] = await Promise.all([
        import("" + pagePath).then(module => module.default),
        import("" + layoutPath).then(module => module.default),
      ]);
      return () => (
        <Layout>
          <Page />
        </Layout>
      );
    } catch (error) {
      console.error(error);
      return () => <InvalidDomain />;
    }


  });
};

export default function PageController(props: Readonly<Props>) {

  const { routePattern } = props;
  const referer = headers().get('referer')
  if (!referer) {
    return <InvalidDomain />;
  }

  const hostname = extractHostname(referer); // test.gps.com:
  const domain = hostname.replace("test.", ""); // gps.com

  const DynamicPage = loadDynamicPage(domain, routePattern);
  return <DynamicPage />;

}
