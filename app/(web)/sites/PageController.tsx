import React from 'react'
import dynamic from "next/dynamic";
import InvalidDomain from './_components/exception/InvalidDomain';
import { getDomain } from '@/app/(web)/sites/utils/site.helpers';

type Props = {
  routePattern: string;
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
  const domain = getDomain();
  
  if (!domain) {
    return <InvalidDomain />;
  }
  const DynamicPage = loadDynamicPage(domain, routePattern);
  return <DynamicPage />;

}
