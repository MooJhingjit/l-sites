"use client"
import useScroll from "@/lib/hooks/useScroll";
import React, { useState } from "react";

export default function ActionFooter({
  children,
}: {
  children: React.ReactNode;

}) {

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = (scrollRatio: number) => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < lastScrollY) {
      setIsVisible(true); // Scrolling up
    } else if (currentScrollY > lastScrollY) {
      setIsVisible(false); // Scrolling down
    }
    setLastScrollY(currentScrollY); // Update the last scroll position
  };

  // You might want to adjust `maxScroll` to a relevant threshold or simply use a large value to cover all scrollable area
  useScroll(10000, handleScroll);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-30 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      } sm:hidden`}
    >
      {children}
    </div>
  );
}






