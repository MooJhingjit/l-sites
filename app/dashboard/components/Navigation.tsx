"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

// import { Button } from '@/components/Button'
import { useIsInsideMobileNavigation } from "./MobileNavigation";
// import { useSectionStore } from '@/components/SectionProvider'
import { Tag } from "./Tag";
// import { Button } from '@/components/ui/button'
// import { remToPx } from '@/lib/utils'

import Logo from "./Logo";
import ProfileSettings from "./ProfileSettings";

type Link = {
  title: string;
  icon?: React.ReactNode;
  href: string;
  subLinks?: Link[];
  creatable?: boolean;
  tag?: string;
};
export interface NavGroup {
  title: string;
  links: Link[];
}

function useInitialValue<T>(value: T, condition = true) {
  let initialValue = useRef(value).current;
  return condition ? initialValue : value;
}

function TopLevelNavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="md:hidden">
      <Link
        href={href}
        className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}

function NavLink({
  href,
  children,
  tag,
  active = false,
  isAnchorLink = false,
}: {
  href: string;
  children: React.ReactNode;
  tag?: string;
  active?: boolean;
  isAnchorLink?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={clsx(
        "flex justify-between gap-2 py-1.5 pr-3 text-sm transition w-full",
        isAnchorLink ? "pl-7" : "pl-4",
        active
          ? "text-primary dark:text-white font-semibold "
          : " dark:text-muted-foreground dark:hover:text-white",
      )}
    >
      <span className="truncate">{children}</span>
      {tag && (
        <Tag variant="small" color="rose">
          {tag}
        </Tag>
      )}
    </Link>
  );
}

// function VisibleSectionHighlight({
//   group,
//   pathname,
// }: {
//   group: NavGroup
//   pathname: string
// }) {
//   let [sections, visibleSections] = useInitialValue(
//     [
//       useSectionStore((s) => s.sections),
//       useSectionStore((s) => s.visibleSections),
//     ],
//     useIsInsideMobileNavigation(),
//   )

//   let isPresent = useIsPresent()
//   let firstVisibleSectionIndex = Math.max(
//     0,
//     [{ id: '_top' }, ...sections].findIndex(
//       (section) => section.id === visibleSections[0],
//     ),
//   )
//   let itemHeight = remToPx(2)
//   let height = isPresent
//     ? Math.max(1, visibleSections.length) * itemHeight
//     : itemHeight
//   let top =
//     group.links.findIndex((link) => link.href === pathname) * itemHeight +
//     firstVisibleSectionIndex * itemHeight

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { delay: 0.2 } }}
//       exit={{ opacity: 0 }}
//       className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"
//       style={{ borderRadius: 8, height, top }}
//     />
//   )
// }

// function ActivePageMarker({
//   group,
//   pathname,
// }: {
//   group: NavGroup
//   pathname: string
// }) {
//   let itemHeight = remToPx(2)
//   let offset = remToPx(0.25)
//   let activePageIndex = group.links.findIndex((link) => pathname.startsWith(link.href))
//   let top = offset + activePageIndex * itemHeight

//   return (
//     <motion.div
//       layout
//       className="absolute left-2 h-6 w-px bg-emerald-500"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, transition: { delay: 0.2 } }}
//       exit={{ opacity: 0 }}
//       style={{ top }}
//     />
//   )
// }

function NavigationGroup({
  group,
  className,
}: {
  group: NavGroup;
  className?: string;
}) {
  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  let isInsideMobileNavigation = useIsInsideMobileNavigation();
  let [pathname] = useInitialValue([usePathname()], isInsideMobileNavigation);

  // console.log('pathname', pathname)
  // console.log('  group.links', group.links)
  let isActiveGroup =
    group.links.findIndex((link) => {
      // to support nested links
      // if (link.subLinks) {
      //   const active = link.subLinks.findIndex((s) => pathname.startsWith(s.href))
      //   console.log(active)
      //   return active
      // }

      // console.log('href', link.href)
      return link.href === pathname;
    }) !== -1;

  return (
    <li className={clsx("relative mt-6", className)}>
      <motion.h2
        layout="position"
        className="text-xs font-semibold text-zinc-900 dark:text-white"
      >
        {group.title}
      </motion.h2>
      <div className="relative mt-3 pl-6">
        {/* <AnimatePresence initial={!isInsideMobileNavigation}>
          {isActiveGroup && (
            <VisibleSectionHighlight group={group} pathname={pathname} />
          )}
        </AnimatePresence> */}
        <motion.div
          layout
          className="absolute inset-y-0 left-6 w-px  bg-primary/10 dark:bg-white/30"
        />
        {/* <AnimatePresence initial={false}>
          {isActiveGroup && (
            <ActivePageMarker group={group} pathname={pathname} />
          )}
        </AnimatePresence> */}
        <ul role="list" className="border-l border-transparent space-y-2">
          {group.links.map((link) => (
            <motion.li key={link.href} layout="position" className="relative">
              <div className="flex relative">
                {link.icon && (
                  <div className="bg-white dark:bg-zinc-900 -ml-4 -top-1 absolute px-2 py-3">
                    <span className="">{link.icon}</span>
                  </div>
                )}
                <NavLink
                  href={link.href}
                  active={pathname === link.href}
                  tag={link.tag}
                >
                  {link.title}
                </NavLink>
              </div>
              <AnimatePresence mode="popLayout" initial={false}>
                {pathname.startsWith(link.href) && (
                  <motion.ul
                    role="list"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}
                  >
                    {link.subLinks?.map((s) => (
                      <li>
                        <NavLink
                          href={`${s.href}`}
                          active={pathname === s.href}
                          tag={""}
                          isAnchorLink
                        >
                          {s.title}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </li>
  );
}

interface NavProps extends React.ComponentPropsWithoutRef<"nav"> {
  className?: string;
  withBrand?: boolean;
  navigation: NavGroup[];
}

const Navigation = (props: NavProps) => {
  const { navigation, withBrand = true, ...rest } = props;
  return (
    <div {...rest}>
      {withBrand && (
        <div className="max-w-[200px] flex justify-start">
          <ProfileSettings />
        </div>
      )}
      <nav className="lg:mt-6" >
        <ul role="list relative">
          {/* <TopLevelNavItem href="/">Dashboard</TopLevelNavItem> */}

          {props.navigation.map((group, groupIndex) => (
            <NavigationGroup
              key={group.title}
              group={group}
              className={groupIndex === 0 ? "md:mt-0" : ""}
            />
          ))}
          {/* <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
          <Button variant="default" className="w-full">
            Sign in
          </Button>
        </li> */}
          {/* <TopLevelNavItem href="#">Website</TopLevelNavItem>
        <TopLevelNavItem href="#">Support</TopLevelNavItem> */}
          {/* <BottomLevelNavItem href="#">Support</BottomLevelNavItem> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
