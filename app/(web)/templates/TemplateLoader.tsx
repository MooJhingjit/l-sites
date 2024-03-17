import React from "react";
import dynamic from "next/dynamic";
import { headers } from "next/headers";

const templateWhitelist = ["pro", "default"];

interface Props {
  routePattern: string;
  template: string;
  title: string;
  description: string;
}
const getDynamicComponent = (path: string) => dynamic(() => import("" + path));

export default function TemplateLoader(props: Readonly<Props>) {
  const { routePattern } = props;
  const urlString = headers().get("x-url");
  const url = new URL(urlString ?? "");
  let template = url.searchParams.get("t") as string;

  // check valid template
  if (!templateWhitelist.includes(template)) {
    template = "default";
  }

  const DynamicComponent = getDynamicComponent(`./${template}/${routePattern}`);

  return <DynamicComponent />;
}
