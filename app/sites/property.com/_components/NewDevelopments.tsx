import React from 'react'
import Section from '@/app/sites/_components/Section'
import PropertyCard from '@/app/sites/_components/PropertyCard'
import { Button } from '@/components/ui/button'

export default function NewDevelopments() {
  return (
    <Section>
      <Section.Title classNames='text-left mx-0 text-3xl' >
        New Developments
      </Section.Title>
      <DevelopmentCards />
      <div className="mt-8 flex items-center justify-center">
        <Button variant={'default'}>View All</Button>
      </div>
    </Section>
  )
}


const DevelopmentCards = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-4">
      <PropertyCard image="property-1.webp" />
      <PropertyCard image="property-2.webp" />
      <PropertyCard image="property-3.webp" />
    </div>
  )
}