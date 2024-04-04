// import TemplateLoader from "@/app/(web)/templates/TemplateLoader";
import PageController from "@/app/(web)/sites/PageController";

export default async function Home() {
  return (
    <PageController
      routePattern="home"
    />
  );
}
