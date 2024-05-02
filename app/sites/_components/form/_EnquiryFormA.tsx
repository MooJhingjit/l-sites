"use client";
import React from "react";

import { Button } from "@base_components/ui/button";
import { Mail } from "lucide-react";
import { Label } from "@base_components/ui/label";

type Props = {
  buttonLabel: string;
};
export default function EnquiryFormA(props: Props) {
  const { buttonLabel } = props;
  return (
    <>
      <Button variant={"muted"} className="flex-1">
        <Mail size={14} className="mr-2" />
        <Label>
          {buttonLabel}
          I'm interested
        </Label>
      </Button>
    </>
  );
}
