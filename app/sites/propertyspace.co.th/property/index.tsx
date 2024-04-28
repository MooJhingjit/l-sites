import { Params, SearchParams } from '@/lib/definitions'
import React from 'react'
import Breadcrumb from './_components/breadcrumb'
import Section from '../../_components/Section'
import Box from './_components/Box'

export default function PropertyPage({ params, searchParams }: {
  params: Params
  searchParams: SearchParams
}) {
  // console.log(params.slug)
  return (
    <div className="">


      <Section>
        <Breadcrumb />
        <div className="grid grid-cols-8 gap-4 mt-6">
          <div className="lg:col-span-6 col-span-8">
            <div className="h-[500px]">
              <Box label='Gallery' />
            </div>
          </div>
          <div className="col-span-2 hidden lg:block">
            <div className="h-[500px]">
              <Box label='Property Info' />
            </div>
          </div>

        </div>

        <div className=" pt-8 grid  grid-cols-12 gap-x-8 ">


          <div className="col-span-8">
            <PropertyInfo />
          </div>

          <div className="col-span-4 sticky top-0">
            <EnquiryForm />
          </div>


        </div>

      </Section>


    </div>
  )
}

const PropertyInfoSection = ({ label, children }: {
  label: string,
  children: React.ReactNode
}) => {
  return (
    <>
      <h2 className="text-sm font-medium text-gray-900">{label}</h2>
      <div className="prose prose-sm mt-4 text-gray-500">
        {children}
      </div>
    </>
  )
}



