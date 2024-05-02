import PageController from "@/app/sites/PageController";
import { Params, SearchParams } from "@/lib/definitions";

type Props = {
  params: Params;
  searchParams: SearchParams;
};

export default async function OfficesPage({
  params,
  searchParams,
}: Readonly<Props>) {
  return <PageController params={params} searchParams={searchParams} />;
}

// import PageController from "@/app/sites/PageController";

// export default async function OfficesPage() {
//   return (
//     <PageController
//       routePattern={['offices']}
//     />
//   )
// }
