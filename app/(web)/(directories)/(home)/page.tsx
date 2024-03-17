import TemplateLoader from "@/app/(web)/templates/TemplateLoader";

const getData = (): Promise<{
  title: string;
  description: string;
}> => {
  // adding a delay to simulate a real API call with promises
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: "Home",
        description: "Home page",
      });
    }, 0);
  });
};
export default async function Home() {
  const { title, description } = await getData();
  return (
    <TemplateLoader
      routePattern="home"
      pageData={null}
    />
  );
}
