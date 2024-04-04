// import TemplateLoader from "@/app/(web)/templates/TemplateLoader";
import PageController from "@/app/(web)/sites/PageController";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: 'Sorasak2 Law Firm',
//   description: 'Sorasak Law Firm',
// };


export default async function Home() {
  return (
    <PageController
      routePattern="home"
    />
  );
}
