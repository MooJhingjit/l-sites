import React from 'react'
import Hero from './_components/Hero'
import Features from './_components/Features'
import { Metadata } from 'next';
import { headers } from 'next/headers';
import Head from 'next/head';


export default function SorasakHomePage() {
  return (
    <div className="">
      <Head>
        <title>Sorasak</title>
        <meta name="description" content="Sorasak" />
      </Head>
      <Hero />
      <Features />
    </div>
  )
}
