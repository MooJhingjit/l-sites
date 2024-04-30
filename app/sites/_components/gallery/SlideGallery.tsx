import React from 'react'

export default function SlideGallery() {
  return (
    <section className="overflow-hidden">
      <div className=" mx-auto">
        {/* <div className="flex flex-wrap items-end -mx-4 mb-6">
 
          <div className="w-full lg:w-2/5 px-4 flex lg:justify-end">
            <button className="mr-4 w-16 h-16 p-5 rounded-full bg-gray-50">
              <svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button className="w-16 h-16 p-5 rounded-full bg-gray-50">
              <svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div> */}
        <div className="relative">
          <div>
            <img className="mb-6 w-auto h-[600px] object-cover rounded-lg" src="https://img.nestopa.com/img/properties/318839/N9p6GfkPPEeGdw4Mf3TGye97OYdJwEBq3RyhUolx.webp?p=gallery_1700" alt=""/>
              
          </div>
          <div className="absolute top-0 -left-1/2 w-1/2 pr-8">
            <img className="w-full h-112 object-cover rounded-lg" src="https://img.nestopa.com/img/properties/318839/N9p6GfkPPEeGdw4Mf3TGye97OYdJwEBq3RyhUolx.webp?p=gallery_1700" alt=""/>
          </div>
          <div className="absolute top-0 -right-1/2 w-1/2 pl-8">
            <img className="w-full h-112 object-cover rounded-lg" src="https://img.nestopa.com/img/properties/318839/N9p6GfkPPEeGdw4Mf3TGye97OYdJwEBq3RyhUolx.webp?p=gallery_1700" alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}
