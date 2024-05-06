"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import useDealModal from "../../lib/hooks/useDealModal";
import { Button } from "@/components/ui/button"
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

export const DealModal = () => {
  const modal = useDealModal();
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // const { data, refs } = modal;

  return (
    <Dialog open={modal.isOpen} onOpenChange={modal.onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 border-none">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Create a deal</CardTitle>
            <CardDescription>
              Fill in the form below to create a new contact.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name of your project" autoFocus={false} />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Budget</Label>
                  <Input id="name" placeholder="" autoFocus={false} />
                </div>
               
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Create</Button>
          </CardFooter>
        </Card>

      </DialogContent>
    </Dialog>
  );
};
