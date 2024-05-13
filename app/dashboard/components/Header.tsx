"use client";
import { forwardRef } from "react";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
} from "./MobileNavigation";
import { useMobileNavigationStore } from "./MobileNavigation";
import { QuickCreateMenu } from "./QuickCreateMenu";
import { ThemeToggle } from "./ThemeToggle";
import { GlobalSearch } from "./GlobalSearch";

const Header = forwardRef<React.ElementRef<"div">, { className?: string }>(
  function Header({ className }, ref) {
    let { isOpen: mobileNavIsOpen } = useMobileNavigationStore();
    let isInsideMobileNavigation = useIsInsideMobileNavigation();

    let { scrollY } = useScroll();
    let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9]);
    let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8]);

    return (
      <motion.div
        ref={ref}
        className={clsx(
          className,
          "fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 pl-4 pr-0 transition sm:px-6 lg:z-30 lg:px-8",
          !isInsideMobileNavigation &&
          "backdrop-blur-sm lg:left-60 dark:backdrop-blur",
          isInsideMobileNavigation
            ? "bg-white dark:bg-zinc-900"
            : "bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]",
        )}
        style={
          {
            "--bg-opacity-light": bgOpacityLight,
            "--bg-opacity-dark": bgOpacityDark,
          } as React.CSSProperties
        }
      >
        <div
          className={clsx(
            "absolute inset-x-0 top-full h-px transition",
            (isInsideMobileNavigation || !mobileNavIsOpen) &&
            "bg-zinc-900/7.5 dark:bg-white/7.5",
          )}
        />
        <div className="flex items-center gap-5 lg:hidden">
          <MobileNavigation />
        </div>
        <div className="flex items-center   w-full gap-5">
          <div className="flex space-x-1 w-full  sm:justify-end">
            {/* <MobileSearch /> */}
            <GlobalSearch />
            <QuickCreateMenu />
          </div>
          <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    );
  },
);

export default Header;
