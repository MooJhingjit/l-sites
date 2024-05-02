import { classNames } from "@/lib/utils";
import { twMerge } from "tailwind-merge";

const PropertySection = ({
  label,
  children,
  customLabel,
  isDark,
  className,
}: {
  label: string;
  customLabel?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  isDark?: boolean;
}) => {
  return (
    <div
      className={twMerge(
        "rounded-lg",
        isDark ? "bg-primary" : "bg-white",
        className,
      )}
    >
      <h2
        className={classNames(
          "text-lg font-medium text-primary",
          isDark ? "text-primary-foreground" : "text-primary",
        )}
      >
        {label}
      </h2>
      {customLabel}
      <div className="prose prose-sm mt-4 ">{children}</div>
    </div>
  );
};

export default PropertySection;
