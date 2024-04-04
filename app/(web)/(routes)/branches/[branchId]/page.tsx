import TemplateLoader from "@/app/(web)/sites/TemplateLoader";

const getData = () => {
  return {
    title: "Branch",
    description: "Branch page",
  };
};
export default function BranchPage() {
  const { title, description } = getData();

  return <TemplateLoader routePattern="branches/[branchId]" pageData={null} />;
}
