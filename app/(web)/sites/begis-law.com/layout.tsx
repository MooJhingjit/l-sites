import React from "react";
import NavigationA from "../_components/navigation/NavigationA";

const navigation = [
  { name: "Our Offices", href: "/offices" },
  { name: "Practice areas", href: "/services" },
  { name: "Case results", href: "#" },
];

type Props = {
  children: React.ReactNode;
};

export default function BegisPageLayout(props: Props) {
  return (
    <section className="overflow-hidden" style={{ background: 'url(gradia-assets/images/hero/bg.png) no-repeat', backgroundSize: 'cover' }}>
      <NavigationA menuItems={navigation} />
      {props.children}
    </section>
  );
}
