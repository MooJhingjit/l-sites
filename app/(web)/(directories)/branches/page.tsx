import TemplateLoader from "@/app/(web)/templates/TemplateLoader";

const getData = () => {
  return {
    title: "Home",
    description: "Home page",
    template: "default",
  };
};
export default function BranchesPage() {
  const { title, description, template } = getData();
  return (
    <TemplateLoader
      routePattern="branches"
      template={template}
      title={title}
      description={description}
    />
  );
}
