import React from "react";
import { getSite } from "@/lib/server-utils";
import Image from "next/image";

type Props = {
  width: number;
  height: number;
  isWhite?: boolean;
};

export default function Logo({
  width,
  height,
  isWhite = true,
}: Readonly<Props>) {
  const {
    domain,
    config: { name },
  } = getSite();
  const logoType = isWhite ? "white" : "primary";
  const path = `/${domain}/logos/logo-${logoType}.svg`;


  return (
    <div className="h-full  relative ">
      <Image
        src={path}
        width={0}
        alt={`${name} Logo`}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: '70px' }} // optional
      />
    </div>
  );
}
