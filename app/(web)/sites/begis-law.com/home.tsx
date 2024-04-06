import React from 'react'

export default function Home() {
  return (
    <>
      <Hero />

      <Team />
    </>

  )
}

const Hero = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between -m-6 pt-32 pb-40">
        <div className="w-full lg:w-5/12 xl:w-1/2 p-6">
          <p className="mb-5 font-heading text-gray-400 font-medium text-xl">Grow fast, get things done with ease</p>
          <h1 className="mb-14 font-heading text-2xl md:text-3xl text-white font-bold">Begi's Law Offices provide accessible, innovative legal services for all, spanning personal to corporate law with skilled staff.</h1>
          <div className="flex flex-wrap -m-3 mb-20">
            <div className="w-full lg:w-auto p-3">
              <button className="font-heading w-full px-6 py-4 text-base text-gray-900 bg-white hover:bg-gray-100 rounded-md">Contact Us</button>
            </div>
            <div className="w-full lg:w-auto p-3">
              <button className="font-heading w-full px-6 py-4 text-base text-white bg-transparent border border-gray-500 hover:border-gray-600 rounded-md">View Our Achievements</button>
            </div>
          </div>
          <div className="lg:max-w-md">
            <div className="flex flex-wrap -m-3">
              <div className="w-auto p-3">
                <img className="w-14 h-14" src="gradia-assets/images/hero/avatar-man.png" alt="" />
              </div>
              <div className="flex-1 p-3">
                <p className="mb-4 text-gray-300 text-base">“Empowering Justice, One Case at a Time. Explore Our Commitment to Excellence and Discover How We Make a Difference in Every Client's Life. Your Fight for Justice Starts Here.”</p>
                <p className="font-heading text-white text-base">Denny Jones, founder of BEGI'S Law</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-7/12 xl:w-1/2 p-6">
          <div className="max-w-max mx-auto">
            <div className="flex flex-wrap justify-center -m-3 mb-3">
              <div className="w-full p-3">
                <ReviewBox name="Albert Flores" content="Absolutely thrilled with the support from BLOC. They handled my case with professionalism and care." />
              </div>
            </div>
            <div className="flex flex-wrap justify-center max-w-max -m-3 mb-3">
              <div className="w-full sm:w-1/2 p-3">
                <ReviewBox name="Darlene Robertson" content="BLOC's team was a game-changer for my business. Insightful legal advice that really made a difference." />

              </div>
              <div className="w-full sm:w-1/2 p-3">
                <ReviewBox name="Kristin Watson" content="Innovative and responsive, BLOC found a solution when others said it wasn't possible. Highly recommend!" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center max-w-max -m-3 mb-3 xl:-ml-20">
              <div className="w-full sm:w-1/2 p-3">
                <ReviewBox name="Guy Hawkins" content="BLOC stands out for their commitment to justice for all. Felt respected and valued as a client." />
              </div>
              <div className="w-full sm:w-1/2 p-3">
                <ReviewBox name="Annette Black" content="Quick, efficient, and friendly. BLOC exceeded my expectations at every turn." />

              </div>
            </div>
            <div className="flex flex-wrap justify-center max-w-max -m-3">
              <div className="w-full sm:w-1/2 p-3">
                <ReviewBox name="Robert Fox" content="The team at BLOC is truly exceptional. Their dedication to finding practical solutions is unmatched." />
              </div>
              <div className="w-full sm:w-1/2 p-3">
                <ReviewBox name="Cody Fisher" content="A breath of fresh air in legal services! The approachable team made a complex issue seem simple. Highly recommend!" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


const Team = () => {
  return (
    <section className="relative pt-24 pb-36 overflow-hidden bg-white">
    <div className="container mx-auto px-4">
      <h2 className="mb-5 max-w-2xl mx-auto font-heading font-semibold text-center text-6xl sm:text-7xl text-gray-900">Our Partners and Associates</h2>
      <p className="mb-20 text-base max-w-md mx-auto text-center text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
      <div className="flex flex-wrap -m-6">
        <div className="w-full md:w-1/2 xl:w-1/6 text-center p-6">
          <img className="mb-2 mx-auto" src="gradia-assets/images/teams/avatar-oval0.png" alt=""/>
            <h3 className="mb-1 font-heading font-bold text-lg text-gray-900">Cody Fisher</h3>
            <p className="text-sm text-gray-500">Founder</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/6 text-center p-6">
          <img className="mb-2 mx-auto" src="gradia-assets/images/teams/avatar-oval1.png" alt=""/>
            <h3 className="mb-1 font-heading font-bold text-lg text-gray-900">Guy Hawkins</h3>
            <p className="text-sm text-gray-500">Partner</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/6 text-center p-6">
          <img className="mb-2 mx-auto" src="gradia-assets/images/teams/avatar-oval2.png" alt=""/>
            <h3 className="mb-1 font-heading font-bold text-lg text-gray-900">Ralph Edwards</h3>
            <p className="text-sm text-gray-500">Partner</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/6 text-center p-6">
          <img className="mb-2 mx-auto" src="gradia-assets/images/teams/avatar-oval3.png" alt=""/>
            <h3 className="mb-1 font-heading font-bold text-lg text-gray-900">Floyd Miles</h3>
            <p className="text-sm text-gray-500">Partner</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/6 text-center p-6">
          <img className="mb-2 mx-auto" src="gradia-assets/images/teams/avatar-oval4.png" alt=""/>
            <h3 className="mb-1 font-heading font-bold text-lg text-gray-900">Arlene McCoy</h3>
            <p className="text-sm text-gray-500">Partner</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/6 text-center p-6">
          <img className="mb-2 mx-auto" src="gradia-assets/images/teams/avatar-oval5.png" alt=""/>
            <h3 className="mb-1 font-heading font-bold text-lg text-gray-900">Dianne Russell</h3>
            <p className="text-sm text-gray-500">Partner</p>
        </div>
      </div>
    </div>
  </section>
  )
}
const ReviewBox = ({ name, content }:
  { name: string, content: string }
) => {
  return (

    <div className="mx-auto w-64 p-3 bg-white transform hover:-translate-y-3 transition ease-out duration-1000 rounded-2xl">
      <div className="flex flex-wrap -m-2">
        <div className="w-auto p-2">
          <p className="font-heading text-base text-gray-900">{name}</p>
          <p className="mb-2 text-sm text-gray-500 mt-1">“{content}”</p>
        </div>
      </div>
    </div>
  )
}