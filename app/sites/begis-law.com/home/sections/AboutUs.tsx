import React from "react";
import Section from "../../_components/Section";
const stats = [
  { label: "Business was founded", value: "2012" },
  { label: "People on the team", value: "50+" },
  { label: "Customer on the platform", value: "350+" },
  { label: "Achievements", value: "200+" },
];
export default function AboutUs() {
  return (
    <Section classNames="sm:pt-20 ">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Section.Title >
            ABOUT US
          </Section.Title>
          <Section.Description>
            innovative legal services for all, spanning personal to corporate
            law with skilled staff.
          </Section.Description>
        </div>
      </div>
      <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                Begi’s Law Offices & Chambers (BLOC) is a law practice that is
                aimed at personalizing the practice of law in satisfying the
                needs of the client. At BLOC, we pride ourselves in giving of
                high quality Legal Consultancy, representation and advocacy
                Services.
              </p>
              <p className="mt-8">
                We achieve this through the use of state of the art legal tools
                as well as through our highly skilled personnel. We derive our
                satisfaction in providing modern and innovative solutions to
                variety of legal problems
              </p>
            </div>
            <div>
              <p>
                At Begis Law Offices & Chambers we believe that law and justice
                should be accessible to everyone, regardless of race, religion,
                social status or even wealth. To this end we pride ourselves in
                the development of programs that enhance access to justice for
                all. Our cross cutting practice covers both personal law to
                corporate commercial and constitutional law. At BLOC there is
                always something for everyone.
              </p>
              {/* <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p> */}
            </div>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-4">
            {stats.map((stat, statIdx) => (
              <div
                key={statIdx}
                className="flex flex-col-reverse gap-y-3 border-l border-gray/20 pl-6"
              >
                <dt className="text-base leading-7 text-gray-700">
                  {stat.label}
                </dt>
                <dd className="text-3xl font-semibold tracking-tight ">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
