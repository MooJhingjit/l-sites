import { Button } from '@/components/ui/button'
import React from 'react'

export default function DashboardSettings() {
  return (
    <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20  " >
      <div>
        <h2 className="text-base font-semibold leading-7 text-primary">Profile</h2>
        <p className="mt-1 text-sm leading-6 text-primary">
          This information will be displayed publicly so be careful what you share.
        </p>

        <dl className="mt-6 space-y-6 divide-y divide-primary border-t border-primary text-sm leading-6">
          <div className="pt-6 sm:flex items-center">
            <dt className="font-medium text-primary sm:w-64 sm:flex-none sm:pr-6">Full name</dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto items-center">
              <div className="text-primary">Tom Cook</div>
              <Button variant="outline" >
                Update
              </Button>
            </dd>
          </div>
          <div className="pt-6 sm:flex items-center">
            <dt className="font-medium text-primary sm:w-64 sm:flex-none sm:pr-6">Email address</dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto  items-center">
              <div className="text-primary">tom.cook@example.com</div>
              <Button variant="outline" >
                Update
              </Button>
            </dd>
          </div>
          <div className="pt-6 sm:flex items-center">
            <dt className="font-medium text-primary sm:w-64 sm:flex-none sm:pr-6">Title</dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto  items-center">
              <div className="text-primary">Human Resources Manager</div>
              <Button variant="outline" >
                Update
              </Button>
            </dd>
          </div>
          <div className="pt-6 sm:flex items-center">
            <dt className="font-medium text-primary sm:w-64 sm:flex-none sm:pr-6">Language</dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto  items-center">
              <div className="text-primary">English</div>
              <Button variant="outline" >
                Update
              </Button>
            </dd>
          </div>
        </dl>
      </div>



      {/* <div>
        <h2 className="text-base font-semibold leading-7 text-primary">Language and dates</h2>
        <p className="mt-1 text-sm leading-6 text-primary">
          Choose what language and date format to use throughout your account.
        </p>

        <dl className="mt-6 space-y-6 divide-y divide-primary border-t border-primary text-sm leading-6">
          <div className="pt-6 sm:flex items-center">
            <dt className="font-medium text-primary sm:w-64 sm:flex-none sm:pr-6">Language</dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto  items-center">
              <div className="text-primary">English</div>
                            <Button variant="outline" >
                Update
              </Button>
            </dd>
          </div>
          <div className="pt-6 sm:flex items-center">
            <dt className="font-medium text-primary sm:w-64 sm:flex-none sm:pr-6">Date format</dt>
            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto  items-center">
              <div className="text-primary">DD-MM-YYYY</div>
              <button type="button" className="font-semibold text-primary hover:text-primary">
                Update
              </button>
            </dd>
          </div>
        </dl>
      </div> */}
    </div >
  )
}
