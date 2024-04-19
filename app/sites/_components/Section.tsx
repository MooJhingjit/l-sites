import React from "react";
import { twMerge } from "tailwind-merge";

export default function Section({
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

const Title = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  return (
    <h2
      className={twMerge(
        "capitalize mb-5 max-w-2xl mx-auto font-heading font-semibold text-center text-4xl  text-gray-900",
        classNames
      )}
    >
      {children}
    </h2>
  );
};

const Description = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  return (
    <p
      className={twMerge(
        "mb-20 text-base max-w-md mx-auto text-center text-gray-600",
        classNames
      )}
    >
      {children}
    </p>
  );
};

// Assign Title and Description as properties of Section
Section.Title = Title;
Section.Description = Description;
