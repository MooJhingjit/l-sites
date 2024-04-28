import React from "react";
import { useTranslations } from "next-intl";
import HeroOverlay from "../../_components/hero/HeroOverlay";


export default function Hero() {
  const t = useTranslations("home.hero");
  return (
    <HeroOverlay backgroundImage="https://www.home-designing.com/wp-content/uploads/2015/03/small-private-pool.jpg">
      <div className="h-full mx-auto flex pt-32">
        <div className=" mx-auto  w-full">

          <div className="text-primary-foreground flex items-center justify-center flex-col  max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-center text-primary-foreground">{t("title")}</h1>

          </div>
          <div className="relative sm:rounded-lg  mt-16 max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-white/20  rounded-lg z-10 h-full"></div>
            <div className="relative p-5 sm:p-6 z-20 grid grid-cols-3 gap-6">
              <div className=" h-24 opacity-25"></div>
              <div className=" h-24 opacity-25"></div>
              <div className=" h-24 opacity-25"></div>
              <div className=" h-24 opacity-25"></div>
              <div className=" h-24 opacity-25"></div>
              <div className=" h-24 opacity-25"></div>
            </div>
          </div>
        </div>
      </div>
    </HeroOverlay>

  );
}
