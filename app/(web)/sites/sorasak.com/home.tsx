import React from 'react'
import Hero from './_components/Hero'
import Features from './_components/Features'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sorasak Law Firm',
  description: 'Sorasak Law Firm',
};

export default function SorasakHomePage() {
  return (
    <div className="">
      <Hero />
      <Features />
    </div>
  )
}
