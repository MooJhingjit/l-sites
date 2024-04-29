import React from 'react'
import Section from '@/app/sites/_components/Section'
import ProjectCard from '@/app/sites/_components/cards/ProjectCard'
import { Button } from '@/components/ui/button'

export default function NewDevelopments() {
  return (
    <Section>
      <Section.Title classNames='text-left mx-0 text-3xl' >
        New Developments
      </Section.Title>
      <DevelopmentCards />
      <div className="mt-8 flex items-center justify-center">
        <Button variant={'muted'}>View All</Button>
      </div>
    </Section>
  )
}


const DevelopmentCards = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-4">
      <ProjectCard image="project-1.webp" />
      <ProjectCard image="project-2.webp" />
      <ProjectCard image="project-3.webp" />
    </div>
  )
}