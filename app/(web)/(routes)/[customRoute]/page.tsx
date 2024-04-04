import PageController from "@/app/(web)/sites/PageController";

export default async function CustomRoute({ params }: Readonly<{ params: { customRoute: string } }>) {
  return (
    <PageController
      routePattern={params.customRoute}
    />
  );
}
