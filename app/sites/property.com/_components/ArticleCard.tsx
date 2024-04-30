import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ArticleCard({ image }: { image: string }) {
  return (
    <Link href="/blog/this-is-a-blog-post" className="bg-muted  shadow-lg ">
      <div className=" mx-auto min-w-[300px] rounded-md  overflow-hidden">
        <img className="block  h-64  object-cover w-full" src={image} alt="" />
        <div className="p-4">
          <p className="text-sm  uppercase text-muted-foreground mb-3">
            10 JUN 2022
          </p>

          <h3 className=" text-lg font-semibold text-primary  mt-2 mb-4">There are many variations of passages of Lorem Ipsum available</h3>
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
    </Link>
  );
}
