"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CaretSortIcon } from "@radix-ui/react-icons";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function SearchFilters() {
    const [isOpen, setIsOpen] = React.useState(true);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full space-y-2"
    >
      <div className="">
        <div className="flex justify-between items-center">
          <div className="flex space-x-1 items-center">
            <span className="inline-flex items-center rounded-full bg-secondary px-1.5 py-0.5 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-gray-500/10">
              2
            </span>
            <h4 className="text-sm font-semibold">Filters</h4>

            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm">
                <CaretSortIcon className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>

          <Button variant={"overlay"} size="sm">
            Sort
          </Button>
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
  );
}
