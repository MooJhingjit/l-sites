import { LoaderCircle } from "lucide-react";
import React from "react";
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export default function MapSearch() {
  return (
    <div className="h-full w-full flex items-center justify-center space-x-3">
      <LoaderCircle size={30} className=" text-gray-200 animate-spin" />
      <p className={`text-gray-500 ${shimmer}`}>Map loading...</p>
    </div>
  );
}
