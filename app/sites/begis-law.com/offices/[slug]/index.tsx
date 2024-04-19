import React from "react";
import Section from "../../_components/Section";
import ServiceLists from "./_components/ServiceLists";

type Props = {
  slug?: string;
};

const getData = async (slug: string) => {
  return Promise.resolve({
    name: slug + ", Kenya",
    description:
      "Nestled in the heart of Kenya's bustling capital, our Nairobi office serves as a beacon of legal excellence, offering comprehensive services in a diverse and dynamic environment.",
    languages: ["English", "Swahili", "Kikuy"],
  });
};

export default async function OfficePage(props: Props) {
  const office = await getData(props.slug || "");
  return (
    <Section classNames="relative px-4 overflow-hidden sm:pt-20">
      <div className="w-full">
        <div className="mb-6">
          <Section.Title classNames="text-left mx-0 ">
            {office.name}
          </Section.Title>

          <div className="flex space-x-4">
            <p className=" text-gray-900 text-base -mt-4">
              Languages spoken: English, Swahili, Kikuy
            </p>
          </div>
        </div>

        <Section.Description classNames="max-w-2xl text-left mx-0 mb-10">
          {office.description}
        </Section.Description>
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-1">
            <ServiceLists />
          </div>
          <div className="col-span-5  bg-gray-50 rounded-lg overflow-hidden p-8">
            <ServiceData />
          </div>
        </div>
      </div>
    </Section>
  );
}

const ServiceData = () => {
  return (
    <div className="flex flex-col ">
      <h4 className="mb-3 text-lg font-semibold text-primary">Business</h4>
      <div className="flex-grow mb-3 prose text-justify prose-slate">
        <p>
          One of the core practices of our firm. We provide&nbsp;expert legal
          support&nbsp;in every stage of your company, whether you are a
          start-up or an ongoing business. We specialize in assisting local and
          foreign entrepreneurs in&nbsp;business entity formation, regulatory
          compliance, licensing, corporate housekeeping, taxation, and even
          planning for an eventual exit strategy.​
        </p>
        <p>
          Our lawyers are assisted by accountants, making our firm a one-stop
          service provider for businessmen.&nbsp;
        </p>
        <p>
          Our lawyers are skilled and experienced in business law and have
          handled companies in various industries such as BPOs, contractors,
          financial institutions, drugstore chains, energy providers, real
          estate firms, online gambling operators, hospitals, hotels and
          resorts, architectural firms, and food outlets, among others.
        </p>
        <p>Our Business Law practice&nbsp;includes:​​</p>
        <ul>
          <li>
            Business registration and licensing​, including domestic
            corporations, foreign corporations, branch office, representative
            office;
          </li>
          <li>​Corporate Housekeeping / Retainer Services;</li>
          <li>Taxation and tax-saving strategies;</li>
          <li>Foreign investments;</li>
          <li>
            PEZA, APECO, and other economic zone registration and compliance;
          </li>
          <li>Representation before the SEC and trial courts;</li>
          <li>Labor and management issues;</li>
          <li>Intellectual property protection;</li>
          <li>Inter and Intra-corporate disputes;</li>
          <li>​Amendment and revision of corporate papers;</li>
          <li>Creating tax-saving strategies;</li>
          <li>Business succession;</li>
          <li>Government compliance;</li>
          <li>Real estate acquisition;</li>
          <li>Contract drafting and review;</li>
          <li>Credit collection​;</li>
          <li>Online gaming license;</li>
          <li>Non-life insurance, bonds, and sureties</li>
        </ul>
      </div>
      <div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-gray-700 mb-2">
          Administrative
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-gray-700 mb-2">
          Banking &amp; Finance
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-gray-700 mb-2">
          Business Registration
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-gray-700 mb-2">
          Contract
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-gray-700 mb-2">
          Due Diligence
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-gray-700 mb-2">
          Franchising
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-gray-700 mb-2">
          International
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-gray-700 mb-2">
          Investment
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-gray-700 mb-2">
          Legal Document
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-gray-700 mb-2">
          Licensing
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-gray-700 mb-2">
          Merger &amp; Acquisition
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-gray-700 mb-2">
          New Business Formation
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-gray-700 mb-2">
          Office Solutions
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-gray-700 mb-2">
          Tax
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-gray-700 mb-2">
          Venture Capital
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-gray-700 mb-2">
          Employer
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-gray-700 mb-2">
          Gaming
        </div>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-gray-700 mb-2">
          Government Contract
        </div>
      </div>
    </div>
  );
};
