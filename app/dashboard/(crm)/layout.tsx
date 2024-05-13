import React from "react";
import { MainLayout } from "@dashboard_components/layouts/MainLayout";
import Breadcrumb from "../components/Breadcrumb";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>
    <div className="relative">
      <div className="hidden  fixed top-0 z-[50] h-14 md:flex items-center">
        <Breadcrumb />
      </div>

      {children}
    </div>
  </MainLayout>;
}
