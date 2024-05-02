import { LoaderCircle } from "lucide-react";
import React from "react";
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export default function MapSearch() {
  return (
    <div className="h-full w-full flex items-center justify-center space-x-3">
      {/* <LoaderCircle size={30} className=" text-gray-200 animate-spin" />
      <p className={`text-gray-500 ${shimmer}`}>Map loading...</p> */}
      {/* <img src="/map-search.png" alt="Map loading" className=" object-cover h-full" /> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31616.899321109293!2d98.37136895821548!3d7.883305846898746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031fd2d6380a3%3A0x8df88000bd82f66b!2sPhuket%2C%20Mueang%20Phuket%20District%2C%20Phuket%2083000!5e0!3m2!1sen!2sth!4v1714623001712!5m2!1sen!2sth"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
}
