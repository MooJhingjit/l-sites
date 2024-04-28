import { Params, SearchParams } from "@/lib/definitions";
import React from "react";
import Section from "../../_components/Section";
import GridGallery from "../../_components/gallery/GridGallery";
import {
  BookIcon,
  Building,
  CarIcon,
  DumbbellIcon,
  ExternalLink,
  ListIcon,
  LocateIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
} from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { classNames } from "@/lib/client-utils";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function PropertyPage({
  params,
  searchParams,
}: {
  params: Params;
  searchParams: SearchParams;
}) {
  // console.log(params.slug)
  return (
    <div className="">
      <Section classNames="pt-0">
        {/* <Breadcrumb /> */}

        <HeaderInfo />

        <Gallery />

        <div className=" pt-8 grid  grid-cols-12 gap-x-8 ">
          <div className="lg:col-span-8 col-span-12">
            <PropertyInfo />
          </div>

          <div className="hidden lg:block lg:col-span-4 sticky top-0">
            <EnquiryForm />
          </div>
        </div>
      </Section>

      <Section>
        <Section.Title classNames="text-left text-xl mb-2">
          Similar Properties
        </Section.Title>
        <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <PropertyCard image="property-1.webp" />
          <PropertyCard image="property-2.webp" />
          <PropertyCard image="property-3.webp" />
          <PropertyCard image="property-4.webp" />
        </div>
      </Section>
    </div>
  );
}

const PropertyInfoWrapper = ({
  label,
  children,
  customLabel,
  isDark,
  className,
}: {
  label: string;
  customLabel?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  isDark?: boolean;
}) => {
  return (
    <div
      className={twMerge(
        "rounded-lg",
        isDark ? "bg-primary" : "bg-white",
        className
      )}
    >
      <h2
        className={classNames(
          "text-lg font-medium text-primary",
          isDark ? "text-primary-foreground" : "text-primary"
        )}
      >
        {label}
      </h2>
      {customLabel}
      <div className="prose prose-sm mt-4 ">{children}</div>
    </div>
  );
};

