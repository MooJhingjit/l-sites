import React from "react";
import SectionWrapper from "./_components/SectionWrapper";

export default function Team() {
  return (
    <SectionWrapper classNames="relative  px-4 overflow-hidden">
      <h2 className="mb-5 max-w-2xl mx-auto font-heading font-semibold text-center text-4xl  text-gray-900">
        Our Partners and Associates
      </h2>
      <p className="mb-20 text-base max-w-md mx-auto text-center text-gray-600">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </p>
      <div className="flex flex-wrap -m-6">
        <div className="w-full md:w-1/2 xl:w-1/6 text-center p-6">
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
        <div className="w-full md:w-1/2 xl:w-1/6 text-center p-6">
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
        <div className="w-full md:w-1/2 xl:w-1/6 text-center p-6">
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
        <div className="w-full md:w-1/2 xl:w-1/6 text-center p-6">
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
        <div className="w-full md:w-1/2 xl:w-1/6 text-center p-6">
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
        <div className="w-full md:w-1/2 xl:w-1/6 text-center p-6">
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
    </SectionWrapper>
  );
}
