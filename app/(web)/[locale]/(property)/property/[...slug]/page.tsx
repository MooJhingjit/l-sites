import PageController from "@/app/sites/PageController";
import { Params, SearchParams } from "@/lib/definitions";

type Props = {
  params: Params;
  searchParams: SearchParams;
};

export default async function PropertyPage({
  params,
  searchParams,
}: Readonly<Props>) {
  return (
    <PageController
      params={{ ...params, routes: ["property"] }}
      searchParams={searchParams}
    />
  );
}
