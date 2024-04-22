import React from 'react'
import PropertyCard from '@/components/PropertyCard'
import { Button } from '@/components/ui/button'

export default function NewListing() {
  return (
    <div className="-mt-[140px] container mx-auto px-4 sm:px-6  lg:px-8 relative z-10">
      <h2
        className="capitalize font-heading font-semibold text-3xl  text-white  pb-5"
      >
        Explore Our Latest New Listings Today
      </h2>

      <PropertyCards />
      <div className="mt-8 flex items-center justify-center">
        <Button variant={'secondary'}>View All</Button>
      </div>
    </div>
  )
}

const PropertyCards = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <PropertyCard image="property-1.webp" />
      <PropertyCard image="property-2.webp" />
      <PropertyCard image="property-3.webp" />
      <PropertyCard image="property-4.webp" />
    </div>
  )
}


