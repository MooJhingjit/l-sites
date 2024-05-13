import React from "react";
import { MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@base_components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@base_components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@base_components/ui/avatar";

const EnquiryForm = () => {
  return (
    <Card className="w-[350px]  sticky top-[100px] ml-auto ">
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
                  <MailIcon size={13} />
                  <span>leslie@property.com</span>
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
            <label
              htmlFor="message"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                required
                rows={4}
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
          By clicking \"send message\", you expressly agree that Property.com and
          its affiliates may collect, use and disclose your personal data to
          provide you with marketing materials which you have agreed to receive,
          in accordance with our data protection policy.
        </p>
      </CardFooter>
    </Card>
  );
};

export default EnquiryForm;
