import React from "react";
import {
  BookIcon,
  CarIcon,
  DumbbellIcon,
  ExternalLink,
  ListIcon,
  LocateIcon,
  ShieldIcon,
} from "lucide-react";
import Link from "next/link";
import FeatureItem from "./FeatureItem";
import PropertySection from "./PropertySection";

const PropertyOverview = () => {
  return (
    <div className="space-y-10 ">
      <PropertySection label="Property Overview">
        <div className="prose prose-sm mt-4 text-muted-foreground">
          <p>
            Welcome to this breathtaking three-bedroom, four-bathroom condo
            located on the hillside of Kamala, Kathu, at the prestigious Andara
            Resort & Villas. Spanning 270 sqm on the first floor, this fully
            furnished unit embodies the essence of luxury and tranquility in one
            of Phuket\'s most sought-after locations.
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
      </PropertySection>

      <PropertySection label="Property Features">
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
      </PropertySection>

      <PropertySection
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
      </PropertySection>

      <PropertySection label="Location">
        <div className="h-[400px]">
          <img
            className="w-full h-full object-cover"
            src="https://shuffle.dev/mockup-assets/images/map.png"
            alt=""
          />
        </div>
      </PropertySection>
    </div>
  );
};

export default PropertyOverview;
