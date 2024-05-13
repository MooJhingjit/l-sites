import React from "react";
import PageLayout from "../../../components/PageLayout";
import LeadStageDropdown from "./LeadStageDropdown";

export default function LeadDetailPage({ params }: Readonly<{ params: { leadId: string } }>) {

  const breadcrumbs = [
    { label: "Leads", href: "/dashboard/leads" },
    {
      label: "Leroy Combs - New Lead",
      render: <LeadStageDropdown />
    },
  ]

  return (
    <PageLayout
      breadcrumbs={breadcrumbs}
      className="w-full h-full  flex items-center justify-center"
    >
      <div className="flex justify-center items-center h-screen">
        <p className="text-secondary text-2xl">Coming Soon..</p>
      </div>

    </PageLayout>
  );
}

