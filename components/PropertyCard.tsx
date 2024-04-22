"use client";
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Button } from './ui/button';

export default function PropertyCard({ image }: { image: string }) {
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
            "my-4",
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
          <Button
            variant={'secondary'}
            size={'default'}
          >
            View
          </Button>
        </div>
      </div>
    </div>
  )
}