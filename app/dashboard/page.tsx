"use client";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link"
import {
  UserIcon,
  ArrowUpRight,
  MailIcon,
  DollarSign,
  Users,
  CalendarIcon,
  SunMoonIcon,
  MoonIcon,
  BuildingIcon,
  HomeIcon
} from "lucide-react"
import { Label } from "@/components/ui/label"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


import { Input } from "@/components/ui/input";
import Logo from "./components/Logo";
import Image from "next/image";
export default function DashboardPage() {
  return (
    <div className="container flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">

      <div className="mx-auto max-w-2xl text-center">
        <div className="relative mb-6 mx-auto md:w-[550px]">
          <div className="border-t absolute top-4 left-0 right-0 z-0 border-t-primary/40 hidden md:block"></div>
          <div className=" flex items-center justify-between  relative z-10">
            <div className="bg-white px-4 hidden md:block">
              <Image
                src="https://nestopa.com/images/logo/nestopa.svg"
                alt="Nestopa"
                width="170"
                height="30"
              />
            </div>
            <div className="bg-white md:px-4 px-0">
              <Logo
                height={30}
              />
            </div>
          </div>
        </div>
        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl w-full text-wrap">
          Manage all your leads in one place
        </h1>
        <p className=" text-lg  text-wrap text-gray-600 w-full">
          Get a quick overview of your leads, deals, contaFcts and viewings
        </p>


      </div>

      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Leads
            </CardTitle>
            <MailIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+45 (฿432,309)</div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
              <Link href="#" className="text-xs flex">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Deals
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+235</div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">
                +18.1% from last month
              </p>
              <Link href="#" className="text-xs flex">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contacts</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+32</div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
              <Link href="#" className="text-xs flex">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Viewings</CardTitle>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+20</div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">
                incoming viewings
              </p>
              <Link href="#" className="text-xs flex">
                View All
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <div className=" grid gap-4 md:gap-8 lg:col-span-2 grid-cols-2 grid-rows-4">
          <Card className="">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Properties</CardTitle>
              <HomeIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+32</div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
                <Link href="#" className="text-xs flex">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Projects</CardTitle>
              <BuildingIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+20</div>
              <div className="flex justify-between items-center">
                <p className="text-xs text-muted-foreground">
                  incoming viewings
                </p>
                <Link href="#" className="text-xs flex">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-2 row-span-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Statistics
              </CardTitle>
              {/* <CalendarIcon className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Skeleton className="h-4 w-4/4 mt-4" />
                <Skeleton className="h-4 w-4/4" />
                <Skeleton className="h-4 w-4/4" />
                <Skeleton className="h-4 w-3/4" />
                <br />
                <Skeleton className="h-4 w-4/4 mt-4" />
                <Skeleton className="h-4 w-4/4" />
                <Skeleton className="h-4 w-4/4" />
                <Skeleton className="h-4 w-3/4" />
                <br />
                <Skeleton className="h-4 w-4/4 mt-4" />
                <Skeleton className="h-4 w-4/4" />
                <Skeleton className="h-4 w-4/4" />
                <Skeleton className="h-4 w-3/4" />

              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your profile</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-8">
            <div className="grid gap-4">
              <div className=" flex  items-center gap-3">
                <UserIcon className="h-4 w-4 text-muted-foreground" />
                <Label htmlFor="status">Pokkrong Jhingjit</Label>
              </div>
              <div className=" flex  items-center gap-3">
                <MailIcon className="h-4 w-4 text-muted-foreground" />
                <Label htmlFor="status">pokkrong@webquest.io</Label>
              </div>
            </div>

            <fieldset className="grid gap-6 rounded-lg border p-4">
              <legend className="-ml-1 px-1 text-sm font-medium">Contact</legend>

              <div className="grid gap-3">
                <Label htmlFor="temperature">Phone</Label>
                <Input id="temperature" type="number" placeholder="+66" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="temperature">Line</Label>
                <Input id="temperature" type="number" placeholder="Your line id" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="temperature">Whatsapp</Label>
                <Input id="temperature" type="number" placeholder="Your whatsapp id" />
              </div>
            </fieldset>
            <fieldset className="grid gap-6 rounded-lg border p-4">
              <legend className="-ml-1 px-1 text-sm font-medium">Preferences</legend>

              <div className="grid gap-3">
                <Label htmlFor="temperature">Mode</Label>
                <Tabs defaultValue="account" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">
                      <SunMoonIcon className="h-5 w-5 text-secondary mr-1" />
                      Light
                    </TabsTrigger>
                    <TabsTrigger value="password">
                      <MoonIcon className="h-4 w-4 text-secondary mr-1" />
                      Dark
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

            </fieldset>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
