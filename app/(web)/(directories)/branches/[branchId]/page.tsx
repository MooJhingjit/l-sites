import TemplateLoader from "@/app/(web)/templates/TemplateLoader";

const getData = () => {
  return {
    title: "Branch",
    description: "Branch page",
    template: "default",
  };
};
export default function BranchPage() {
  const { title, description, template } = getData();

  return (
    <TemplateLoader
      routePattern="branches/[branchId]"
      template={template}
      title={title}
      description={description}
    />
  );
}
