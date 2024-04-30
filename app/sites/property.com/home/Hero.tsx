import React from "react";
import { useTranslations } from "next-intl";
import HeroOverlay from "../../_components/hero/HeroOverlay";
import HeroSearchFilter from "./HeroSearchFilter";
import TopLocations from "./TopLocations";



export default function Hero() {
  const t = useTranslations("home.hero");
  return (
    <HeroOverlay backgroundImage="https://img.nestopa.com/img/projects/5099/sQOYrI1iUYRRCi5yIEK9xeo5T3tRmVFknJO23k02.jpg?p=full">
      <div className="h-full mx-auto flex pt-40">
        <div className=" mx-auto  w-full px-8 lg:px-0">

          <div className="text-primary-foreground flex items-start sm:items-center justify-center flex-col  max-w-4xl mx-auto">
            <h1 className="text-xl sm:text-5xl font-heading font-bold text-center text-primary-foreground">{t("title")}</h1>
          </div>
          <div className="relative sm:rounded-lg mt-6 sm:mt-10 max-w-3xl mx-auto">
            <HeroSearchFilter />
            <TopLocations/>
          </div>
        </div>
      </div>
    </HeroOverlay>

  );
}



{/* <div className="absolute inset-0 bg-white/20  rounded-lg z-10 h-full"></div>
<div className="relative p-5 sm:p-6 z-20 grid grid-cols-3 gap-6">
  <div className=" h-24 opacity-25"></div>
  <div className=" h-24 opacity-25"></div>
  <div className=" h-24 opacity-25"></div>
  <div className=" h-24 opacity-25"></div>
  <div className=" h-24 opacity-25"></div>
  <div className=" h-24 opacity-25"></div>
</div> */}