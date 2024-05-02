import React from "react";
import Section from "@components/Section";
import ProjectCard from "@components/cards/ProjectCard";
import { Button } from "@base_components/ui/button";
import Link from "next/link";
import { projectCardData } from "@/lib/data";

export default function NewDevelopments() {
  return (
    <Section>
      <Section.Title classNames="text-left mx-0">
        New Developments
      </Section.Title>
      <DevelopmentCards />
      <div className="mt-2 flex items-center justify-center">
        <Button asChild>
          <Link href="/for-sale/properties">View All</Link>
        </Button>
      </div>
    </Section>
  );
}

const DevelopmentCards = () => {
  return (
    <div className="flex overflow-x-auto gap-6 mt-4 pb-6">
      <ProjectCard data={projectCardData[0]} />
      <ProjectCard data={projectCardData[1]} />
      <ProjectCard data={projectCardData[2]} />
    </div>
  );
};
