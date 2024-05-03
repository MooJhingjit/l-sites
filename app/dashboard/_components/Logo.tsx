import Image from "next/image";

export function Logo() {
  const path = "/property.com/logos/logo-primary.svg";
  return (
    <div className="h-full  relative ">
      <Image
        src={path}
        width={0}
        alt={`Logo`}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "20px" }} // optional
      />
    </div>
  );
}
