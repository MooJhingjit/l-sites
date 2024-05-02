import React from "react";
import Section from "../../_components/Section";
import { Button } from "@base_components/ui/button";
import Link from "next/link";
import ArticleCard from "../site_components/ArticleCard";
import BlogCategories from "../site_components/BlogCategories";

export default function BlogPage() {
  return (
    <Section>
      <Section.Title classNames="max-w-xl mx-auto">
        Thailand Real Estate News, Property Guides, Project Reviews and more.
      </Section.Title>
      <Section.Description classNames="mb-10 max-w-4xl">
        Stay up to date with the latest Thailand real estate news, property
        guides, project reviews and more. We cover everything from buying
        property in Thailand to investing in real estate in Thailand.
      </Section.Description>

      <div className="sticky top-0 py-6 bg-white -mx-4 sm:-mx-2">
        <BlogCategories />
      </div>
      <div className="grid sm:grid-cols-2  md:grid-cols-3  xl:grid-cols-4 gap-8">
        <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/work-man-445x318.jpg" />
        <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/robot-540x540.jpg" />
        <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/woman-445x264.jpg" />
        <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/work-man-445x318.jpg" />
        <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/robot-540x540.jpg" />
        <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/robot-540x540.jpg" />
        <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/woman-445x264.jpg" />
        <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/woman-445x264.jpg" />
        <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/robot-540x540.jpg" />
      </div>
      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="">View All</Link>
        </Button>
      </div>
    </Section>
  );
}
