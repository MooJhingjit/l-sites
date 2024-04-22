import React from "react";
import Hero from "./Hero";
import NewListings from "../_components/NewListings";
import NewDevelopments from "../_components/NewDevelopments";
import Teams from "./Teams";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NewListings/>
      <NewDevelopments/>
      <Teams/>
    </>
  );
}
