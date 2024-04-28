import React from "react";

export default function GridGallery() {
  return (
    <div className="flex flex-wrap -mx-2">
      <div className="flex flex-wrap w-full md:w-1/2 lg:h-full">
        <div className="w-1/2 h-64 lg:h-1/3 p-2">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://img.nestopa.com/img/properties/318839/N9p6GfkPPEeGdw4Mf3TGye97OYdJwEBq3RyhUolx.webp?p=gallery_1700"
            alt=""
          />
        </div>
        <div className="w-1/2 h-64 lg:h-1/3 p-2">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://img.nestopa.com/img/properties/318839/LU4l0IOyjIGxEa63Y8LPtSPkJg1EtZnWyzD2Z0Og.webp?p=gallery_1700"
            alt=""
          />
        </div>
        <div className="w-full h-96 md:h-64 lg:h-2/3 p-2">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://img.nestopa.com/img/properties/318839/4a2PpuDZ2cgSnCS3Ao7bRIzCO4CR5CwRyU9u74Jt.webp?p=gallery_1700"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-wrap w-full md:w-1/2 lg:h-full">
        <div className="w-full h-96 md:h-64 lg:h-2/3 p-2">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://img.nestopa.com/img/properties/318839/ok2FfwvpsL4Es5uUccq8rxxstZTjTJPda8p2yrpk.webp?p=gallery_700"
            alt=""
          />
        </div>
        <div className="w-1/2 h-64 lg:h-1/3 p-2">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://img.nestopa.com/img/properties/318839/EGKyExzvD6bjxTNZlrAjpjUVUj41t9ceusEOCFea.webp?p=gallery_700"
            alt=""
          />
        </div>
        <div className="w-1/2 h-64 lg:h-1/3 p-2">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://img.nestopa.com/img/properties/318839/ow1Db1KHKH0yNDdaHctq9OxicuCQiHqIeHuzul0m.webp?p=gallery_700"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
