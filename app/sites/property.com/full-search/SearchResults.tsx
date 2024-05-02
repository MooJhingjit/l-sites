import PropertyCard from "@components/cards/PropertyCard";
import { propertyCardData } from "@/lib/data";
import React from "react";

export default function SearchResults() {
  return (
    <>
      <PropertyCard data={propertyCardData[0]} />
      <PropertyCard data={propertyCardData[1]} />
      <PropertyCard data={propertyCardData[2]} />
      <PropertyCard data={propertyCardData[3]} />
      <PropertyCard data={propertyCardData[0]} />
      <PropertyCard data={propertyCardData[1]} />
      <PropertyCard data={propertyCardData[2]} />
      <PropertyCard data={propertyCardData[3]} />
    </>
  );
}
