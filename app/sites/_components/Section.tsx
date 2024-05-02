import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  classNames?: string;
}
export default function Section(props: Readonly<Props>) {
  const { children, classNames } = props;
  return (
    <div className=" bg-white pt-10">
      <div
        className={twMerge(
          "container mx-auto px-4 pt-8 sm:px-6 lg:px-8",
          classNames,
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
  isHeader,
}: {
  children: React.ReactNode;
  classNames?: string;
  isHeader?: boolean;
}) => {
  const classes = twMerge(
    "text-xl sm:text-3xl font-heading  text-center text-gray-900",
    classNames,
  );
  if (isHeader) {
    return <h1 className={classes}>{children}</h1>;
  }
  return <h2 className={classes}>{children}</h2>;
};

const Subtitle = ({
  children,
  classNames,
}: {
  children: React.ReactNode;
  classNames?: string;
}) => {
  return (
    <p
      className={twMerge(
        "text-base mx-auto text-center text-gray-600",
        classNames,
      )}
    >
      {children}
    </p>
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
        "mb-20 text-base mx-auto text-center text-gray-600",
        classNames,
      )}
    >
      {children}
    </p>
  );
};

Section.Title = Title;
Section.Subtitle = Subtitle;
Section.Description = Description;
