'use client'
import React, { useEffect } from 'react';
import useBreadcrumbStore, { BreadcrumbItem } from '../lib/hooks/useBreadcrumbStore';
export default function ClientWrapper({ children, className, breadcrumbs }:
  {
    children: React.ReactNode,
    className: string
    breadcrumbs: BreadcrumbItem[]
  }
) {

  const setBreadcrumbs = useBreadcrumbStore(state => state.setBreadcrumbs);

  useEffect(() => {

    if (breadcrumbs.length > 0) {
      setBreadcrumbs(breadcrumbs);
    }
    
    // Optional: clear on unmount
    return () => {
      useBreadcrumbStore.getState().clearBreadcrumbs();
    };
  }, [setBreadcrumbs]);

  return (
    <div
      className={`${className}`}
    >
      {children}
    </div>
  )
}
