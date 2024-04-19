import PageController from "@/app/sites/PageController";

export default async function OfficePage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  return <PageController routePattern={`offices/[slug]`} params={params} />;
}
