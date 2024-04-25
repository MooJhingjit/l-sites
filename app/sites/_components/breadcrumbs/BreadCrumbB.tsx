import Link from "next/link";
import React from "react";

export default function BreadCrumbB() {
  return (
    <div className="flex items-center">
      <Link
        className="inline-block text-xs font-medium uppercase hover:underline"
        href="#"
      >
        Home
      </Link>
      <span className="mx-2 text-gray-300">
        <svg
          width="5"
          height="8"
          viewBox="0 0 5 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.33325 1.66675L3.66659 4.00008L1.33325 6.33341"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </span>
      <Link
        className="inline-block text-xs font-medium uppercase hover:underline"
        href="/blog"
      >
        Blog
      </Link>
      <span className="mx-2 text-gray-300">
        <svg
          width="5"
          height="8"
          viewBox="0 0 5 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.33325 1.66675L3.66659 4.00008L1.33325 6.33341"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </span>
      <Link
        className="inline-block text-xs text-gray-300 font-medium uppercase"
        href="#"
      >
        Article
      </Link>
    </div>
  );
}
