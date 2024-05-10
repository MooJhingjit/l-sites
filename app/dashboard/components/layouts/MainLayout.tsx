
import Header from "../Header";
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
} from "lucide-react";

export const navigation: NavGroup[] = [
  {
    title: "CRM",
    links: [
      {
        title: "Leads",
        href: "/dashboard/leads",
        icon: <MailIcon className="w-4 h-4" />,
        // subLinks: [
        //   { title: "Kanban board", href: "/dashboard/leads/a" },
        //   { title: "Stats", href: "/dashboard/leads/b" },
        // ],
      },
      {
        title: "Deals",
        href: "/dashboard/deals",
        icon: <CircleDollarSign className="w-4 h-4" />,
        creatable: true,
      },
      {
        title: "Viewings",
        href: "/dashboard/viewings",
        icon: <CalendarIcon className="w-4 h-4" />,
        creatable: true,
        tag: "new"
      },

      {
        title: "Contacts",
        href: "/dashboard/contacts",
        icon: <Users className="w-4 h-4" />,
        creatable: true,
      },
    ],
  },
  {
    title: "Listing Management",
    links: [
      {
        title: "Properties",
        href: "/",
        icon: <HomeIcon className="w-4 h-4" />,
        creatable: true,
      },
      {
        title: "Projects",
        href: "/",
        icon: <BuildingIcon className="w-4 h-4" />,
        creatable: true,
      },
    ],
  },
  {
    title: "Website",
    links: [
      {
        title: "Pages & Contents",
        href: "/",
        icon: <SquarePen className="w-4 h-4" />,
      },
      {
        title: "Templates",
        href: "/",
        icon: <LayoutTemplate className="w-4 h-4" />,
      },
    ],
  },
];

export function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="h-full lg:ml-60">
      <div className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
        <div className="contents lg:pointer-events-auto lg:block lg:w-60 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10">
          <Header />
          <Navigation
            navigation={navigation}
            className="hidden lg:mt-6 lg:block" />
        </div>
      </div>
      <div className="relative px-4 sm:px-6 pt-16">
        {children}
      </div>
    </div>
  );
}
