import React from "react";
import { MainLayout } from "@dashboard_components/layouts/MainLayout";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainLayout>{children}</MainLayout>;
}
