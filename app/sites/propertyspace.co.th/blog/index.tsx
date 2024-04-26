import React from "react";
import Section from "../../_components/Section";
import Breadcrumb from "../property/_components/breadcrumb";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ArticleCard from "../_components/ArticleCard";
import BlogCategories from "../_components/BlogCategories";

export default function BlogPage() {
  return (
    <Section>
      <Section.Title classNames="">
        Thailand Real Estate News, Property Guides, Project Reviews and more.
      </Section.Title>
      <Section.Description classNames="mb-10">
        Stay up to date with the latest Thailand real estate news, property
        guides, project reviews and more. We cover everything from buying
        property in Thailand to investing in real estate in Thailand.
      </Section.Description>

      <div className="sticky top-0 py-6 bg-white">
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
        <a
          className="inline-block w-full sm:w-auto py-4 px-6 text-center font-heading font-medium text-base text-gray-900 hover:text-green-500 border border-gray-900 hover:border-green-500 rounded-sm transition duration-150"
          href="#"
        >
          View more
        </a>
      </div>
    </Section>
  );
}
