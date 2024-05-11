import { Button } from "@/components/ui/button";
import Navigation, { NavGroup } from "../Navigation";
import {
  CircleDollarSign,
  HomeIcon,
  MailIcon,
  BuildingIcon,
  Users,
  CalendarIcon,
  LayoutTemplate,
  SquarePen,
  UserCogIcon,
  SlidersVerticalIcon,
  ChevronLeftIcon,
} from "lucide-react";
import Link from "next/link";

export const navigation: NavGroup[] = [
  {
    title: "My Account",
    links: [
      {
        title: "Profile",
        href: "/dashboard/settings/profile",
        icon: <UserCogIcon className="w-4 h-4" />,
      },
      {
        title: "Preferences",
        href: "/dashboard/settings/preferences",
        icon: <SlidersVerticalIcon className="w-4 h-4" />,
        creatable: true,
      },
    ],
  },
];

export function SettingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full lg:ml-60">
      <div className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
        <div className="contents lg:pointer-events-auto lg:block lg:w-60 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10">
          <div className="max-w-[200px] flex justify-start">
            <Button
              variant="outline"
              className="px-3 -mx-4 shadow-none hover:bg-transparent"
              asChild
            >
              <Link
                href="/dashboard/leads"
                className="flex space-x-2  border-none "
              >
                <ChevronLeftIcon className="mr-2 h-4 w-4" /> Settings
              </Link>
            </Button>
          </div>
          <Navigation
            withBrand={false}
            navigation={navigation}
            className="hidden lg:mt-6 lg:block"
          />
        </div>
      </div>
      <div className="relative px-4 sm:px-6 pt-10">{children}</div>
    </div>
  );
}
