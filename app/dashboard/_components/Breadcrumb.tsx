'use client'
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import useBreadcrumbStore from '../hooks/useBreadcrumbStore';

export default function DashboardBreadcrumb() {
  const breadcrumbs = useBreadcrumbStore(state => state.breadcrumbs);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {
          breadcrumbs.map((breadcrumb, index) => (
            <>
              <BreadcrumbItem key={index}>
                <BreadcrumbLink href={breadcrumb.href}>{breadcrumb.label}</BreadcrumbLink>
              </BreadcrumbItem>

              {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
            </>
          ))
        }
      </BreadcrumbList>
    </Breadcrumb>
  )
}
