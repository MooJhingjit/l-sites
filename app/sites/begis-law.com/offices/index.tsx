import React from "react";
import Section from "../_components/Section";
import Link from "next/link";

export default function Offices() {
  return (
    <Section classNames="relative  px-4 overflow-hidden sm:pt-20">
      <div className="max-w-3xl mx-auto">
        <Section.Title>Our Offices </Section.Title>
        <Section.Description>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </Section.Description>

        <div className="flex md:justify-center justify-between -mt-10 mb-20 ">
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
        <div className="flex flex-wrap -m-11">
          <div className="w-full md:w-1/2 p-11">
            <img
              className="mx-auto"
              src="gradia-assets/images/how-it-works/illustration.png"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 p-11">
            <h2 className="mb-6 font-heading font-bold text-5xl text-gray-900">
              Nairobi, Kenya
            </h2>
            <p className="mb-9 text-gray-900 text-base">
              Nestled in the heart of bustling capital, our Nairobi office
              serves as a beacon of legal excellence, offering comprehensive
              services in a diverse and dynamic environment.
            </p>
            <p className="mb-9 text-gray-900 text-base">
              Languages spoken: English, Swahili, Kikuy
            </p>
            <div className="flex flex-wrap -m-2 items-center">
              <div className="w-full lg:w-auto p-2">
                <button className="px-9 py-3.5 font-heading font-medium w-full lg:w-auto text-base text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                  Contact Us
                </button>
              </div>
              <div className="w-full lg:w-auto p-2">
                <Link
                  href="/offices/nairobi"
                  className="px-7 py-3.5  font-heading font-medium w-full lg:w-auto text-base text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-md"
                >
                  More Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
