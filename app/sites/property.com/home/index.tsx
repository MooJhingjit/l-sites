import React from "react";
import Hero from "./Hero";
import NewListings from "../_components/NewListings";
import NewDevelopments from "../_components/NewDevelopments";
import Teams from "./Teams";
import LatestNews from "../_components/LatestNews";
import AboutUs from "./AboutUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewListings/>
      <NewDevelopments/>
      <LatestNews/>
      {/* <Teams/> */}
      <AboutUs/>
    </>
  );
}
