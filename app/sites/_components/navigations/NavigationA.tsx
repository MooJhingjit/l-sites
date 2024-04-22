import Link from 'next/link';
import React from 'react'
import { classNames } from '../../utils/component.helpers';
import Logo from '../Logo';

type Route = {
  name: string;
  href: string;
}

type Props = {
  isBackgroundTransparent: boolean;
  routes: Route[];
}

export default function Navigation(props: Props) {

  const { isBackgroundTransparent, routes } = props;

  return (
    <nav className={classNames(
      "py-4 px-8  z-10 transition duration-200",
      isBackgroundTransparent ? "bg-transparent" : "bg-[#16263F] shadow-md"
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
                routes.map((item, index) => (
                  <li key={index} className="font-heading mr-12 text-sm ">
                    <Link href={item.href} className={classNames(
                      !isBackgroundTransparent ? "text-white" : "text-black"

                    )}>
                      {item.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
