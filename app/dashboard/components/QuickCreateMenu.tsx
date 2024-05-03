import { Button } from "@/components/ui/button"
import { CircleDollarSign, HomeIcon, BuildingIcon, Users } from 'lucide-react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SquarePlusIcon } from 'lucide-react';

const solutions = [
  {
    name: 'Deal',
    description: 'lLorem ipsum, dolor sit amet ',
    href: '#', icon: CircleDollarSign
  },
  {
    name: 'Contact',
    description: 'accusantium iure ipsum placeat',
    href: '#', icon: Users
  },
  {
    name: 'Property',
    description: "consequuntur enim laudantium reiciendis",
    href: '#', icon: HomeIcon
  },
  {
    name: 'Project',
    description: 'laboriosam velit maiores earum.',
    href: '#', icon: BuildingIcon
  },
]



export function QuickCreateMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={'ghost'} className="flex space-x-2 text-gray-700">

          <SquarePlusIcon className="w-4 h-4 " />
          <span>Create New</span>
        </Button>

      </PopoverTrigger>
      <PopoverContent className="w-screen max-w-md border-none flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 mr-10">
        <div className="">
          {solutions.map((item) => (
            <div key={item.name} className="group relative flex gap-x-4 rounded-lg p-2 hover:bg-gray-50">
              <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                <item.icon className="h-6 w-6 text-gray-600 group-hover:text-primary-600" aria-hidden="true" />
              </div>
              <div>
                <a href={item.href} className="font-semibold text-gray-900">
                  {item.name}
                  <span className="absolute inset-0" />
                </a>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>  
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
