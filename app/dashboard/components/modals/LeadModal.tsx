"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import useLeadModal from "../../lib/hooks/useLeadModal";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ListFilterIcon } from "lucide-react";

export const LeadModal = () => {
  const modal = useLeadModal();

  return (
    <Dialog open={modal.isOpen} onOpenChange={modal.onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 border-none">
        <Card className="w-full">
          <CardHeader className="flex space-x-3 items-center flex-row space-y-0">
            <CardTitle className="">
              Create a new lead
            </CardTitle>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size={'sm'} className="text-xs h-6">Inbound</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 ">
                <DropdownMenuLabel>Change status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={"Inbound"} >
                  <DropdownMenuRadioItem value="Inbound">Inbound</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="qualify">Qualify</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="qualify">Won</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="lost">Lost</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="other">Title</Label>
                  <Input id="other" placeholder="" autoFocus={false} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Type</Label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Buyer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="buyer">Buyer</SelectItem>
                      <SelectItem value="seller">Seller</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="budget">Budget</Label>
                  <Input id="min-budget" placeholder="" autoFocus={false} />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="other">???</Label>
                  <Input id="other" placeholder="" autoFocus={false} />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button>Create</Button>
          </CardFooter>
        </Card>

      </DialogContent>
    </Dialog>
  );
};
