import PageController from "@/app/sites/PageController";
import { Meta, Params, SearchParams } from "@/lib/definitions";
import { getMessages, getTranslations } from "next-intl/server";
import type { ResolvingMetadata } from "next";

type Props = {
  params: Params;
  searchParams: SearchParams;
};

export default function Blog({ params, searchParams }: Readonly<Props>) {
  return (
    <PageController
      params={{ ...params, routes: ["blog", "blog-post"] }}
      searchParams={searchParams}
    />
  );
}
