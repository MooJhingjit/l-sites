import React from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "@base_components/ui/button";
import Link from "next/link";
import { PinIcon, Building, ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import { Label } from "@base_components/ui/label";

export default function ProjectCard({ data }: Readonly<{ data: any }>) {
  const { title, location, startingPrice, company, beds, baths, units, image } =
    data;
  return (
    <Link
      href="/property/london/3-bedroom-house"
      className={twMerge(
        "rounded-lg shadow-lg group cursor-pointer",
        "flex flex-col min-w-[350px] md:min-w-[400px] flex-1",
        // "transition-transform duration-300 ease-in-out transform hover:-translate-y-1"
      )}
    >
      {/* <div className="absolute inset-0 bg-primary-foreground  rounded-lg opacity-20 z-10 h-full"></div> */}
      <div className=" bg-gray-200 rounded-lg mb-4 relative z-20 h-[300px] ">
        <div className="group-hover:block hidden absolute top-2 right-2 z-20">
          <ExternalLinkIcon size={18} className="text-white/60" />
        </div>
        <div className="h-full w-[350px] md:w-full relative z-10">
          <Image
            src={`/${image}`}
            // width={300}
            // height={300}
            layout="fill"
            className="rounded-lg overflow-hidden"
            alt=""
          />
        </div>
      </div>
      <div className="px-4 relative z-20 pb-4">
        <h2
          // href="/property/london/3-bedroom-house"
          className={twMerge("text-lg font-semibold", "text-primary")}
        >
          {title}
        </h2>

        <div className="mt-1 flex items-center justify-between text-muted-foreground">
          <div className="flex space-x-1 items-center">
            <PinIcon size={12} />
            <Label className="text-left font-normal" title="Kamala, Phuket">
              {location}
            </Label>
          </div>
          <Label
            className="text-muted-foreground font-normal"
            title="The Andara Group"
          >
            By: {company}
          </Label>
        </div>
        <div>
          <dl className="mt-6 bg-primary-foreground grid grid-cols-3 overflow-hidden rounded-md text-center text-xs  py-1 divide-x  w-full">
            <dd className="text-primary px-2 whitespace-nowrap">{beds} Beds</dd>
            <dd className="text-primary px-2 whitespace-nowrap">
              {baths} Baths
            </dd>
            <dd className="text-primary px-2 whitespace-nowrap">
              {units} Units
            </dd>
          </dl>

          <dl className="mt-5  flex justify-center text-center py-1  w-full">
            <dd className="text-primary  text-lg whitespace-nowrap text-center">
              <div className="text-sm text-muted-foreground ">
                Starting Price
              </div>
              <div className="text-2xl font-semibold ">{startingPrice}</div>
            </dd>
            {/* <dd className="text-primary  text-lg whitespace-nowrap text-left">
              <div className="text-xs text-muted-foreground">For Rent</div>
              <div>฿20,000 / month</div>

            </dd> */}
          </dl>
        </div>
      </div>
    </Link>
  );
}
