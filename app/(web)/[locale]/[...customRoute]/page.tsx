import PageController from "@/app/sites/PageController";
import { getMetaData } from "@/app/sites/utils/site.helpers";


export async function generateMetadata() {
  const { title, description } = getMetaData('home');
  return {
    title: title,
    description: description,
  }
}

export default async function CustomRoute({ params }: Readonly<{ params: { customRoute: string[] } }>) {
  return (
    <PageController
      params={params}
      routePattern={params.customRoute}
    />
  );
}
