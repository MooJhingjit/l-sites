import React from "react";
import { Params, SearchParams } from "@/lib/definitions";
import MapSearch from "./MapSearch";
import SearchFilters from "./SearchFilters";
import FooterWrapper from "../_components/FooterWrapper";
import SearchResults from "./SearchResults";
import SearchPagination from "./SearchPagination";

export default async function PropertyForSale({
  params,
  searchParams,
}: Readonly<{ params: Params; searchParams: SearchParams }>) {

  return (
    <div className="relative z-10 overflow-hidden">
      <div className="flex">
        <div className="hidden fixed lg:block  z-10 overflow-hidden sm:relative  bg-gray-100 flex-0 ">
          <MapSearch />
        </div>

        <div className="@container lg:h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden w-full   ">
          <div className="px-4">
            <div className="flex items-center justify-between mt-4">
              <h1 className="text-2xl font-bold">Properties for </h1>
            </div>
            <SearchFilters />
          </div>
          <div className="grid grid-cols-1 @xl:grid-cols-2 @4xl:grid-cols-3 gap-4 p-4">
            <SearchResults />
          </div>
          <SearchPagination totalPages={10} />
          <FooterWrapper />
        </div>
      </div>
    </div>
  );
}
