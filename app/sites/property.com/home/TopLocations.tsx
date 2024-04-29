import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function TopLocations() {
  return (
    <div className="mt-6">
      <h2 className='text-primary-foreground'>
        Top Locations
      </h2>
      <div className="grid grid-cols-4 gap-4 mt-2">
        <LocationComponent
          src="/top-locations/patong.jpg"
          alt="Patong"
        />
        <LocationComponent
          src="/top-locations/rawai.jpg"
          alt="Rawai"
        />
        <LocationComponent
          src="/top-locations/phuket-town.jpg"
          alt="Phuket Town"
        />
        <LocationComponent
          src="/top-locations/big-buddha.jpg"
          alt="Big Buddha"
        />

      </div>
    </div>
  )
}

const LocationComponent = (
  {
    src = '',
    alt = 'Patong'
  }: {
    src?: string,
    alt?: string

  }
) => {
  return (
    <Link href="/location/location" className="relative group">
      {/* show overlay on hover */}
      <div className="flex items-center justify-center absolute  left-0 right-0 bottom-0 bg-black bg-opacity-40 rounded-sm">
        <p
          className="text-white text-xl font-bold">
          {alt}
        </p>
      </div>
      {/* <p
        className="group-hover:bottom-0 group-hover:right-0 absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-xl font-bold rounded-sm">
        {alt}
      </p> */}
      <Image
        src={`/property.com${src}`}
        width={180}
        height={100}
        objectFit="cover"
        className="rounded-sm"
        alt={alt}
      />
    </Link>
  )
}