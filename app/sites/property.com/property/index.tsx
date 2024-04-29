import { Params, SearchParams } from "@/lib/definitions";
import React from "react";
import Section from "../../_components/Section";

import PropertyCard from "@/app/sites/_components/cards/PropertyCard";

import Gallery from "./Gallery";
import HeaderInfo from "./HeaderInfo";
import EnquiryForm from "./EnquiryForm";
import PropertyOverview from "./PropertyOverview";

export default function PropertyPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  // console.log(params.slug)
  return (
    <div className="">
      <Section classNames="pt-0">
        {/* <Breadcrumb /> */}

        <HeaderInfo />

        <Gallery />

        <div className=" pt-8 grid  grid-cols-12 gap-x-8 ">
          <div className="lg:col-span-8 col-span-12">
            <PropertyOverview />
          </div>

          <div className="hidden lg:block lg:col-span-4 sticky top-0">
            <EnquiryForm />
          </div>
        </div>
      </Section>

      <Section>
        <Section.Title classNames="text-left text-xl mb-2">
          Similar Properties
        </Section.Title>
        <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <PropertyCard image="property-1.webp" />
          <PropertyCard image="property-2.webp" />
          <PropertyCard image="property-3.webp" />
          <PropertyCard image="property-4.webp" />
        </div>
      </Section>
    </div>
  );
}






