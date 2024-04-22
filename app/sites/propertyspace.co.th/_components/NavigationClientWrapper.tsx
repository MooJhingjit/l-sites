"use client";
import React, { useState } from 'react'
import useScroll from '@/lib/hooks/useScroll';
import { classNames } from '../../utils/component.helpers';

export default function NavigationClientWrapper(props: Readonly<{ stickOnTop: boolean, children: React.ReactNode }>) {
  const [opacity, setOpacity] = useState(1);

  const { stickOnTop } = props;
  // Configure the callback to set the opacity based on the scroll ratio
  const updateOpacity = (scrollRatio: number) => {
    if (!stickOnTop || (!opacity && scrollRatio)) {
      return;
    }
    console.log('first', opacity)
    setOpacity(1 - scrollRatio);
  };

  useScroll(100, updateOpacity);

  return (
    <div className={classNames(
      'z-50',
      stickOnTop ? 'fixed top-0 left-0 right-0' : 'relative',
    )} style={{ opacity }}>
      {props.children}
    </div>
  )
}