const PropertyInfo = () => {
  return (

    <div className="lg:border-r lg:border-gray-200  lg:pr-8 ">
      <PropertyInfoSection label='Overview'>
        <div className="prose prose-sm mt-4 text-gray-500">
          <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee  own look.</p>
          <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
        </div>
      </PropertyInfoSection >

      <div className="mt-8 border-t border-gray-200 pt-8">

        <PropertyInfoSection label='Features'>
          <div className="border border-gray-200 rounded-lg">
            <div className="bg-gray-50 border-b border-gray-200
                              rounded-t-md ">
              <h2 className="text-base font-semibold text-gray-900 py-2 px-4">
                Amenities
              </h2>
            </div>
            <div className="px-4 ">
              <div className="grid sm:grid-cols-2 my-3 gap-x-6 divide-y divide-gray-200">
                <div className="py-2 space-y-2 text-sm text-gray-600 md:text-base
                                    ">
                  <div className="flex gap-2">
                    <div className="w-6 h-6">
                      <img alt="Sauna" src="data:image/svg+xml;utf8,%3Csvg%20width%3D%2272%22%20height%3D%2272%22%20viewBox%3D%220%200%2072%2072%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M27.6005%2038.4077H25.8293C25.1965%2035.1659%2022.0549%2033.0506%2018.8124%2033.6833C16.9429%2034.048%2015.3589%2035.281%2014.547%2037.0035C13.1385%2034.0158%209.57403%2032.7352%206.58559%2034.1434C4.86269%2034.9552%203.62954%2036.5388%203.26474%2038.4077H1.2C0.537449%2038.4075%200.000150031%2038.9444%203.14168e-08%2039.6068V70.8003C-0.000149968%2071.4627%200.536849%2071.9999%201.1994%2072H27.5999C28.2625%2072.0002%2028.7998%2071.4633%2028.7999%2070.8009V39.6074C28.8001%2038.945%2028.2631%2038.4078%2027.6005%2038.4077ZM19.947%2035.9718C21.4813%2035.9767%2022.8432%2036.9553%2023.3373%2038.4075H16.5568C17.0508%2036.9553%2018.4126%2035.9769%2019.947%2035.9718ZM9.14698%2035.9718C10.6813%2035.9767%2012.0432%2036.9553%2012.5373%2038.4075H5.75684C6.25079%2036.9553%207.61263%2035.9769%209.14698%2035.9718ZM8.39998%2069.6005H2.39999V40.8071H8.39998V69.6005ZM18%2069.6005H10.8V40.8071H18V69.6005ZM26.3999%2069.6005H20.4V40.8071H26.3999V69.6005Z%22%20fill%3D%22%2364748B%22%2F%3E%0A%3Cpath%20d%3D%22M6.91109%2020.8288C5.79629%2019.8457%205.68964%2018.1452%206.67304%2017.0307C6.74729%2016.9464%206.82694%2016.8669%206.91109%2016.7927C7.86883%2015.8485%208.40568%2014.5582%208.39998%2013.2134H5.99999C5.99759%2013.9847%205.66609%2014.7182%205.08889%2015.2297C3.11129%2017.1961%203.10259%2020.3929%205.06954%2022.37C5.07599%2022.3765%205.08244%2022.3829%205.08889%2022.3894C6.20474%2023.3747%206.31034%2025.0777%205.32484%2026.1931C5.25119%2026.2765%205.17229%2026.3554%205.08889%2026.429C4.13084%2027.3735%203.59414%2028.6642%203.59999%2030.0094H5.99999C6.00284%2029.2373%206.33419%2028.5029%206.91109%2027.9896C8.88898%2026.0225%208.89723%2022.8247%206.92968%2020.8473C6.92353%2020.8411%206.91724%2020.835%206.91109%2020.8288Z%22%20fill%3D%22%2364748B%22%2F%3E%0A%3Cpath%20d%3D%22M15.3111%2020.8288C14.1963%2019.8457%2014.0896%2018.1452%2015.073%2017.0307C15.1473%2016.9464%2015.2269%2016.8669%2015.3111%2016.7927C16.2688%2015.8485%2016.8057%2014.5582%2016.8%2013.2134H14.4C14.3976%2013.9847%2014.0661%2014.7182%2013.4889%2015.2297C11.5113%2017.1961%2011.5026%2020.3929%2013.4695%2022.37C13.476%2022.3765%2013.4824%2022.3829%2013.4889%2022.3894C14.6047%2023.3747%2014.7103%2025.0777%2013.7248%2026.1931C13.6512%2026.2765%2013.5723%2026.3554%2013.4889%2026.429C12.5308%2027.3735%2011.9941%2028.6642%2012%2030.0094H14.4C14.4028%2029.2373%2014.7342%2028.5029%2015.3111%2027.9896C17.289%2026.0225%2017.2972%2022.8247%2015.3297%2020.8473C15.3235%2020.8411%2015.3172%2020.835%2015.3111%2020.8288Z%22%20fill%3D%22%2364748B%22%2F%3E%0A%3Cpath%20d%3D%22M23.711%2020.8288C22.5962%2019.8457%2022.4896%2018.1452%2023.473%2017.0307C23.5472%2016.9464%2023.6269%2016.8669%2023.711%2016.7927C24.6688%2015.8485%2025.2056%2014.5582%2025.1999%2013.2134H22.7999C22.7975%2013.9847%2022.4661%2014.7182%2021.8889%2015.2297C19.9113%2017.1961%2019.9026%2020.3929%2021.8695%2022.37C21.876%2022.3765%2021.8824%2022.3829%2021.8889%2022.3894C23.0047%2023.3747%2023.1103%2025.0777%2022.1248%2026.1931C22.0512%2026.2765%2021.9723%2026.3554%2021.8889%2026.429C20.9308%2027.3735%2020.3941%2028.6642%2020.4%2030.0094H22.7999C22.8028%2029.2373%2023.1341%2028.5029%2023.711%2027.9896C25.6889%2026.0225%2025.6972%2022.8247%2023.7296%2020.8473C23.7235%2020.8411%2023.7172%2020.835%2023.711%2020.8288Z%22%20fill%3D%22%2364748B%22%2F%3E%0A%3Cpath%20d%3D%22M59.9999%2033.6088V22.8112L65.8803%2027.2199C67.3497%2028.3228%2069.4352%2028.0258%2070.5383%2026.5568C71.1271%2025.7725%2071.3398%2024.7681%2071.1195%2023.8126C70.9216%2022.9768%2070.4139%2022.2471%2069.6987%2021.7712L56.4812%2012.4913C59.4048%209.79646%2059.5898%205.24215%2056.8943%202.31917C54.1988%20-0.603816%2049.6434%20-0.788724%2046.7198%201.90616C43.7962%204.60104%2043.6112%209.15536%2046.3067%2012.0783C46.3186%2012.0912%2046.3306%2012.1041%2046.3426%2012.1169C46.27%2012.143%2046.2002%2012.1758%2046.1339%2012.2153L32.2492%2021.478C31.7392%2021.799%2031.3214%2022.2471%2031.037%2022.7782C30.4066%2023.9793%2030.5153%2025.4346%2031.3172%2026.5287C32.4301%2028.0522%2034.5473%2028.4261%2036.1148%2027.3757L43.2001%2022.653V33.6088H33.6001V36.0082H43.2001V49.2473C43.217%2051.8914%2045.3748%2054.0209%2048.0192%2054.004C49.3934%2053.9951%2050.6976%2053.3964%2051.6%2052.3603C53.3366%2054.3544%2056.3613%2054.5635%2058.356%2052.8273C59.3925%2051.9251%2059.9913%2050.6213%2060%2049.2473V36.0082H72V33.6088H59.9999ZM46.9721%205.91325C47.4122%204.29511%2048.6758%203.0306%2050.2938%202.5891C52.8564%201.87527%2055.5126%203.37358%2056.2265%205.93559C56.4617%206.77975%2056.4621%207.67189%2056.2277%208.5162C55.7876%2010.1343%2054.524%2011.3988%2052.9059%2011.8403C50.3433%2012.5542%2047.6871%2011.0559%2046.9733%208.49386C46.738%207.64985%2046.7375%206.75755%2046.9721%205.91325ZM50.3999%2049.2473C50.3865%2050.5601%2049.313%2051.6146%2047.9999%2051.6047C46.6868%2051.6147%2045.6133%2050.5601%2045.5999%2049.2473V34.7652C45.6241%2033.4399%2046.718%2032.3852%2048.0435%2032.4093C49.335%2032.4327%2050.3765%2033.4739%2050.3999%2034.7652V49.2473ZM57.5999%2049.2473C57.5765%2050.5726%2056.4831%2051.6279%2055.1576%2051.6045C53.865%2051.5817%2052.8225%2050.5396%2052.7999%2049.2473V34.7652C52.824%2033.4399%2053.918%2032.3852%2055.2435%2032.4093C56.535%2032.4327%2057.5765%2033.4739%2057.5999%2034.7652V49.2473ZM59.52%2019.4522C58.9901%2019.0544%2058.2381%2019.1614%2057.8402%2019.6912C57.6842%2019.899%2057.5997%2020.1519%2057.5999%2020.4116V30.6711C55.6262%2029.5012%2053.0975%2029.9151%2051.5999%2031.6531C50.1023%2029.9151%2047.5736%2029.5012%2045.5999%2030.6711V20.4118C45.5999%2019.7492%2045.0628%2019.2121%2044.4001%2019.2121C44.1631%2019.2121%2043.9315%2019.2822%2043.7342%2019.4136L34.7834%2025.3794C34.2661%2025.7242%2033.5669%2025.5844%2033.2221%2025.067C33.0613%2024.8257%2032.9996%2024.5318%2033.0503%2024.2464C33.1025%2023.9435%2033.2777%2023.6755%2033.5344%2023.5059L47.1638%2014.413H55.0422L68.4098%2023.7988C68.8197%2024.09%2068.9256%2024.6533%2068.6495%2025.0735C68.3648%2025.4998%2067.7883%2025.6147%2067.3619%2025.3299C67.3479%2025.3206%2067.3341%2025.3109%2067.3206%2025.3007L59.52%2019.4522Z%22%20fill%3D%22%2364748B%22%2F%3E%0A%3C%2Fsvg%3E" className="w-6 h-6 object-contain"/>
                    </div>
                    <div className="self-center">
                      Sauna
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PropertyInfoSection >
      </div>
    </div>
  )
}
const EnquiryForm = () => {
  return (
    <div className=" sm:mx-auto sm:w-full sm:max-w-[480px]">
      <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm leading-6">
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <div>
          <div className="relative mt-10">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm font-medium leading-6">
              <span className="bg-white px-6 text-gray-900">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <a
              href="#"
              className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
            >
              <svg className="h-5 w-5" aria-hidden="true" viewBox="0 0 24 24">
                <path
                  d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                  fill="#EA4335"
                />
                <path
                  d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                  fill="#4285F4"
                />
                <path
                  d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                  fill="#34A853"
                />
              </svg>
              <span className="text-sm font-semibold leading-6">Google</span>
            </a>

            <a
              href="#"
              className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
            >
              <svg className="h-5 w-5 fill-[#24292F]" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-semibold leading-6">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-gray-500">
        Not a member?{' '}
        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Start a 14 day free trial
        </a>
      </p>
    </div>
  )
}