import React from "react";
import NavigationClientWrapper from "./_components/NavigationClientWrapper";
import FooterWrapper from "./_components/FooterWrapper";
import Navigation from "../_components/navigations/NavigationA";

type Props = {
  routeName?: string;
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
  const routeWithBackground = ['home']
  const stickOnTop = routeWithBackground.includes(props.routeName ?? "home")
  console.log("stickOnTop", stickOnTop)

  return (
    <>
      <main className="relative">
        <NavigationClientWrapper stickOnTop={stickOnTop}>
          <Navigation
            routes={navigation}
            isBackgroundTransparent={stickOnTop} />
        </NavigationClientWrapper>

        <div className="min-h-40">
          {props.children}
        </div>
      </main>
      <FooterWrapper />
    </>
  );
}
