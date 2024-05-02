import React from "react";
import Navigation from "@/app/sites/begis-law.com/_components/Navigation";
import Link from "next/link";
// import "@/app/styles/begis-law.com.css"
const navigation = [
  { name: "Practice areas", href: "/services" },
  { name: "Offices", href: "/offices" },
  { name: "Case results", href: "/testimonials" },
  { name: "Team", href: "/team" },
];

type Props = {
  children: React.ReactNode;
};

export default function BegisPageLayout(props: Props) {
  return (
    <>
      <main
        className="site-b"
        style={{
          background: "url(../gradia-assets/images/hero/bg.png) no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Navigation menuItems={navigation} />
        {props.children}
      </main>
      <Footer />
    </>
  );
}

const Footer = () => {
  return (
    <section className=" overflow-hidden bg-white pt-20">
      <div className="container mx-auto px-4">
        <img
          className="mx-auto mb-16"
          src="gradia-assets/logos/gradia-name-black.svg"
          alt=""
        />
        <ul className="flex flex-wrap justify-center -m-5 pb-8">
          {navigation.map((item, index) => (
            <li className="p-5" key={index}>
              <Link
                className="font-heading text-base text-gray-900 hover:text-gray-700"
                href="#"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-b border-gray-100"></div>
        <p className="text-gray-600 text-center py-8 text-sm">
          © Copyright 2022. All Rights Reserved by BEGIS LAW.
        </p>
      </div>
    </section>
  );
};
