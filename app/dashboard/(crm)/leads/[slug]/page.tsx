import React from "react";
import PageLayout from "../../../components/PageLayout";

export default function LeadDetailPage({ slug }: { slug: string }) {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Home", href: "/dashboard" },
        { label: "Leads", href: "/dashboard/leads" },
        { label: "Lead Kanban board", href: "/dashboard/leads/a" },
      ]}
      className="w-full h-full  flex items-center justify-center"
    >
      <p>{slug} Detail page Loading..</p>
    </PageLayout>
  );
}
