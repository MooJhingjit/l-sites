import React from 'react';
import ClientWrapper from '../_components/ClientWrapper';

export default function LeadPage() {
  return (
    <ClientWrapper
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Deals', href: '/deals' }
      ]}
      className="w-full h-full bg-gray-50 flex items-center justify-center">
      <p>Loading..</p>
    </ClientWrapper>
  );
}
