import React from "react";
import { twMerge } from "tailwind-merge";

export default function SectionWrapper({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) {
  return (
    <div className=" bg-white overflow-hidden ">
      <div
        className={twMerge(
          "container mx-auto px-4 pt-16 sm:px-6 sm:pt-40 lg:px-8",
          classNames
        )}
      >
        {children}
      </div>
    </div>
  );
}
