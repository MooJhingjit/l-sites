import React from 'react'
import Section from '@/app/sites/_components/Section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export default function AboutUs() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto text-center">
        {/* <span className="text-sm text-secondary uppercase">Who we are?</span> */}
        <h2 className="mt-2 mb-4 text-4xl lg:text-5xl font-bold font-heading">Thailand's Leading Tech Enabled Real Estate Consultancy</h2>
        <p className="mb-6 text-lg text-gray-500 leading-loose">Whether you're searching for your dream home or looking to sell a property, our team is dedicated to helping you every step of the way. property.com is your trusted partner to help you sell, rent or find your home in Thailand.</p>
        <div className="flex flex-wrap justify-center">
          <Button asChild>
            <Link
              className="space-x-2 inline-block w-full sm:w-auto px-6 py-2 mb-3 sm:mb-0 sm:mr-4 text-sm text-white font-bold leading-loose bg-gray-500 hover:bg-gray-600 rounded transition duration-200"
              href="">
              <Phone size={14} />
              <span>+66495883993</span>
            </Link>
          </Button>
          <Button asChild variant="link">
            <Link
              className="space-x-1 inline-block w-full sm:w-auto px-6 py-2 text-sm text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded"
              href="">

              <Mail size={14} />
              <span>property@info.com</span>
            </Link>
          </Button>
        </div>
      </div>
    </Section >
  )
}