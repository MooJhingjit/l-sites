import React from "react";
import Section from "./_components/Section";

export default function Team() {
  return (
    <Section classNames="relative  px-4 overflow-hidden sm:pt-20">
      <Section.Title>Our Partners and Associates</Section.Title>
      <Section.Description>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </Section.Description>

      <div className="flex md:justify-center justify-between  ">
        <div className="w-auto p-0 md:p-6">
          <a
            className="font-heading font-semibold text-lg text-gray-900 hover:text-gray-800"
            href="#"
          >
            <p className="mb-2 px-2 sm:px-4 text-sm md:text-xl">
              Nairobi, Kenya
            </p>
            <div className="h-0.5 bg-gray-200"></div>
          </a>
        </div>
        <div className="w-auto p-0 md:p-6">
          <a
            className="font-heading font-semibold text-lg text-gray-900 hover:text-gray-800"
            href="#"
          >
            <p className="mb-2 px-2 sm:px-4 text-sm md:text-xl">
              Toronto, Canada
            </p>
            <div className="h-0.5 bg-gradient-cyan"></div>
          </a>
        </div>
        <div className="w-auto p-0 md:p-6">
          <a
            className="font-heading font-semibold text-lg text-gray-900 hover:text-gray-800"
            href="#"
          >
            <p className="mb-2 px-2 sm:px-4 text-sm md:text-xl">
              Sydney, Australia
            </p>
            <div className="h-0.5 bg-gradient-cyan"></div>
          </a>
        </div>
      </div>

      <div className=" flex-wrap grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
        <div className="w-full text-center p-6">
          <img
            className="mb-2 mx-auto"
            src="gradia-assets/images/teams/avatar-oval0.png"
            alt=""
          />
          <h3 className="mb-1 font-heading font-bold text-lg text-gray-900">
            Cody Fisher
          </h3>
          <p className="text-sm text-gray-500">Founder</p>
        </div>
        <div className="w-full text-center p-6">
          <img
            className="mb-2 mx-auto"
            src="gradia-assets/images/teams/avatar-oval1.png"
            alt=""
          />
          <h3 className="mb-1 font-heading font-bold text-lg text-gray-900">
            Guy Hawkins
          </h3>
          <p className="text-sm text-gray-500">Partner</p>
        </div>
        <div className="w-full text-center p-6">
          <img
            className="mb-2 mx-auto"
            src="gradia-assets/images/teams/avatar-oval2.png"
            alt=""
          />
          <h3 className="mb-1 font-heading font-bold text-lg text-gray-900">
            Ralph Edwards
          </h3>
          <p className="text-sm text-gray-500">Partner</p>
        </div>
        <div className="w-full text-center p-6">
          <img
            className="mb-2 mx-auto"
            src="gradia-assets/images/teams/avatar-oval3.png"
            alt=""
          />
          <h3 className="mb-1 font-heading font-bold text-lg text-gray-900">
            Floyd Miles
          </h3>
          <p className="text-sm text-gray-500">Partner</p>
        </div>
        <div className="w-full text-center p-6">
          <img
            className="mb-2 mx-auto"
            src="gradia-assets/images/teams/avatar-oval4.png"
            alt=""
          />
          <h3 className="mb-1 font-heading font-bold text-lg text-gray-900">
            Arlene McCoy
          </h3>
          <p className="text-sm text-gray-500">Partner</p>
        </div>
        <div className="w-full text-center p-6">
          <img
            className="mb-2 mx-auto"
            src="gradia-assets/images/teams/avatar-oval5.png"
            alt=""
          />
          <h3 className="mb-1 font-heading font-bold text-lg text-gray-900">
            Dianne Russell
          </h3>
          <p className="text-sm text-gray-500">Partner</p>
        </div>
      </div>
    </Section>
  );
}
