import TemplateLoader from "@/app/(web)/templates/TemplateLoader";

const getData = () => {
  return {
    title: "Home",
    description: "Home page",
    template: "default",
  };
};
export default function Home() {
  const { title, description, template } = getData();
  return (
    <TemplateLoader
      routePattern="home"
      template={template}
      title={title}
      description={description}
    />
  );
}
