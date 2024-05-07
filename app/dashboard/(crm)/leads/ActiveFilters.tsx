import React from 'react'
import {
  Columns3Icon,
  LayoutListIcon,
  ListFilter,
  PlusCircle,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ActiveFilters() {
  return (
    <div className="bg-secondary/50 rounded-sm">
      <div className="mx-auto max-w-7xl px-4 py-2 sm:flex sm:items-center">
        <h3 className="text-xs font-medium text-primary">
          Filters
          <span className="sr-only">, active</span>
        </h3>

        <div aria-hidden="true" className="hidden h-5 w-px bg-primary/20 sm:ml-4 sm:block" />

        <div className="mt-2 sm:ml-4 sm:mt-0">
          <div className="-m-1 flex flex-wrap items-center">
            {/* {activeFilters.map((activeFilter) => ( */}
            <span
              className="m-1 inline-flex items-center rounded-sm border bg-white  dark:bg-primary py-1 pl-3 pr-2 text-xs font-medium dark:text-primary-foreground"
            >
              <span>Type: Buyer</span>
              <button
                type="button"
                className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
              >
                <span className="sr-only">Remove filter for Title</span>
                <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                  <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                </svg>
              </button>
            </span>
            {/* ))} */}
          </div>
        </div>

        <div className="mt-2 sm:ml-2 sm:mt-0">
          <div className="-m-1 flex flex-wrap items-center">
            {/* {activeFilters.map((activeFilter) => ( */}
            <span
              className="m-1 inline-flex items-center rounded-sm border bg-white  dark:bg-primary py-1 pl-3 pr-2 text-xs font-medium dark:text-primary-foreground"
            >
              <span>Title: ??????</span>
              <button
                type="button"
                className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
              >
                <span className="sr-only">Remove filter for Title</span>
                <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                  <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
                </svg>
              </button>
            </span>
            {/* ))} */}
          </div>
        </div>

        {/* <div aria-hidden="true" className="hidden h-5 w-px bg-primary/20 sm:ml-4 sm:block" />
        <Button variant="muted" size="sm" className="h-6 gap-1 sm:ml-4 sm:mt-0">
          <ListFilter className="h-3.5 w-3.5" />
        </Button> */}
      </div>
    </div>
  )
}
