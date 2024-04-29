import React from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";
import { PinIcon, Building, ExternalLinkIcon } from "lucide-react";

export default function PropertyCard({ image }: Readonly<{ image: string }>) {
  return (
    <Link
      href="/property/london/3-bedroom-house"
      className={twMerge(
        "rounded-lg shadow-lg p-1 group cursor-pointer",
        "flex flex-col",
        // "transition-transform duration-300 ease-in-out transform hover:-translate-y-1"
      )}
    >
      {/* <div className="absolute inset-0 bg-primary-foreground  rounded-lg opacity-20 z-10 h-full"></div> */}
      <div className=" bg-gray-200 rounded-lg mb-4 relative z-20">
        <div className="group-hover:block hidden absolute top-2 right-2">
          <ExternalLinkIcon size={18} className="text-white/60" />
        </div>
        <img
          src={`/${image}`}
          className="object-cover w-full rounded-lg overflow-hidden"
          alt=""
        />
      </div>
      <div className="px-4 relative z-20 pb-4">
        <h2
          // href="/property/london/3-bedroom-house"
          className={twMerge("text-lg font-semibold", "text-primary")}
        >
          3 Bedroom House in London
        </h2>

        <div className="flex space-x-1 items-center justify-start text-sm text-muted-foreground">
          <PinIcon size={12} />
          <p className="text-left ">
            Kamala, Phuket
          </p>
        </div>
        <div className="flex space-x-1 items-center justify-start text-sm text-muted-foreground">
          <Building size={12} />
          <p className="text-left ">
            Andara Resort & Villas
          </p>
        </div>
        <div>
          <dl className="mt-6 bg-primary-foreground grid grid-cols-3 overflow-hidden rounded-md text-center text-xs  py-1 divide-x  w-full">
            <dd className="text-primary px-2 whitespace-nowrap">3 Beds</dd>
            <dd className="text-primary px-2 whitespace-nowrap">4 Baths</dd>
            <dd className="text-primary px-2 whitespace-nowrap">240 Sqm.</dd>
          </dl>

          <dl className="mt-2  flex justify-between text-center py-1  w-full">
            <dd className="text-primary  text-lg whitespace-nowrap text-left">
              <div className="text-xs text-muted-foreground">For Sale</div>
              <div className="">฿2,500,000</div>
            </dd>
            <dd className="text-primary  text-lg whitespace-nowrap text-left">
              <div className="text-xs text-muted-foreground">For Rent</div>
              <div>฿20,000 / month</div>

            </dd>
          </dl>
        </div>
      </div>
    </Link>
  );
}
