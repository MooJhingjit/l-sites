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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Tools() {

  const { data, refs, onOpen } = useLeadModal()

  const openNewLead = () => {
    // open filter modal
    onOpen()
  }

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
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
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              {/* <h4 className="font-medium leading-none">Lead sear</h4> */}
              <p className="text-sm text-muted-foreground">
                Filter leads by title, type, budget
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="type">Type</Label>
                <Input
                  id="type"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="budget">Budget</Label>
                <Input
                  id="budget"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="Others">Others</Label>
                <Input
                  id="Others"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      <Button size="sm" 
        variant="outline"
      className="h-7 gap-1"ƒ
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
