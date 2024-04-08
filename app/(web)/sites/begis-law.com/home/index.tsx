import React from "react";
import Hero from "./sections/Hero";
import Team from "./sections/Team";
import Review from "./sections/Review";
import FAQ from "./sections/FAQ";
import AboutUs from "./sections/AboutUs";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs/>
      <Review />
      <FAQ />
      {/* <Team /> */}
    </>
  );
}
