import React from "react";
import { SettingLayout } from "@dashboard_components/layouts/SettingLayout";

export default function DashboardSettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SettingLayout>{children}</SettingLayout>;
}
