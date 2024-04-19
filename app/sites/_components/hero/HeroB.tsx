import { useTranslations } from "next-intl";
import React from "react";

type Props = {
  imageBackground: string;
  title: string;
  description: string;
};

export default function HeroB(props: Readonly<Props>) {
  const { imageBackground, title, description } = props;
  const t = useTranslations("global.hero");

  return (
    <section className={`h-screen bg-cover bg-[url('https://www.home-designing.com/wp-content/uploads/2015/03/small-private-pool.jpg')]`} >
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl xl:max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl text-white mb-6">{title}</h1>
        </div>
      </div>
    </section>
  );
}
