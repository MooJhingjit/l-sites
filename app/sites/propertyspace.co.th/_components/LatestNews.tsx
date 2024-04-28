import React from "react";
import Section from "@/app/sites/_components/Section";
import { Button } from "@/components/ui/button";
import ArticleCard from "./ArticleCard";

export default function LatestNews() {
  return (
    <Section>
      <Section.Title classNames="text-left mx-0 text-3xl">
        Latest News
      </Section.Title>
      <div className="grid grid-cols-4 gap-6 mt-4">
        <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/work-man-445x318.jpg" />
        <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/robot-540x540.jpg" />
        <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/woman-445x264.jpg" />
        <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/work-man-445x318.jpg" />
      </div>
      <div className="mt-8 flex items-center justify-center">
        <Button variant={"default"}>View All</Button>
      </div>
    </Section>
  );
}
