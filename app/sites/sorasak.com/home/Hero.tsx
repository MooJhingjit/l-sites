import React from "react";
import HeroA from "../../_components/hero/HeroA";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("home.hero");
  return (
    <HeroA
      title={t("title")}
      imageBackground="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
      description={t("description")}
    />
  );
}
