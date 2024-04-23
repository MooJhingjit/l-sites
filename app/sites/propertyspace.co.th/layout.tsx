import React from "react";
import NavigationClientWrapper from "./_components/NavigationClientWrapper";
import FooterWrapper from "./_components/FooterWrapper";
import Navigation from "../_components/navigations/NavigationA";

type Props = {
  routes: string[];
  children: React.ReactNode;
};
const navigation = [
  { name: "Buy", href: "/for-sale" },
  { name: "Rent", href: "/for-rent" },
  { name: "New Developments", href: "/new-developments" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
];


export default function Layout(props: Readonly<Props>) {
  const routeName = props.routes[0]
  const routeWithBackground = ['home']
  const stickOnTop = routeWithBackground.includes(routeName ?? "home")
  const hideFooter = ['for-sale', 'for-rent'].includes(routeName ?? "home")
  return (
    <>
      <main className="relative">
        <NavigationClientWrapper stickOnTop={stickOnTop}>
          <Navigation
            routes={navigation}
            isBackgroundTransparent={stickOnTop} />
        </NavigationClientWrapper>
        {props.children}
      </main>
      {
        hideFooter ? null : <FooterWrapper />
      }
    </>
  );
}
