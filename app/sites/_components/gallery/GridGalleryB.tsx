import { ExpandIcon, HandIcon } from "lucide-react";
import React from "react";








export default function GridGallery() {
  return (
    // hidden group-hover:flex
    <div className="flex flex-wrap  cursor-pointer group relative">

      <div className=" text-white/50 group-hover:text-white/100 absolute inset-0   justify-end bg-white/20 ">
        <div className="top-3 left-5 relative ">
          <div className="flex items-center space-x-2 justify-start w-fit">
            <ExpandIcon size={20} className="" />
            <p className="">Click to view gallery</p>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-5 gap-2">
        <div className="col-span-3">
          <img className="w-full max-w-full rounded-lg object-cover h-full"
            src="https://img.nestopa.com/img/properties/319807/gYyiIN6bwrugTPWukVqBslm9ytEZfCkYFsxV6c9p.webp?p=gallery_1700"
            alt="" />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-2">
          <div>
            <img
              src="https://img.nestopa.com/img/properties/319807/xjXThfzmrhYsuMPiSGV9wW0lbpDxB7JXzhnTzkV0.webp?p=gallery_1700"
              className="object-cover h-full max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
          </div>
          <div>
            <img
              src="https://img.nestopa.com/img/properties/319807/DaBgoiZiNOwjN8zxMpPO90jFv5G8La02UruvgmDr.webp?p=gallery_1700"
              className="object-cover h-full max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
          </div>
          <div>
            <img
              src="https://img.nestopa.com/img/properties/319807/bNNnUAcZBhsADtdaRNLCoIyJjFuD4NbEmYoy0Xje.webp?p=gallery_1400"
              className="object-cover h-full max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
          </div>
          <div>
            <img
              src="https://img.nestopa.com/img/properties/319807/oHhfrkkCpUZSsAuD08JrczaLTAWdUt3ACus2SsWI.webp?p=gallery_1400"
              className="object-cover h-full max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
          </div>
          <div>
            <img
              src="https://img.nestopa.com/img/properties/319807/0g7o6pN7oKm7TFSJoZY1utN3oey7znkYOhR21m3k.webp?p=gallery_1400"
              className="object-cover h-full max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
          </div>
          <div>
            <img
              src="https://img.nestopa.com/img/properties/319807/QG44cPDq4s4T31ts8MtQ74Pllzii0SexmaPHv8J8.webp?p=gallery_1700"
              className="object-cover h-full max-w-full rounded-lg cursor-pointer" alt="gallery-image" />
          </div>
        </div>
      </div>


    </div>
  );
}
