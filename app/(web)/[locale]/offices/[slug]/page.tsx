import PageController from "@/app/sites/PageController";
import { Params, SearchParams } from "@/lib/definitions";

type Props = {
  params: Params
  searchParams: SearchParams
}

export default async function OfficePage({ params, searchParams }: Readonly<Props>) {

  return (
    <PageController
      params={params}
      searchParams={searchParams}
    />
  );
}



// import PageController from "@/app/sites/PageController";

// export default async function OfficePage({
//   params,
// }: {
//   params: {
//     slug: string;
//   };
// }) {
//   return <PageController routePattern={['offices/[slug]']} params={params} />;
// }
