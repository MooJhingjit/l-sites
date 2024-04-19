import React from 'react'
import Section from '../../_components/Section'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

export default function NewListing() {
  return (
    <div className={"container px-4 -mt-[140px]"}>
      <h2
        className={twMerge(
          "capitalize font-heading font-semibold text-3xl  text-white",
        )}
      >
        Explore Our Latest New Listings Today
      </h2>

      <ListingCards />
    </div>
  )
}

const ListingCards = () => {
  return (
    <div className="grid grid-cols-4 gap-6 mt-8">
      <ListingCard image="property-1.webp" />
      <ListingCard image="property-2.webp" />
      <ListingCard image="property-3.webp" />
      <ListingCard image="property-4.webp" />
    </div>
  )
}

export const ListingCard = ({ image }: { image: string }) => {

  return (
    <div
      className={twMerge(
        " rounded-lg shadow-lg p-1",
        "flex flex-col",
        "transition-transform duration-300 ease-in-out transform hover:-translate-y-1",
      )}
    >
      <div className="absolute inset-0 bg-white  rounded-lg opacity-20 z-10 h-full"></div>
      <div className=" bg-gray-200 rounded-lg mb-4 relative z-20">

        <img src={`/${image}`} className='object-cover w-full rounded-lg overflow-hidden' alt='' />
      </div>
      <div className="px-4 relative z-20">
        <h3
          className={twMerge(
            "text-lg font-semibold",
            "text-gray-800",
          )}
        >
          3 Bedroom House in London
        </h3>
        <p
          className={twMerge(
            "text-sm",
            "text-gray-600",
            "mt-2",
          )}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor
          semper nunc, vel luctus justo.
        </p>
        <div
          className={twMerge(
            "flex items-center justify-between",
            "mt-4",
          )}
        >
          <div
            className={twMerge(
              "flex items-center",
            )}
          >
            <span
              className={twMerge(
                "text-lg font-semibold",
                "text-gray-800",
              )}
            >
              $250,000
            </span>
          </div>
          <button
            className={twMerge(
              "text-sm font-semibold",
              "text-white",
              "bg-blue-500",
              "px-4 py-2",
              "rounded-lg",
            )}
          >
            View
          </button>
        </div>
      </div>
    </div>
  )
}
