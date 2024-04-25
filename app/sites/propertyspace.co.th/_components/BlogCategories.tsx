import { Button } from "@/components/ui/button";
import React from "react";

export default function BlogCategories() {
  return (
    <ul className="flex  text-center overflow-x-auto">
      <li className="w-full md:w-auto px-2">
        <Button>All Categories</Button>
      </li>
      <li className="w-full md:w-auto px-2">
        <Button variant="secondary">Technology</Button>
      </li>
      <li className="w-full md:w-auto px-2">
        <Button variant="secondary">Development</Button>
      </li>
      <li className="w-full md:w-auto px-2">
        <Button variant="secondary">Marketing</Button>
      </li>
      <li className="w-full md:w-auto px-2">
        <Button variant="secondary">Start-up</Button>
      </li>
    </ul>
  );
}
