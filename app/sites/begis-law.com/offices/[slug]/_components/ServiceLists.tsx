"use client";
import { useState } from "react";
import { classNames } from "@/lib/utils";

const navigation = [
  { name: "Business" },
  { name: "Immigration" },
  { name: "Family" },
  { name: "Elder Law" },
  { name: "Intellectual Property" },
  { name: "Employment & Labor" },
  { name: "Employment" },
  { name: "Criminal Defense" },
  { name: "Real Estate" },
];

export default function ServiceLists() {
  const [itemSelected, setItem] = useState(navigation[0].name);
  return (
    <div className="">
      <p className="font-semibold">Practice areas</p>
      <nav className="flex flex-1 flex-col ml-4 mt-4" aria-label="Sidebar">
        <ul role="list" className="-mx-2 space-y-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <p
                onClick={() => setItem(item.name)}
                className={classNames(
                  item.name === itemSelected
                    ? "bg-gray-50 text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50",
                  "group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold cursor-pointer",
                )}
              >
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
