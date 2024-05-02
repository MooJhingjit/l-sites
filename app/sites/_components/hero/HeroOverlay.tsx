import React from "react";

export default function HeroOverlay(
  props: Readonly<{ backgroundImage: string; children?: React.ReactNode }>,
) {
  const { children } = props;

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
      }}
    >
      <div className="absolute w-full h-full bg-black bg-opacity-40"></div>

      <div className="h-full container px-0 mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
}
