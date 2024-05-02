import Section from "@components/Section";
import BreadCrumbB from "@components/breadcrumbs/BreadCrumbB";
import React from "react";
import ArticleCard from "../../site_components/ArticleCard";

export default function index(props: any) {
  return (
    <>
      <Section>
        <div className="container px-4 mx-auto mb-14">
          <div className="max-w-3xl">
            <a
              className="inline-block font-heading text-orange-500 hover:text-orange-600 mb-2"
              href="#"
            >
              #Technology
            </a>
            <h3 className="font-heading text-3xl sm:text-4xl mb-8">
              The generated Lorem Ipsum is therefore always free from repetition
            </h3>
            <div className="flex items-center">
              <img
                className="w-8 h-8 rounded-full mr-3"
                src="https://shuffle.dev/acros-assets/images/blog-content/man-32x32.png"
                alt=""
              />
              <a
                className="text-sm leading-6 font-medium hover:underline"
                href="#"
              >
                Denny Bailey
              </a>
              <div className="w-px h-8 mx-4 sm:mx-8 bg-secondary"></div>
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.09277 9.40421H20.9167"
                    stroke="#2B3031"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16.4422 13.3097H16.4515"
                    stroke="#2B3031"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12.0045 13.3097H12.0137"
                    stroke="#2B3031"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M7.55793 13.3097H7.5672"
                    stroke="#2B3031"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16.4422 17.1962H16.4515"
                    stroke="#2B3031"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12.0045 17.1962H12.0137"
                    stroke="#2B3031"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M7.55793 17.1962H7.5672"
                    stroke="#2B3031"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M16.0438 2V5.29078"
                    stroke="#2B3031"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M7.9654 2V5.29078"
                    stroke="#2B3031"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.2383 3.5791H7.77096C4.83427 3.5791 3 5.21504 3 8.22213V17.2718C3 20.3261 4.83427 21.9999 7.77096 21.9999H16.229C19.175 21.9999 21 20.3545 21 17.3474V8.22213C21.0092 5.21504 19.1842 3.5791 16.2383 3.5791Z"
                    stroke="#2B3031"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <a
                  className="ml-2 text-sm leading-6 font-medium hover:underline"
                  href="#"
                >
                  Denny Bailey
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="block w-full h-112 object-cover"
          src="https://shuffle.dev/acros-assets/images/blog-content/people-1100x480.jpg"
          alt=""
        />
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto pt-12 ">
            <p className="text-lg leading-8 mb-6">
              Building websites from wireframes that I had received. Some of
              those questions were:
            </p>
            <p className="text-lg leading-8 mb-6">
              These types of questions led me to miss numerous deadlines, and I
              wasted time and energy in back-and-forth communication. Sadly,
              this situation could have been avoided if the wireframes had
              provided enough detail.
            </p>
            <p className="text-lg leading-8">
              Now that I am a UX designer, I notice that some designers tend to
              forget that wireframes are equally creative and technical. We are
              responsible for designing great ideas, but we are also responsible
              for creating product specifications. I admit that there can be so
              many details to remember that it’s easy to lose track. To save
              time and energy for myself, I gathered all of my years of
              wireframing knowledge into a single checklist that I refer to
              throughout the process. And now I am sharing this knowledge with
              you, so that you can get back to being creative.
            </p>

            <div className="mt-10 flex space-x-2">
              <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-0">
                Neighborhood
              </span>
              <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-0">
                Bangkok
              </span>
              <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-0">
                Lifestyle
              </span>
              <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-0">
                Location Guide
              </span>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="">
          <h2 className="text-slate-700">More about Technology</h2>
        </div>
        <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8  border-t border-gray-200 pt-10 mt-3  lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/work-man-445x318.jpg" />
          <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/robot-540x540.jpg" />
          <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/woman-445x264.jpg" />
          <ArticleCard image="https://shuffle.dev/acros-assets/images/blog/work-man-445x318.jpg" />
        </div>

        <div className="flex justify-center mt-12">
          <BreadCrumbB />
        </div>
      </Section>
    </>
  );
}
