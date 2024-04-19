import React from 'react'
import Section from '../../_components/Section'
import { ListingCard } from './NewListing'

export default function NewDevelopment() {
  return (
    <Section classNames="sm:pt-20  ">
      <Section.Title classNames='text-left mx-0 text-3xl' >
        New Developments
      </Section.Title>
      <DevelopmentCards />
    </Section>
  )
}


const DevelopmentCards = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-4">
      <ListingCard image="property-1.webp" />
      <ListingCard image="property-2.webp" />
      <ListingCard image="property-3.webp" />
    </div>
  )
}