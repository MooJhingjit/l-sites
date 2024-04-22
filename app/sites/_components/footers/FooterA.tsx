import Image from "next/image";
import Logo from "../Logo";

type Props = {
  links: { [key: string]: { name: string; href: string }[] }
  socialLinks: { name: string; href: string; icon: (props: any) => JSX.Element }[];
  description: string;
  copyRight: string;
}

export default function FooterA(props: Readonly<Props>) {
  const { links, socialLinks, copyRight, description } = props
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo
              width={130}
              height={22}
            />

            <p className="text-sm leading-6 text-gray-300">
              {description}
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 flex justify-evenly w-full col-span-2">
            {
              Object.keys(links).map((navigationKey) => (
                <div key={navigationKey}>
                  <h3 className="text-sm font-semibold leading-6 text-white">{navigationKey}</h3>
                  <ul className="mt-6 space-y-4">
                    {links[navigationKey].map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            }
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex items-center">
          <p className="text-xs leading-5 text-gray-400">{copyRight}</p>
          <div className="ml-3 mr-3 hidden h-5 w-px bg-white/20 sm:block"></div>
          <div className="flex space-x-3 justify-center items-center">
            <p className="text-xs leading-5 text-gray-400">
              Power by
            </p>
            <Image src="https://nestopa.com/images/logo/nestopa-white.svg" alt="Nestopa" width="130" height="25" />
          </div>
        </div>
      </div>
    </footer>
  )
}
