"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import usePipelineStateModal from "../../lib/hooks/usePipelineStateModal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const PipelineStateModal = () => {
  const modal = usePipelineStateModal();

  return (
    <Dialog open={modal.isOpen} onOpenChange={modal.onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 border-none">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="">Create a new stage</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="other">Title</Label>
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
