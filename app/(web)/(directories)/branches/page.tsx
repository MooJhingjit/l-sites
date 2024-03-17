import TemplateLoader from "@/app/(web)/templates/TemplateLoader";

const getData = () => {
  return {
    title: "Home",
    description: "Home page",
  };
};
export default function BranchesPage() {
  const { title, description } = getData();
  return (
    <TemplateLoader
      routePattern="branches"
      pageData={null}
    />
  );
}
