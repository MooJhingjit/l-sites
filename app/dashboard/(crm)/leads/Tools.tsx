"use client"
import React from 'react'
import {
  ListFilter,
  PlusCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import useLeadModal from '../../lib/hooks/useLeadModal'

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet"
import LeadTableFilters from './LeadTableFilters'

export default function Tools() {

  const { data, refs, onOpen } = useLeadModal()

  const openNewLead = () => {
    // open filter modal
    onOpen()
  }

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-7 gap-1"
          >
            <ListFilter className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Filter
            </span>
          </Button>
        </SheetTrigger>
        <LeadTableFilters />
      </Sheet>
      
      <Button size="sm"
        variant="outline"
        className="h-7 gap-1"
        onClick={openNewLead}
      >
        <PlusCircle className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          New lead
        </span>
      </Button>
    </>
  )
}
