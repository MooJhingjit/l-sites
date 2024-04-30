import React from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../../../../components/ui/button";
import Link from "next/link";
import { PinIcon, Building, ExternalLinkIcon } from "lucide-react";

export default function PropertyCard({ data }: Readonly<{ data: any }>) {

  const {
    title = '3 Bedroom House',
    location = 'Oxford Street, London',
    priceSale = '฿1,200,000',
    priceRent = '฿8,500',
    project = 'Oxford Street',
    beds = 3,
    baths = 2,
    area = '1,500',
    image = "property-1.webp"
  } = data;

  return (
    <Link
      href="/property/london/3-bedroom-house"
      className={twMerge(
        "rounded-lg shadow-lg  group cursor-pointer",
        "flex flex-col  min-w-[300px]",
        // "transition-transform duration-300 ease-in-out transform hover:-translate-y-1"
      )}
    >
      {/* <div className="absolute inset-0 bg-primary-foreground  rounded-lg opacity-20 z-10 h-full"></div> */}
      <div className="  rounded-lg mb-4 relative z-20">
        <div className="group-hover:block hidden absolute top-2 right-2">
          <ExternalLinkIcon size={18} className="text-white/60" />
        </div>
        <img
          src={`/${image}`}
          className="object-cover  rounded-lg overflow-hidden w-[300px]"
          alt=""
        />
      </div>
      <div className="px-4 relative z-20 pb-4">
        <h2
          // href="/property/london/3-bedroom-house"
          className={twMerge("text-lg font-semibold", "text-primary")}
        >
          {title}
        </h2>

        <div className="flex space-x-1 items-center justify-start text-sm text-muted-foreground">
          <PinIcon size={12} />
          <p className="text-left ">
            {location}
          </p>
        </div>
        <div className="flex space-x-1 items-center justify-start text-sm text-muted-foreground">
          <Building size={12} />
          <p className="text-left ">
            {project}
          </p>
        </div>
        <div>
          <dl className="mt-6 bg-primary-foreground grid grid-cols-3 overflow-hidden rounded-md text-center text-xs  py-1 divide-x  w-full">
            <dd className="text-primary px-2 whitespace-nowrap">{beds} Beds</dd>
            <dd className="text-primary px-2 whitespace-nowrap">{baths} Baths</dd>
            <dd className="text-primary px-2 whitespace-nowrap">{area} Sqm.</dd>
          </dl>


          <dl className="mt-2  flex justify-between text-center py-1  w-full">
            {
              priceSale && (
                <dd className="text-primary  text-lg whitespace-nowrap text-left">
                  <div className="text-xs text-muted-foreground">For Sale</div>
                  <div className="">{priceSale}</div>
                </dd>
              )
            }
            {
              priceRent && (

                <dd className="text-primary  text-lg whitespace-nowrap text-left">
                  <div className="text-xs text-muted-foreground">For Rent</div>
                  <div>{priceRent} / month</div>

                </dd>
              )
            }
          </dl>
        </div>
      </div>
    </Link>
  );
}
