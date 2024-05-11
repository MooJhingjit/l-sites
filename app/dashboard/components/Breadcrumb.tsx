"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import useBreadcrumbStore from "../lib/hooks/useBreadcrumbStore";

export default function DashboardBreadcrumb() {
  const breadcrumbs = useBreadcrumbStore((state) => state.breadcrumbs);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.length > 0 && (
          <>
            <BreadcrumbItem key={"home"}>
              <BreadcrumbLink href={"/dashboard"}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}

        {breadcrumbs.map((breadcrumb, index) => (
          <>
            <BreadcrumbItem key={index}>
              {breadcrumb.href ? (
                <BreadcrumbLink href={breadcrumb.href}>
                  {breadcrumb.label}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage className="font-semibold">
                  {breadcrumb.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>

            {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
