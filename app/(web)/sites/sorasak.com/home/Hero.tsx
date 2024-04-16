import React from "react";
import HeroABC from "../../_components/hero/HeroABC";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("home.hero");
  return (
    <HeroABC
      title={t("title")}
      imageBackground="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
      description={t("description")}
    />
  );
}
