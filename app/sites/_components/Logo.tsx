import React from "react";
import { getSite } from "@/lib/server-utils";
import Image from "next/image";

type Props = {
  width: number;
  height: number;
  isWhite?: boolean;
};

export default function Logo({ width, height, isWhite = true }: Readonly<Props>) {
  const { domain, config: { name } } = getSite();
  const logoType = isWhite ? "white" : "primary";
  const path = `/${domain}/logos/logo-${logoType}.svg`;

  return <Image width={width} height={height} src={path} alt={`${name} Logo`} />;
}
