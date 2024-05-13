"use client";
import React from "react";
import { Phone, Mail, ArrowUp, X } from "lucide-react";
import { Label } from "@base_components/ui/label";
import { Button } from "@base_components/ui/button";
import ActionFooter from "../site_components/ActionFooter";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@base_components/ui/alert-dialog";
import EnquiryForm from "./EnquiryForm";

export default function FooterAction() {
  return (
    <ActionFooter>
      <div className="flex items-center justify-evenly bg-primary  space-x-4 rounded-none shadow-lg p-4">
        <Button variant={"muted"} className="min-w-[100px]">
          <Phone size={14} className="mr-2" />
          <Label>Call</Label>
        </Button>
        <EnquiryButton />
        <ScrollToTopBtn />
      </div>
    </ActionFooter>
  );
}

const EnquiryButton = () => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"muted"} className="flex-1">
          <Mail size={14} className="mr-2" />
          <Label>I am interested</Label>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-transparent border-none  ">
        <div className="mx-auto relative ">
          <AlertDialogCancel className="absolute top-3 right-3 border-none shadow-none z-20">
            <X size={20} />
          </AlertDialogCancel>
          <EnquiryForm />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

const ScrollToTopBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button variant={"muted"} className="min-w-[50px]" onClick={scrollToTop}>
      <ArrowUp size={14} />
    </Button>
  );
};
