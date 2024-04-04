// import TemplateLoader from "@/app/(web)/templates/TemplateLoader";
import PageController from "@/app/(web)/sites/PageController";
import { Metadata } from "next";
import { headers } from "next/headers";

export const metadata: Metadata = (() => {
  const referer = headers().get("x-url");
  console.log("referer", referer);

  // return new Promise((resolve, reject) => {
  //   if (!referer) {
  //     reject(new Error("Invalid domain"));
  //   }
  //   resolve({
  //     title: "Home",
  //     description: "Home page",
  //   });
  // });

  return {
    title: "Home",
    description: "Home page",
  }
})();

export default async function Home() {
  return <PageController routePattern="home" />;
}
