import Link from "next/link";

export default function NotfoundPage() {
  return (
    <section className="pt-16 pb-44 bg-gray-50 overflow-hidden">
      <div className="relative container mx-auto px-4">
        <img
          className="absolute top-0 left-0"
          src="gradia-assets/elements/http-codes/radial.svg"
          alt=""
        />
        <div className="relative z-10">
          <h2 className=" max-w-max font-heading font-bold text-6xl text-gray-800 ">
            404
          </h2>
          <div className="md:max-w-xl">
            <p className="mb-6 font-heading font-semibold text-xs text-gray-500 uppercase tracking-px">
              Nothing found
            </p>
            <h2 className="mb-5 font-heading font-bold text-6xl sm:text-7xl text-gray-900">
              The page you are looking for is not available!
            </h2>
            <p className="mb-11 text-gray-600 text-lg">
              Try something different or go back to the homepage.
            </p>
            <button className="group relative font-heading py-5 px-9 block w-full md:w-auto text-xs text-white font-semibold uppercase bg-gray-900 overflow-hidden rounded">
              <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gray-800"></div>
              <Link href="/" className="relative z-10">
                Go back to Homepage
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
