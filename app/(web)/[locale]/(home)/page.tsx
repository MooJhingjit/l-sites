import PageController from "@/app/(web)/sites/PageController";
import { getMetaData } from "@/app/(web)/sites/utils/site.helpers";

export async function generateMetadata() {
  const { title, description } = getMetaData('home');
  return {
    title: title,
    description: description,
  }
}

export default async function Home() {
  return (
      <PageController routePattern="home" />
  );
}