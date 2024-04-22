"use client"
import PropertyCard from '@/components/PropertyCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

import { CaretSortIcon } from "@radix-ui/react-icons"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Loading from '@/app/(web)/[locale]/(home)/loading'
import { LoaderCircle } from 'lucide-react'


type Props = {
  tenure: 'sale' | 'rent'
}

const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';


export default function PropertySearchPage(props: Readonly<Props>) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className='relative z-10 overflow-hidden'>
      <div className="flex">
        <div className="hidden fixed md:block  z-10 overflow-hidden sm:relative  bg-gray-100 flex-1 ">

          <div className="h-full w-full flex items-center justify-center space-x-3">
            <LoaderCircle  size={30} className=" text-gray-200 animate-spin" />
            <p className={`text-gray-500 ${shimmer}`}>Map loading...</p>
          </div>

        </div>
        <div className="@container md:h-[calc(100vh-80px)] overflow-y-auto overflow-x-hidden w-full md:flex-1 ">
          <div className="px-4">

            <div className="flex items-center justify-between mt-4">
              <h1 className="text-2xl font-bold">Properties for {props.tenure}</h1>
            </div>

            {/* <div className="overflow-hidden bg-gray-50 sm:rounded-lg mt-4"> */}

            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="w-full space-y-2"
            >
              <div className="">
                <div className="flex justify-between items-center">

                  <div className="flex space-x-1 items-center">
                    <span className="inline-flex items-center rounded bg-gray-50 px-1.5 py-0.5 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                      2
                    </span>
                    <h4 className="text-sm font-semibold">
                      Filters
                    </h4>

                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <CaretSortIcon className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                      </Button>
                    </CollapsibleTrigger>
                  </div>

                  <Button variant={'secondary'} size="sm">Sort</Button>
                </div>

              </div>
              <CollapsibleContent className="space-y-2">
                <div className="grid grid-cols-2 @md:grid-cols-3 @5xl:grid-cols-4  gap-3">
                  <div className="">
                    <Input type="text" placeholder="Location, Project" />
                  </div>
                  <div className="">
                    <Input type="text" placeholder="" />
                  </div>
                  <div className="">
                    <Input type="text" placeholder="" />
                  </div>
                  <div className="">
                    <Input type="text" placeholder="" />
                  </div>
                  <div className="">
                    <Button>Submit</Button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>

          </div>
          <div className="grid grid-cols-1 @md:grid-cols-2 @4xl:grid-cols-3 @5xl:grid-cols-4 gap-4 p-4">
            <PropertyCard image="property-1.webp" />
            <PropertyCard image="property-2.webp" />
            <PropertyCard image="property-3.webp" />
            <PropertyCard image="property-4.webp" />
            <PropertyCard image="property-1.webp" />
            <PropertyCard image="property-2.webp" />
            <PropertyCard image="property-3.webp" />
          </div>

        </div>
      </div>
    </div>
  )
}


