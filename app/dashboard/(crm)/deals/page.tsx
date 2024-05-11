import React from "react";
import PageLayout from "../../components/PageLayout";

export default function LeadPage() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Deals", href: "/deals" }]}
      className="w-full h-full flex items-center justify-center"
    >
      <p>Loading..</p>
    </PageLayout>
  );
}
