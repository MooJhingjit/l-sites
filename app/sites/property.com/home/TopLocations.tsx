import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TopLocations() {
  return (
    <div className="mt-4 ">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
        <LocationCard src="/top-locations/patong.jpg" alt="Patong" />
        <LocationCard src="/top-locations/rawai.jpg" alt="Rawai" />
        <LocationCard src="/top-locations/phuket-town.jpg" alt="Phuket Town" />
        <LocationCard src="/top-locations/big-buddha.jpg" alt="Big Buddha" />
      </div>
    </div>
  );
}

const LocationCard = ({
  src = "",
  alt = "Patong",
}: {
  src?: string;
  alt?: string;
}) => {
  return (
    <Link href="/location/location" className="relative group max-w-[200px] ">
      <div className="flex items-center justify-center absolute  left-0 right-0 bottom-0 bg-black bg-opacity-40 rounded-sm">
        <p className="text-white  sm:text font-semibold">{alt}</p>
      </div>
      <Image
        src={`/property.com${src}`}
        width={0}
        height={0}
        sizes="100vw"
        className="rounded-sm w-full h-auto"
        alt={alt}
      />
    </Link>
  );
};
