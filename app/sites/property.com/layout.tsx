import React from "react";
import NavigationClientWrapper from "./site_components/NavigationClientWrapper";
import FooterWrapper from "./site_components/FooterWrapper";
import NavigationA from "@components/navigation/NavigationA";
import { SearchParams } from "@/lib/definitions";

type Props = {
  routes: string[];
  searchParams: SearchParams;
  children: React.ReactNode;
};
const navigation = [
  { key: "for-sale", name: "Buy", href: "/for-sale/properties" },
  { key: "for-rent", name: "Rent", href: "/for-rent/properties" },
  { key: "blog", name: "Blog", href: "/blog" },
  { key: "contact-us", name: "Contact Us", href: "/contact-us" },
];

export default function Layout(props: Readonly<Props>) {
  const routeName = props.routes[0];
  const isNavSticky = ["home"].includes(routeName ?? "home");
  const hideFooter = ["full-search"].includes(routeName ?? "home");

  // If the route is full-search, we need to get the tenure from the search params
  const currentRoute =
    routeName === "full-search" ? props.searchParams.tenure : routeName;

  return (
    <>
      <main className="relative ">
        <NavigationClientWrapper isNavSticky={isNavSticky}>
          <NavigationA
            currentRoute={currentRoute}
            phone="02-123-4567"
            navigation={navigation}
            isWhiteLogo={true}
            isTransparentBg={isNavSticky}
          />
        </NavigationClientWrapper>
        {props.children}
      </main>
      {hideFooter ? null : <FooterWrapper />}
    </>
  );
}
