import React from 'react';
import ClientWrapper from '../../components/ClientWrapper';

export default function LeadPage() {
  return (
    <ClientWrapper
      breadcrumbs={[
        { label: 'Deals', href: '/deals' }
      ]}
      className="w-full h-full flex items-center justify-center">
      <p>Loading..</p>
    </ClientWrapper>
  );
}
