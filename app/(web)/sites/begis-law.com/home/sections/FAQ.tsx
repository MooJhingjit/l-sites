"use client";
import { Disclosure } from "@headlessui/react";
// import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { Minus, Plus } from "lucide-react";
import SectionWrapper from "../../_components/SectionWrapper";

const faqs = [
  {
    question: "What types of legal cases do you handle?",
    answer:
      "We cover a broad spectrum, including personal, corporate, and constitutional law. Our services are designed to meet the diverse needs of our clients, regardless of the complexity of their legal issues.",
  },
  {
    question: "How do I know if I need a lawyer?",
    answer:
      "If you're facing a situation with legal implications, such as a dispute, contract negotiation, or any matter involving legal rights or responsibilities, consulting with one of our experienced lawyers can provide clarity and direction.",
  },
  {
    question: "What are your fees?",
    answer:
      "Our fee structure is transparent and tailored to the specifics of each case. We offer various billing arrangements, including hourly rates, fixed fees for certain services, and contingency fees for specific case types.",
  },
  {
    question:
      "Can you handle cases in jurisdictions outside of your office locations?",
    answer:
      "Yes, through our network of affiliated firms and legal contacts worldwide, we can provide legal representation and advice in many jurisdictions outside of our direct locations.",
  },
  {
    question: "What makes your law firm different from others?",
    answer:
      "Our commitment to personalized service, combined with our use of modern legal tools and a dedicated team, allows us to offer innovative solutions. We prioritize accessibility to justice for all, ensuring that every client receives.",
  },
];

export default function FAQ() {
  return (
    <SectionWrapper>
      <div className=" divide-y divide-gray-900/10">
        <h2 className="text-4xl font-bold leading-10 tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <Minus className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <Plus className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </SectionWrapper>
  );
}
