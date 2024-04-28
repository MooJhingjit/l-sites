"use client";
import React, { useState } from 'react'
import useScroll from '@/lib/hooks/useScroll';
import { classNames } from "@/lib/client-utils";

export default function NavigationClientWrapper(props: Readonly<{ isNavSticky: boolean, children: React.ReactNode }>) {
  const [opacity, setOpacity] = useState(1);

  const { isNavSticky } = props;
  // Configure the callback to set the opacity based on the scroll ratio
  const updateOpacity = (scrollRatio: number) => {
    if (!isNavSticky || (!opacity && scrollRatio)) {
      return;
    }
    // console.log('first', opacity)
    setOpacity(1 - scrollRatio);
  };

  useScroll(100, updateOpacity);

  return (
    <div className={classNames(
      'z-50',
      isNavSticky ? 'fixed top-0 left-0 right-0' : 'relative',
    )} style={{ opacity }}>
      {props.children}
    </div>
  )
}


