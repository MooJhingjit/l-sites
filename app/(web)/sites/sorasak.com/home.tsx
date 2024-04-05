import React from 'react'
import Hero from './_components/Hero'
import Features from './_components/Features'
import { Metadata } from 'next';
import { headers } from 'next/headers';


export default function SorasakHomePage() {
  return (
    <div className="">
      <Hero />
      <Features />
    </div>
  )
}
