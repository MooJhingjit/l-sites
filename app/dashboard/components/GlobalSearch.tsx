"use client";

import * as React from "react";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScanSearchIcon } from "lucide-react";

export function GlobalSearch() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    // <Dialog>
    //   <DialogTrigger asChild>
    //     <Button variant="ghost" className="space-x-1">
    //       <ScanSearchIcon className="h-5 w-5 mr-2" />
    //       <span>Search</span>

    //     </Button>
    //   </DialogTrigger>
    //   <DialogContent className="sm:max-w-xl rounded-3xl   border-none ring-0 p-0 top-[30%] ">
    //     <div className="relative ">
    //       <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
    //         <ScanSearchIcon className="h-5 w-5 mr-2 dark:text-white/60" />
    //       </div>
    //       <Input placeholder="Search..." className=" pl-10 pr-4 py-6 text-xl w-full  dark:border-white/70 " />

    //     </div>
    //   </DialogContent>
    // </Dialog>
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className="flex items-center space-x-2 shadow-none"
      >
        <ScanSearchIcon className="h-5 w-5 text-primary/50" />
        {/* <span>Search</span> */}
        <p className="text-sm text-muted-foreground space-x-10">
          <span>Search</span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>J
          </kbd>
        </p>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a command or search..."
          className="outline-none focus:ring-0 focus:border-none"
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <FaceIcon className="mr-2 h-4 w-4" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <RocketIcon className="mr-2 h-4 w-4" />
              <span>Launch</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          {/* <CommandGroup heading="Settings">
            <CommandItem>
              <PersonIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
              <span>Mail</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GearIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup> */}
        </CommandList>
      </CommandDialog>
    </>
  );
}
