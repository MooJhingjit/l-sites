import Image from "next/image";
import Logo from "../Logo";
import Link from "next/link";

type Props = {
  links: { [key: string]: { name: string; href: string }[] };
  socialLinks: {
    name: string;
    href: string;
    icon: (props: any) => JSX.Element;
  }[];
  description: string;
  copyRight: string;
  termsOfServiceLink: string;
  privacyPolicyLink: string;
};

export default function FooterA(props: Readonly<Props>) {
  const {
    links,
    socialLinks,
    copyRight,
    description,
    termsOfServiceLink,
    privacyPolicyLink,
  } = props;
  return (
    <footer className="bg-primary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-20">
        <div className="lg:grid lg:grid-cols-3 xl:gap-8 @container">

          <div className="space-y-8 col-span-3 @2xl:col-span-1">
            <Logo width={130} height={22} />

            <p className="text-sm leading-6 text-gray-300">{description}</p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-10 xl:mt-0 flex flex-col sm:flex-row space-y-8 sm:space-y-0 justify-between 2xl:justify-evenly w-full col-span-3 @2xl:col-span-2">
            {Object.keys(links).map((navigationKey) => (
              <div key={navigationKey}>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  {navigationKey}
                </h3>
                <ul className="mt-3 space-y-4">
                  {links[navigationKey].map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
        </div>
        <div className="@container mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex items-center justify-between ">
          <div className="@2xl:flex @2xl:items-center">
            <p className="text-xs leading-5 text-gray-400">{copyRight}</p>
            <div className="hidden @2xl:block ml-3 mr-3  h-5 w-px bg-white/20 "></div>
            <div className="flex space-x-3 justify-start items-center">
              <p className="text-xs leading-5 text-gray-400">Power by</p>
              <Image
                src="https://nestopa.com/images/logo/nestopa-white.svg"
                alt="Nestopa"
                width="130"
                height="25"
              />
            </div>
          </div>
          <div className="flex items-center">
            <Link
              href={privacyPolicyLink}
              className="text-xs leading-5 text-gray-400 hover:text-white"
            >
              Privacy Policy
            </Link>
            <div className="ml-3 mr-3 hidden h-5 w-px bg-white/20 sm:block"></div>
            {termsOfServiceLink && (
              <Link
                href={termsOfServiceLink}
                className="text-xs leading-5 text-gray-400 hover:text-white"
              >
                Terms of Service
              </Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
