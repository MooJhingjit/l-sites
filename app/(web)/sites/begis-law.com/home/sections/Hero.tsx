import React from "react";
import { Star } from "lucide-react";
import { classNames } from "../../../utils/component.helpers";
export default function Hero() {
  return (
    <section className="container mx-auto  flex flex-wrap justify-between -m-6 pt-32 pb-20">
      <div className="w-full lg:w-5/12 xl:w-1/2 p-6">
        <p className="mb-5 font-heading text-gray-400 font-medium text-xl">
          Grow fast, get things done with ease
        </p>
        <h1 className="mb-14 font-heading text-2xl md:text-3xl text-white font-bold">
          Begi's Law Offices provide accessible, innovative legal services for
          all, spanning personal to corporate law with skilled staff.
        </h1>
        <div className="flex flex-wrap -m-3 mb-20">
          <div className="w-full lg:w-auto p-3">
            <button className="font-heading w-full px-6 py-4 text-base text-gray-900 bg-white hover:bg-gray-100 rounded-md">
              Contact Us
            </button>
          </div>
          <div className="w-full lg:w-auto p-3">
            <button className="font-heading w-full px-6 py-4 text-base text-white bg-transparent border border-gray-500 hover:border-gray-600 rounded-md">
              View Our Achievements
            </button>
          </div>
        </div>
        <div className="lg:max-w-md">
          <div className="flex flex-wrap -m-3">
            <div className="w-auto p-3">
              <img
                className="w-14 h-14"
                src="gradia-assets/images/hero/avatar-man.png"
                alt=""
              />
            </div>
            <div className="flex-1 p-3">
              <p className="mb-4 text-gray-300 text-base">
                “Empowering Justice, One Case at a Time. Explore Our Commitment
                to Excellence and Discover How We Make a Difference in Every
                Client's Life. Your Fight for Justice Starts Here.”
              </p>
              <p className="font-heading text-white text-base">
                Denny Jones, founder of BEGI'S Law
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-7/12 xl:w-1/2 p-6">
        <div className="max-w-max mx-auto">
          <div className="flex flex-wrap justify-center -m-3 mb-3">
            <div className="w-full p-3">
              <ReviewBox
                name="Albert Flores"
                content="Absolutely thrilled with the support from BLOC. They handled my case with professionalism and care."
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center max-w-max -m-3 mb-3">
            <div className="w-full sm:w-1/2 p-3">
              <ReviewBox
                name="Darlene Robertson"
                content="BLOC's team was a game-changer for my business. Insightful legal advice that really made a difference."
              />
            </div>
            <div className="w-full sm:w-1/2 p-3">
              <ReviewBox
                name="Kristin Watson"
                content="Innovative and responsive, BLOC found a solution when others said it wasn't possible. Highly recommend!"
              />
            </div>
          </div>
          <div className="flex flex-wrap justify-center max-w-max -m-3 mb-3 xl:-ml-20">
            <div className="w-full sm:w-1/2 p-3">
              <ReviewBox
                name="Guy Hawkins"
                content="BLOC stands out for their commitment to justice for all. Felt respected and valued as a client."
              />
            </div>
            <div className="w-full sm:w-1/2 p-3">
              <ReviewBox
                name="Annette Black"
                content="Quick, efficient, and friendly. BLOC exceeded my expectations at every turn."
              />
            </div>
          </div>
          {/* <div className="flex flex-wrap justify-center max-w-max -m-3">
            <div className="w-full sm:w-1/2 p-3">
              <ReviewBox
                name="Robert Fox"
                content="The team at BLOC is truly exceptional. Their dedication to finding practical solutions is unmatched."
              />
            </div>
            <div className="w-full sm:w-1/2 p-3">
              <ReviewBox
                name="Cody Fisher"
                content="A breath of fresh air in legal services! The approachable team made a complex issue seem simple. Highly recommend!"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

const ReviewBox = ({ name, content }: { name: string; content: string }) => {
  return (
    <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
      <div className="flex flex-wrap -m-2">
        <div className="w-auto p-2">
          <div className="flex justify-between items-center">
            <p className="font-heading text-base text-gray-900">{name}</p>
            <div className="flex items-center space-x-1">
              <Star size={16} className="text-yellow-700" />
              <Star size={16} className="text-yellow-700" />
              <Star size={16} className="text-yellow-700" />
              <Star size={16} className="text-yellow-700" />
              <Star
                size={16}
                className={classNames(
                  Math.random() < 0.5 ? "text-yellow-700" : "text-gray-400"
                )}
              />
            </div>
          </div>
          <p className="mb-2 text-sm text-gray-500 mt-1">“{content}”</p>
        </div>
      </div>
    </div>
  );
};
