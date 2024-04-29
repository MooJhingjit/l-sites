import React from "react";
import { getSite } from "@/lib/server-utils";
import Image from "next/image";

type Props = {
  width: number;
  height: number;
  isTransparent?: boolean;
};

export default function Logo({ width, height, isTransparent = true }: Readonly<Props>) {
  const { domain, config: { name } } = getSite();
  const logoType = isTransparent ? "logo-transparent" : "logo";
  const path = `/${domain}/logos/${logoType}.png`;

  return <Image width={width} height={height} src={path} alt={`${name} Logo`} />;
}
