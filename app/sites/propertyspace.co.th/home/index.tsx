import React from "react";
import Hero from "./Hero";
import NewListing from "../_components/NewListing";
import NewDevelopment from "../_components/NewDevelopment";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <NewListing/>
      <NewDevelopment/>
    </div>
  );
}
