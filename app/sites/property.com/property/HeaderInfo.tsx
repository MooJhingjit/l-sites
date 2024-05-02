import React from "react";
import Section from "../../_components/Section";
import {
  Building,
  PinIcon,
} from "lucide-react";

const HeaderInfo = () => {
  return (
    <div className="sticky top-0 flex justify-between items-center bg-white pt-2 pb-4 z-30 -mx-4 px-4 ">
      <div className="">
        <Section.Title isHeader classNames="text-left text-3xl text-primary">
          Luxury 3-Bed Condo in Andara Resort, Phuket
        </Section.Title>
        <div className="flex flex-col sm:flex-row sm:divide-x sm:divide sm:space-x-3 text-muted-foreground">
          <div className="flex space-x-1 items-center justify-start">
            <PinIcon size={16} />
            <Section.Subtitle classNames="text-left text-muted-foreground">
              Kamala, Phuket
            </Section.Subtitle>
          </div>
          <div className="flex space-x-1 items-center justify-start sm:pl-3">
            <Building size={16} />
            <Section.Subtitle classNames="text-left ">
              Andara Resort & Villas
            </Section.Subtitle>
          </div>
        </div>
      </div>

      {/* price */}
      <div className="hidden md:block">
        <div className="flex-0">
          <div className="flex flex-wrap items-baseline justify-end gap-x-4  ">
            <p className="text-sm font-medium leading-6 text-muted-foreground">
              For Sale
            </p>
            <Section.Title classNames="text-left text-xl text-primary">
              ฿6,500,000
            </Section.Title>
          </div>
        </div>
        {/* <div className="flex-0">
          <div className="flex flex-wrap items-baseline justify-end gap-x-4  ">
            <p className="text-sm font-medium leading-6 text-muted-foreground">
              For Rent
            </p>
            <Section.Title classNames="text-left text-xl text-primary">
              ฿32,000 / month
            </Section.Title>
          </div>
        </div> */}

        <dl className="bg-primary-foreground grid grid-cols-3 overflow-hidden rounded-md text-center text-sm px-2 py-1 mt-1 divide-x ">
          <dd className="text-primary px-2 whitespace-nowrap">3 Beds</dd>
          <dd className="text-primary px-2 whitespace-nowrap">4 Baths</dd>
          <dd className="text-primary px-2 whitespace-nowrap">240 Sqm.</dd>
        </dl>
      </div>
    </div>
  );
};

export default HeaderInfo;