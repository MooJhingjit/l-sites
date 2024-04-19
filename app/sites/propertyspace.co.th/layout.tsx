import { Metadata } from "next";
import Link from "next/link";
import React from "react";
import Navigation from "./_components/Navigation";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
  { name: "Contact Us", href: "/contact-us" },
];

type Props = {
  routeName?: string;
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  console.log(props.routeName)
  return (
    <div className="relative">
      <div className="absolute left-0 right-0">
        <Navigation hasBackground={props.routeName !== 'home'} />
      </div>
      {props.children}
    </div>
  );
}
