import Header from "./Header";
import Navigation from "./Navigation";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full lg:ml-60">
      <div className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
        <div className="contents lg:pointer-events-auto lg:block lg:w-60 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10">
          <Header />
          {/* <Navigation className="hidden lg:mt-6 lg:block" /> */}
        </div>
      </div>
      <div className="relative px-4 sm:px-6 pt-16">{children}</div>
    </div>
  );
}
