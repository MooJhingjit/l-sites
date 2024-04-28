import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ArticleCard({ image }: { image: string }) {
  return (
    <div className="w-full  mb-12 sm:max-w-sm bg-secondary rounded-md overflow-hidden">
      <div className=" mx-auto">
        <img className="block w-full h-64  object-cover" src={image} alt="" />
        <div className="p-4">
          <p className="text-sm font-semibold uppercase text-muted-foreground mb-3">
            10 JUN 2022
          </p>
          <Link
            href="/blog/this-is-a-blog-post"
            passHref
          >
            <h3 className="font-heading font-medium text-lg mt-2 mb-4">There are many variations of passages of Lorem Ipsum available</h3>
          </Link>
          <p className="leading-7 mb-4">
            There are many variations of passages of Lorem Ipsum available.
          </p>
          <Link
            href="/blog/this-is-a-blog-post "
            className="flex  items-center text-muted-foreground hover:text-primary"
            passHref
          >
            <span className="mr-4 font-semibold ">Read more</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
