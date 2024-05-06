// 'use client'

// import Link from "next/link";
// import { usePathname } from 'next/navigation'
// import { motion } from 'framer-motion'

import Header from "./Header";
// import { Logo } from './Logo'
import Navigation from "./Navigation";
// import Logo from "./Logo";
// import Logo from '@/app/sites/_components/Logo'
// import { type Section, SectionProvider } from './SectionProvider'

export function Layout({
  children,
  // allSections,
}: {
  children: React.ReactNode;
  // allSections: Record<string, Array<Section>>
}) {
  // let pathname = usePathname()

  return (
    // <SectionProvider sections={allSections[pathname] ?? []}>
    <div className="h-full lg:ml-60">
      <div className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
        <div className="contents lg:pointer-events-auto lg:block lg:w-60 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10">
          {/* <div className="hidden lg:flex">
            <Link href="/" aria-label="Home" className=''>
              <Logo/>
            </Link>
          </div> */}
          <Header />
          <Navigation className="hidden lg:mt-6 lg:block" />
        </div>
      </div>
      <div className="relative px-4 sm:px-6 pt-16">
        {children}
      </div>
    </div>
    // </SectionProvider>
  );
}