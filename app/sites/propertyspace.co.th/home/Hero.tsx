import React from "react";
import { useTranslations } from "next-intl";
import Navigation from "../_components/Navigation";

export default function Hero() {
  const t = useTranslations("home.hero");
  return (
    <section className={`h-screen bg-cover bg-[url('https://www.home-designing.com/wp-content/uploads/2015/03/small-private-pool.jpg')]`} >
      <div className="h-full container px-0 mx-auto">
        {/* <Navigation /> */}
        <div className="h-full mx-auto flex pt-32">
          <div className=" mx-auto  w-full">

            <div className="text-white flex items-center justify-center flex-col  max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-center">{t("title")}</h1>

            </div>
            <div className="relative sm:rounded-lg  mt-16 max-w-5xl mx-auto">
              <div className="absolute inset-0 bg-gray-700  rounded-lg opacity-50 z-10 h-full"></div>
              <div className="relative p-5 sm:p-6 z-20 grid grid-cols-3 gap-6">
                <div className="border h-20 opacity-25"></div>
                <div className="border h-20 opacity-25"></div>
                <div className="border h-20 opacity-25"></div>
                <div className="border h-20 opacity-25"></div>
                <div className="border h-20 opacity-25"></div>
                <div className="border h-20 opacity-25"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
