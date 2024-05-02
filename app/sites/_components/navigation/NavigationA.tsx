
import Link from "next/link";
import React from "react";
import { classNames } from "@/lib/utils";
import Logo from "../Logo";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import SidebarNavigationA from "./SidebarNavigationA";

type Navigation = {
  name: string;
  href: string;
  key: string;
};

type Props = {
  isTransparentBg: boolean;
  navigation: Navigation[];
  phone: string;
  currentRoute: string;
  isWhiteLogo: boolean;
};

export default function NavigationA(props: Readonly<Props>) {
  const { phone, isWhiteLogo = true, isTransparentBg, navigation, currentRoute } = props;
  return (
    <nav
      className={classNames(
        "py-4 px-4 sm:px-8  z-10 transition duration-200",
        isTransparentBg ? "bg-transparent" : "bg-primary shadow-md"
      )}
    >
      <div className=" ">
        <div className="relative flex items-center justify-between">
          <div className="w-auto ">
            <Link className="" href={"/"}>
              <Logo isWhite={isWhiteLogo} width={140} height={100} />
            </Link>
          </div>
          <div className="relative hidden md:block">
            <ul className="flex items-center">
              {navigation.map((item) => (
                <li key={item.name} className="font-heading mr-12 text-sm ">
                  <Link
                    href={item.href}
                    className={classNames(
                      !isTransparentBg ? "text-white hover:border-b" : "text-primary-foreground hover:border-b ",
                      (currentRoute === item.key) ? "border-b border-white" : "",
                      "pb-1"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="">
                <Button
                  variant={isTransparentBg ? "overlay" : "muted"}
                  className="space-x-2"
                >
                  <Phone size={12} />
                  <span>{phone}</span>
                </Button>
              </li>
            </ul>
          </div>

          {/* mobile */}
          <div className=" md:hidden flex space-x-4">
            {/* <Button
              variant={isTransparentBg ? "overlay" : "muted"}
              className="flex space-x-10  md:hidden"
              asChild
            >
              <div className="flex items-center space-x-2 ">
                <Phone size={12} />
                <span>{phone}</span>
              </div>
            </Button> */}
            <Button
              variant={isTransparentBg ? "overlay" : "muted"}
              asChild
            >
              <SidebarNavigationA navigation={navigation} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
