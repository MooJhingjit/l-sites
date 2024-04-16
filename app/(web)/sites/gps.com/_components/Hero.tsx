import React from "react";
import HeroABC from "../../_components/hero/HeroABC";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("home.hero");
  return (
    <HeroABC
      title={t("title")}
      imageBackground="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
      description={t("description")}
    />
  );
}