"use client";
import { useEffect } from "react";

const useScroll = (
  maxScroll: number,
  callbackTask: (scrollRatio: number) => void,
) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollRatio = Math.min(scrollY / maxScroll, 1);
      callbackTask(scrollRatio);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [maxScroll, callbackTask]);
};

export default useScroll;
