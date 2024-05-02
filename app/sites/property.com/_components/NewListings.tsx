import React from 'react'
import PropertyCard from '@/app/sites/_components/cards/PropertyCard'
import { Button } from '@/components/ui/button'
import { propertyCardData } from '@/lib/data'
import Link from 'next/link'

export default function NewListing() {
  return (
    <div className="-mt-[100px] sm:-mt-[140px] container mx-auto px-4 sm:px-6  lg:px-8 relative z-10">
      <h2
        className="capitalize font-heading  text-xl sm:text-3xl text-primary-foreground  pb-5"
      >
        Explore Our Latest New Listings Today
      </h2>

      <PropertyCards />
      <div className="mt-2 flex items-center justify-center">
        <Button asChild>
          <Link href="/for-sale/properties">
            View All
          </Link>
        </Button>
      </div>
    </div>
  )
}

const PropertyCards = () => {
  return (
    <div className="flex items-center gap-3 overflow-auto pb-6">
      <PropertyCard data={propertyCardData[0]} />
      <PropertyCard data={propertyCardData[1]} />
      <PropertyCard data={propertyCardData[2]} />
      <PropertyCard data={propertyCardData[3]} />

    </div>
  )
}


