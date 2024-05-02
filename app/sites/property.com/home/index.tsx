import React from "react";
import Hero from "./Hero";
import NewListings from "../site_components/NewListings";
import NewDevelopments from "../site_components/NewDevelopments";
import LatestNews from "../site_components/LatestNews";
import AboutUs from "./AboutUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewListings />
      <NewDevelopments />
      <LatestNews />
      <AboutUs />
    </>
  );
}
