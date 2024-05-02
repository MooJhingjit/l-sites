import PageController from "@/app/sites/PageController";
import { Meta, Params, SearchParams } from "@/lib/definitions";
import { getMessages } from "next-intl/server";

type Props = {
  params: Params;
  searchParams: SearchParams;
};

export async function generateMetadata() {
  const message = await getMessages();
  const { meta } = message.home as { meta: Meta };

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function HomePage({ params, searchParams }: Readonly<Props>) {
  return (
    <PageController
      params={{ ...params, routes: ["home"] }}
      searchParams={searchParams}
    />
  );
}
