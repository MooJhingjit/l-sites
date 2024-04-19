import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { classNames } from '../../utils/component.helpers';

// Buy, Rent, New Developments, Blog, About Us, Contact Us
const navigation = [
  { name: "Buy", href: "/for-sale" },
  { name: "Rent", href: "/for-rent" },
  { name: "New Developments", href: "/new-developments" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Navigation({ hasBackground }: { hasBackground: boolean }) {
  return (
    <nav className={classNames(
      "py-4 px-8 fixed top-0 left-0 right-0 z-10 transition duration-200",
      hasBackground ? "bg-[#16263F] shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto ">
        <div className="relative flex items-center justify-between">
          <div className="w-auto">
            <Link className="inline-block" href="#">
              <Image src="/propertyspace.png" alt="logo" width="120" height="100" />
              {/* {
                hasBackground ? (
                  <Image src="/propertyspace-bg.webp" alt="logo" width="120" height="100" />
                ) : (
                  <Image src="/propertyspace.png" alt="logo" width="120" height="100" />
                )
              } */}
            </Link>
          </div>
          <div className="relative hidden lg:block">
            <ul className="flex items-center">
              {
                navigation.map((item, index) => (
                  <li key={index} className="font-heading mr-12 text-sm ">
                    <Link href={item.href} className={classNames(
                      hasBackground ? "text-white" : "text-black"
                    
                    )}>
                      {item.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* <div className="w-auto hidden lg:block"><a className="inline-block py-4 px-8 font-heading font-medium text-base text-white bg-green-500 hover:bg-green-600 border border-green-500 hover:border-green-600 rounded-sm transition duration-200" href="#">Contact</a></div>
          <div className="w-auto lg:hidden">
            <a className="navbar-burger inline-flex w-14 h-14 justify-center items-center bg-gray-500 hover:bg-gray-600 rounded-full" href="#">
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 9H1M19 1H1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </a>
          </div> */}
        </div>
      </div>
    </nav>
  )
}
