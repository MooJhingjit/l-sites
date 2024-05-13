"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "lucide-react"

export default function LeadStageDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">Leroy Combs - New Lead
          <ChevronDownIcon className="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Update the stage to</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Stage A</DropdownMenuItem>
        <DropdownMenuItem>Stage B</DropdownMenuItem>
        <DropdownMenuItem>Stage C</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
