import { ExpandIcon, HandIcon } from "lucide-react";
import React from "react";








export default function GridGallery() {
  return (
    // hidden group-hover:flex
    <div className="flex flex-wrap -mx-2 cursor-pointer group relative">

      <div className="hidden group-hover:flex absolute inset-0   justify-end bg-white/20 ">
        <div className="top-7 right-5 relative ">
          <div className="flex items-center space-x-2">
            <ExpandIcon size={20} className="text-white/80 mx-auto" />
            <p className="text-white/80">Click to view gallery</p>
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
