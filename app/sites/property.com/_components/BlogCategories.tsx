import { Button } from "@/components/ui/button";
import React from "react";

export default function BlogCategories() {
  return (
    <ul className="flex  text-center overflow-x-auto">
      <li className="w-full md:w-auto px-2">
        <Button>All Categories</Button>
      </li>
      <li className="w-full md:w-auto px-2">
        <Button variant="muted">Technology</Button>
      </li>
      <li className="w-full md:w-auto px-2">
        <Button variant="muted">Development</Button>
      </li>
      <li className="w-full md:w-auto px-2">
        <Button variant="muted">Marketing</Button>
      </li>
      <li className="w-full md:w-auto px-2">
        <Button variant="muted">Start-up</Button>
      </li>
    </ul>
  );
}
