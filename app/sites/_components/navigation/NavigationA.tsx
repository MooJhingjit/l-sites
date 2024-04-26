import Link from 'next/link';
import React from 'react'
import { classNames } from "@/lib/client-utils";
import Logo from '../Logo';
import { Button } from "@/components/ui/button"
import { Phone } from 'lucide-react';

type Navigation = {
  name: string;
  href: string;
}

type Props = {
  isBackgroundTransparent: boolean;
  navigation: Navigation[];
  phone: string;

}

export default function NavigationA(props: Readonly<Props>) {

  const { phone, isBackgroundTransparent, navigation } = props;

  return (
    <nav className={classNames(
      "py-4 px-8  z-10 transition duration-200",
      isBackgroundTransparent ? "bg-transparent" : "bg-primary shadow-md"
    )}>
      <div className="container mx-auto ">
        <div className="relative flex items-center justify-between">
          <div className="w-auto">
            <Link className="inline-block" href={"/"}>
              <Logo
                isTransparent={isBackgroundTransparent}
                width={140}
                height={100}
              />
            </Link>
          </div>
          <div className="relative hidden lg:block">
            <ul className="flex items-center">
              {
                navigation.map((item) => (
                  <li key={item.name} className="font-heading mr-12 text-sm ">
                    <Link href={item.href} className={classNames(
                      !isBackgroundTransparent ? "text-white" : "text-primary"

                    )}>
                      {item.name}
                    </Link>
                  </li>
                ))
              }
              <li className=''>
                <Button variant={isBackgroundTransparent ? "overlay" : "secondary"} className='space-x-2'>
                  <Phone size={12} /><span>{phone}</span>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
