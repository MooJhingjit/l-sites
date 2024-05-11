import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LeadTableFilters() {
  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Search Leads</SheetTitle>
        {/* <SheetDescription>
          Filter your leads by name, email, or any other field. Hide or show columns to focus on what's important.
        </SheetDescription> */}
      </SheetHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Title
          </Label>
          <Input id="name" value="" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Type
          </Label>
          <Input id="username" value="" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Status
          </Label>
          <Input id="username" value="" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Value
          </Label>
          <Input id="username" value="" className="col-span-3" />
        </div>
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Search</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
}
