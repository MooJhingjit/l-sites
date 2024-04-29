import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ArticleCard({ image }: { image: string }) {
  return (
    <div className="w-full sm:max-w-sm bg-muted rounded-md overflow-hidden shadow-lg">
      <div className=" mx-auto">
        <img className="block w-full h-64  object-cover" src={image} alt="" />
        <div className="p-4">
          <p className="text-sm  uppercase text-muted-foreground mb-3">
            10 JUN 2022
          </p>
          <Link
            href="/blog/this-is-a-blog-post"
            passHref
          >
            <h3 className=" text-lg font-semibold text-primary  mt-2 mb-4">There are many variations of passages of Lorem Ipsum available</h3>
          </Link>
          <p className=" mb-4">
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
