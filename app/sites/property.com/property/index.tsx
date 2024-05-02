import { Params, SearchParams } from "@/lib/definitions";
import React from "react";
import Section from "../../_components/Section";

import PropertyCard from "@/app/sites/_components/cards/PropertyCard";

import Gallery from "./Gallery";
import HeaderInfo from "./HeaderInfo";
import EnquiryForm from "./EnquiryForm";
import PropertyOverview from "./PropertyOverview";
import { propertyCardData } from "@/lib/data";
import FooterAction from "./FooterAction";


export default function PropertyPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  // console.log(params.slug)
  return (
    <>

      <div className="">
        <Section classNames="pt-0">
          <HeaderInfo />
          {/* <Breadcrumb /> */}
          <Gallery />
          <div className=" pt-8 grid  grid-cols-10 gap-x-8 ">
            <div className="lg:col-span-7 col-span-12">
              <PropertyOverview />
            </div>
            <div className="hidden lg:block lg:col-span-3 ">
              <EnquiryForm />
            </div>
          </div>
        </Section>

        <Section>
          <Section.Title classNames="text-left text-xl mb-2">
            Similar Properties
          </Section.Title>
          <div className="flex items-center gap-3 overflow-auto pb-6">
            <PropertyCard data={propertyCardData[0]} />
            <PropertyCard data={propertyCardData[1]} />
            <PropertyCard data={propertyCardData[2]} />
            <PropertyCard data={propertyCardData[3]} />
          </div>
        </Section>
      </div>
      <FooterAction />
    </>
  );
}






