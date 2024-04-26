import React from "react";
import Section from "./_components/Section";

const items = [
  {
    label: "Business",
    description:
      "Expert legal guidance for business formation, contracts, partnerships, and corporate governance to secure your company's future.",
  },
  {
    label: "Employment & Labor",
    description:
      "Protecting workers' rights and ensuring employer compliance with labor laws through effective dispute resolution and policy advice.",
  },
  {
    label: "Immigration",
    description:
      "Navigating complex immigration laws to secure visas, residency, and citizenship for individuals and families seeking new opportunities.",
  },
  {
    label: "Intellectual Property",
    description:
      "Safeguarding your innovations and creative works with comprehensive intellectual property strategies, from patents to copyrights.",
  },
  {
    label: "Real Estate",
    description:
      "Handling all aspects of real estate transactions and disputes, from commercial leasing to residential purchases, with precision.",
  },
  {
    label: "Lawsuits & Disputes",
    description:
      "Resolving legal conflicts efficiently through negotiation, mediation, or litigation to achieve favorable outcomes for our clients.",
  },
  {
    label: "Criminal Defense",
    description:
      "Offering robust defense strategies for individuals facing criminal charges, ensuring their rights are protected throughout the legal process.",
  },
  {
    label: "Elder Law",
    description:
      "Providing compassionate legal services for elder individuals, including estate planning, guardianship, and long-term care planning.",
  },
  {
    label: "Family",
    description:
      "Supporting families through legal challenges, from divorce and custody issues to adoption and guardianship, with sensitivity and care.",
  },
  {
    label: "Media, Technology and Telecoms",
    description:
      "Advising on legal issues at the intersection of media, technology, and telecommunications, including privacy and digital rights.",
  },
  {
    label: "Bankruptcy & Debt",
    description:
      "Assisting individuals and businesses in navigating bankruptcy proceedings and debt restructuring to regain financial stability.",
  },
  {
    label: "Consumer Rights",
    description:
      "Defending consumer rights against unfair practices, ensuring fair trade, product safety, and service integrity.",
  },
  {
    label: "Accidents & Injuries",
    description:
      "Providing legal assistance for accident and injury claims to secure compensation for your recovery and loss.",
  },
  {
    label: "Civil & Human Rights",
    description:
      "Championing the protection and enforcement of civil and human rights in courts and communities for a just society.",
  },
];

export default function services() {
  return (
    <Section classNames="sm:pt-20">
      <Section.Title>Practice areas</Section.Title>
      <Section.Description>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </Section.Description>

      <div className=" flex-wrap -m-8  mx-auto grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 divide-x  divide-y divide-gray-100">
        {items.map((item, index) => (
          <div key={index} className="w-full  h-full p-2  group hover:bg-gray-50 ">
            <a className="group" href="#"></a>
            <div className="flex flex-wrap  h-full">
              <a className="group hidden md:block" href="#">
                <div className="w-auto p-4">
                  <img
                    src="gradia-assets/elements/features/folder.svg"
                    alt=""
                  />
                </div>
              </a>
              <div className="flex-1 p-4 h-full flex flex-col justify-between">
                <a href="#">
                  <h3 className="mb-5 font-heading font-bold text-gray-900 text-lg group-hover:underline">
                    {item.label}
                  </h3>
                  <p className="mb-5 text-gray-600 text-base truncate-3-lines">
                    {item.description}
                  </p>
                </a>
                <div className="">
                  <a
                    className="group inline-block font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden"
                    href="#"
                  >
                    <p className="mb-1">Learn more</p>
                    <div className="w-full transform  group-hover:-translate-x-0 translate-x-full h-px bg-black transition ease-in-out duration-500"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
