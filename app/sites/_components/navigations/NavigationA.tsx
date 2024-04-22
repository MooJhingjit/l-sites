import Link from 'next/link';
import React from 'react'
import { classNames } from '../../utils/component.helpers';
import Logo from '../Logo';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Blocks } from 'lucide-react';

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
              <li>
                <Profile />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

const solutions = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: Blocks },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: Blocks },
  { name: 'Security', description: "Your customers' data will be safe and secure", href: '#', icon: Blocks },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: Blocks },
]

const Profile = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className='flex items-center'>
          <span className="inline-block w-8 h-8 overflow-hidden rounded-full bg-gray-100">
            <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        {solutions.map((item) => (
          <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
            </div>
            <div>
              <a href={item.href} className="font-semibold text-gray-900">
                {item.name}
                <span className="absolute inset-0" />
              </a>
              <p className="mt-1 text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  )
}