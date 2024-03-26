import React from "react";
import dynamic from "next/dynamic";
import { headers } from "next/headers";
interface Props {
  routePattern: string;
  pageData?: any;
}
const getDynamicComponent = (template: string, routePattern: string) => {
  // template pattern would be => [main-template]/[sub-template]/[routePattern]

  const fullPath = `./${template}/${routePattern}`
  return dynamic(async () => {
  try {
    // Dynamically import the module using the fullPath
    const module = await import("" + fullPath);
    return module.default;
  } catch (e) {
    // If the import fails (e.g., the module is not found), fall back to a default template
    const pathArr = template.split("/");
    try {
      // Attempt to import the default template
      const defaultModule = await import(`./${pathArr[0]}/default/${routePattern}`);
      return defaultModule.default;
    } catch (innerError) {
      // Handle any errors that occur while trying to import the default template
      console.error('Error loading default module:', innerError);
      // You could return null or an alternative module/component here as a further fallback
      return import("./404");
    }
  }
})
};

export default function TemplateLoader(props: Readonly<Props>) {
  const { routePattern } = props;
  const urlString = headers().get("x-url");
  const url = new URL(urlString ?? "");
  let template = url.searchParams.get("t") as string;

  const DynamicComponent = getDynamicComponent(template, routePattern);
  return <DynamicComponent />;
}
