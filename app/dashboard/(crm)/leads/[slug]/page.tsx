import React from 'react';
import ClientWrapper from '../../../components/ClientWrapper';

export default function LeadDetailPage({
  slug,
}: {
  slug: string;
}) {
  return (
    <ClientWrapper
      breadcrumbs={[
        { label: 'Home', href: '/dashboard' },
        { label: 'Leads', href: '/dashboard/leads' },
        { label: 'Lead Kanban board', href: '/dashboard/leads/a' },
      ]}
      className="w-full h-full  flex items-center justify-center">
      <p>{slug} Detail page Loading..</p>
    </ClientWrapper>
  );
}
