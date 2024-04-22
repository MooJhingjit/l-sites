import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  classNames?: string;
}
export default function Section(props: Readonly<Props>) {

  const { children, classNames } = props;
  return (
    <div className=" bg-white overflow-hidden py-10">
      <div
        className={twMerge(
          "container mx-auto px-4 pt-8 sm:px-6 lg:px-8",
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

Section.Title = Title;
Section.Description = Description;
