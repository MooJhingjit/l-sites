import Image from "next/image";
import { useTheme } from "next-themes";

export default function Logo({
  height = 20,
}) {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/property.com/logos/logo-primary.svg";
      break;
    case "dark":
      src = "/property.com/logos/logo-white.svg";
      break;
    default:
      src = "/property.com/logos/logo-primary.svg";
      break;
  }

  return (
    <div className="h-full  relative ">
      <Image
        src={src}
        width={0}
        alt={`Logo`}
        height={0}
        sizes="100vw"
        style={{
          width: "100%", height: height+"px",

        }} // optional
      />
    </div>
  );
}
