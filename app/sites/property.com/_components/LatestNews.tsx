import React from "react";
import Section from "@/app/sites/_components/Section";
import { Button } from "@/components/ui/button";
import ArticleCard from "./ArticleCard";
import Link from "next/link";

export default function LatestNews() {
  return (
    <Section>
      <Section.Title classNames="text-left mx-0">
        Latest News
      </Section.Title>
      <div className="flex overflow-x-auto gap-6 mt-4 pb-6">
        <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/work-man-445x318.jpg" />
        <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/robot-540x540.jpg" />
        <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/woman-445x264.jpg" />
        <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/work-man-445x318.jpg" />
      </div>
      <div className="mt-2 flex items-center justify-center">
        <Button variant="muted" asChild>
          <Link href="/for-sale/properties">
            View All
          </Link>
        </Button>
      </div>
    </Section>
  );
}