const HeaderInfo = () => {
  return (
    <div className="sticky top-0 flex justify-between items-center bg-white pt-2 pb-4 z-30 ">
      <div className="">
        <Section.Title isHeader classNames="text-left text-3xl text-primary">
          Luxury 3-Bed Condo in Andara Resort, Phuket
        </Section.Title>
        <div className="flex divide-x divide space-x-3 text-muted-foreground">
          <div className="flex space-x-1 items-center justify-start">
            <PinIcon size={16} />
            <Section.Subtitle classNames="text-left text-muted-foreground">
              Kamala, Phuket
            </Section.Subtitle>
          </div>
          <div className="flex space-x-1 items-center justify-start pl-3">
            <Building size={16} />
            <Section.Subtitle classNames="text-left ">
              Andara Resort & Villas
            </Section.Subtitle>
          </div>
        </div>
      </div>

      {/* price */}
      <div className="hidden md:block">
        <div className="flex-0">
          <div className="flex flex-wrap items-baseline justify-end gap-x-4  ">
            <p className="text-sm font-medium leading-6 text-muted-foreground">
              For Sale
            </p>
            <Section.Title classNames="text-left text-xl text-primary">
              ฿6,500,000
            </Section.Title>
          </div>
        </div>
        {/* <div className="flex-0">
          <div className="flex flex-wrap items-baseline justify-end gap-x-4  ">
            <p className="text-sm font-medium leading-6 text-muted-foreground">
              For Rent
            </p>
            <Section.Title classNames="text-left text-xl text-primary">
              ฿32,000 / month
            </Section.Title>
          </div>
        </div> */}

        <dl className="bg-primary-foreground grid grid-cols-3 overflow-hidden rounded-md text-center text-sm px-2 py-1 mt-1 divide-x ">
          <dd className="text-primary px-2 whitespace-nowrap">3 Beds</dd>
          <dd className="text-primary px-2 whitespace-nowrap">4 Baths</dd>
          <dd className="text-primary px-2 whitespace-nowrap">240 Sqm.</dd>
        </dl>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="">
      <GridGallery />
    </div>
  );
};
const PropertyInfo = () => {
  return (
    <div className="space-y-10 ">
      <PropertyInfoWrapper label="Property Overview">
        <div className="prose prose-sm mt-4 text-muted-foreground">
          <p>
            Welcome to this breathtaking three-bedroom, four-bathroom condo
            located on the hillside of Kamala, Kathu, at the prestigious Andara
            Resort & Villas. Spanning 270 sqm on the first floor, this fully
            furnished unit embodies the essence of luxury and tranquility in one
            of Phuket's most sought-after locations.
          </p>
          <p>
            Looking to stock your closet? The Basic tee also comes in a 3-pack
            or 5-pack at a bundle discount.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-6 mt-4">
          <dl className="mt-1 space-y-2 text-sm border-b border-gray-200 ">
            <div className="flex items-center justify-between py-2">
              <dt className="text-muted-foreground">Sale Price</dt>
              <dd className="font-medium text-gray-900 text-lg">฿6,500,000</dd>
            </div>
          </dl>

          <dl className="mt-1 space-y-2 text-sm border-b border-gray-200 ">
            <div className="flex items-center justify-between py-2">
              <dt className="text-muted-foreground">Bedroom</dt>
              <dd className="font-medium text-gray-900 text-lg">3</dd>
            </div>
          </dl>
          <dl className="mt-1 space-y-2 text-sm border-b border-gray-200 ">
            <div className="flex items-center justify-between py-2">
              <dt className="text-muted-foreground">Bathroom</dt>
              <dd className="font-medium text-gray-900 text-lg">4</dd>
            </div>
          </dl>
          <dl className="mt-1 space-y-2 text-sm border-b border-gray-200 ">
            <div className="flex items-center justify-between py-2">
              <dt className="text-muted-foreground">Interior size</dt>
              <dd className="font-medium text-gray-900 text-lg">240.00 Sqm.</dd>
            </div>
          </dl>
          <dl className="mt-1 space-y-2 text-sm border-b border-gray-200 ">
            <div className="flex items-center justify-between py-2">
              <dt className="text-muted-foreground">Type</dt>
              <dd className="font-medium text-gray-900 text-lg">Condo</dd>
            </div>
          </dl>

          <dl className="mt-1 space-y-2 text-sm border-b border-gray-200 ">
            <div className="flex items-center justify-between py-2">
              <dt className="text-muted-foreground">Floor</dt>
              <dd className="font-medium text-gray-900 text-lg">- </dd>
            </div>
          </dl>

          <dl className="mt-1 space-y-2 text-sm border-b border-gray-200 ">
            <div className="flex items-center justify-between py-2">
              <dt className="text-muted-foreground">Floor</dt>
              <dd className="font-medium text-gray-900 text-lg">- </dd>
            </div>
          </dl>
        </div>
      </PropertyInfoWrapper>

      <PropertyInfoWrapper label="Property Features">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 ">
          <FeatureItem icon={<DumbbellIcon size={24} />} label="Gym" />
          <FeatureItem icon={<LocateIcon size={24} />} label="Nearby Shops" />
          <FeatureItem icon={<CarIcon size={24} />} label="Parking" />
          <FeatureItem icon={<ShieldIcon size={24} />} label="Security" />
          <FeatureItem icon={<ListIcon size={24} />} label="Sauna" />
          <FeatureItem icon={<ListIcon size={24} />} label="Air Conditioning" />
          <FeatureItem icon={<ListIcon size={24} />} label="Children's Area" />
          <FeatureItem icon={<ListIcon size={24} />} label="Lift" />
          <FeatureItem icon={<BookIcon size={24} />} label="Library" />
          <FeatureItem icon={<ListIcon size={24} />} label="Balcony" />
          <FeatureItem icon={<ListIcon size={24} />} label="Swimming Pool" />
        </div>
      </PropertyInfoWrapper>

      <PropertyInfoWrapper
        className="p-2"
        isDark={false}
        label="Project Information"
        customLabel={
          <div>
            <Link
              href="/contact-us"
              className="text-muted-foreground  flex space-x-1 items-center w-fit"
            >
              <span>Andara Resort & Villas Features</span>
              <ExternalLink size={16} />
            </Link>
          </div>
        }
      >
        <div className="md:flex ">
          <div className="w-full md:w-2/3">
            <img
              className="mx-auto object-cover rounded-md"
              src="https://img.nestopa.com/img/projects/126/iYcQ8y5PbytEOOwu0g2WNwaIEM02wNvFqU94Pp1S.jpg?p=gallery_700&h=auto"
              alt=""
            />
          </div>
          <div className="w-full md:px-4 mt-3 md:mt-0">
            <p className="text-muted-foreground">
              Welcome to Andara Resort & Villas, a luxurious condo development
              located in the beautiful city of Kathu, Phuket. This stunning
              property was completed in 2008 and offers a total of 37 units
              spread across one building with three floors. Developed by
              Anantara, a renowned name in real estate, Andara Resort & Villas
              is the perfect blend of elegance and comfort.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4  gap-2 mt-3 ">
          <FeatureItem
            icon={<ListIcon size={24} />}
            label="Electricity Installed"
          />
          <FeatureItem icon={<ListIcon size={24} />} label="Water Installed" />
          <FeatureItem icon={<ListIcon size={24} />} label="Sea View" />
          <FeatureItem
            icon={<ListIcon size={24} />}
            label="Road Access Available"
          />
          <FeatureItem icon={<ListIcon size={24} />} label="North West" />
          <FeatureItem
            icon={<ListIcon size={24} />}
            label="Off-street private"
          />
        </div>
      </PropertyInfoWrapper>

      <PropertyInfoWrapper label="Location">
        <div className="h-[400px]">
          <img
            className="w-full h-full object-cover"
            src="https://shuffle.dev/mockup-assets/images/map.png"
            alt=""
          />
        </div>
      </PropertyInfoWrapper>
    </div>
  );
};

const FeatureItem = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <div className="flex items-center space-x-2 p-4 bg-muted justify-center rounded-md text-muted-foreground">
      <div className="">{icon}</div>
      <Label>{label}</Label>
    </div>
  );
};

const EnquiryForm = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>CONTACT AGENT</CardTitle>
        <CardDescription>
          <div className="relative flex items-center space-x-3 mt-2 ">
            <div className="flex-shrink-0">
              <Avatar>
                <AvatarImage src="/gradia-assets/images/teams/avatar-md3.png" />
                <AvatarFallback>CP</AvatarFallback>
              </Avatar>
            </div>
            <div className="min-w-0 flex-1">
              <a href="#" className="focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900">
                  Leslie Alexander
                </p>
                <p className="truncate text-sm text-gray-500 flex space-x-2 items-center">
                  <PhoneIcon size={12} />
                  <span>+66 948 837923</span>
                </p>
                <p className="truncate text-sm text-gray-500 flex space-x-2 items-center">
                  <MailIcon size={13}  />
                  <span>leslie@propertyspace.com</span>
                </p>
              </a>
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-3" action="#" method="POST">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <Button variant="default" type="submit" className="w-full">
              Send Message
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className=" text-center text-xs text-gray-500">
          By clicking "send message", you expressly agree that Propertyspace and its affiliates may collect, use and disclose your personal data to provide you with marketing materials which you have agreed to receive, in accordance with our data protection policy.
        </p>
      </CardFooter>
    </Card>
  );
};
