"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Mail, Phone } from "lucide-react";

type Props = {
  menuItems: { name: string; href: string }[];
};

export default function Navigation(props: Props) {
  const pathname = usePathname();

  return (
    <section>
      <div className="flex items-center justify-between px-8 py-5">
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto mr-14">
              <Link href="/">
                <img
                  src="../gradia-assets/logos/gradia-name-white.svg"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto hidden lg:block">
              <ul className="flex items-center mr-10">
                {props.menuItems.map((item, index) => (
                  <li
                    key={item.href}
                    className="font-heading mr-9 text-white hover:text-gray-200 text-lg"
                  >
                    <Link
                      className={`link ${
                        pathname === item.href ? "border-b-2" : ""
                      }`}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-auto hidden lg:block">
              <button className="group relative font-heading block py-2 px-5 text text-white border border-white overflow-hidden rounded-10">
                <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500" />
                <div className="flex items-center space-x-4">
                  <p className="relative z-10 group-hover:text-gray-800 hover:underline flex space-x-1 items-center text-sm">
                    <Mail size={18} />
                    <span>support@begis.com</span>
                  </p>
                  <p className="relative z-10 group-hover:text-gray-800 hover:underline flex space-x-1 items-center text-sm">
                    <Phone size={16} />
                    <span> +66 9388 93884</span>
                  </p>
                </div>
              </button>
            </div>
            <div className="w-auto lg:hidden">
              <a href="#">
                <svg
                  className="navbar-burger text-gray-800"
                  width={51}
                  height={51}
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width={56} height={56} rx={28} fill="currentColor" />
                  <path
                    d="M37 32H19M37 24H19"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
        <nav className="relative z-10 px-9 py-8 bg-white h-full">
          <div className="flex flex-wrap justify-between h-full">
            <div className="w-full">
              <div className="flex items-center justify-between -m-2">
                <div className="w-auto p-2">
                  <a className="inline-block" href="#">
                    <img
                      src="gradia-assets/logos/gradia-name-black.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="w-auto p-2">
                  <a className="navbar-burger" href="#">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M6 6L18 18"
                        stroke="#111827"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center py-8 w-full">
              <ul>
                <li className="mb-12">
                  <a
                    className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-12">
                  <a
                    className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Solutions
                  </a>
                </li>
                <li className="mb-12">
                  <a
                    className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Resources
                  </a>
                </li>
                <li>
                  <a
                    className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-end w-full">
              <div className="flex flex-wrap">
                <div className="w-full">
                  <button className="p-0.5 font-heading block w-full text-lg text-gray-900 font-medium rounded-10">
                    <div className="py-2 px-5 rounded-10">
                      <p>Login</p>
                    </div>
                  </button>
                </div>
                <div className="w-full">
                  <button className="group relative p-0.5 font-heading block w-full text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10">
                    <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500" />
                    <div className="py-2 px-5 bg-white rounded-lg">
                      <p className="relative z-10">Start Free Trial</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}