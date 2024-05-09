"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { EyeIcon, EyeOffIcon, PlusCircleIcon } from 'lucide-react';
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import usePipelineStateModal from '../../lib/hooks/usePipelineStateModal';


export default function BoardTools() {
  const { data, refs, onOpen } = usePipelineStateModal()
  return (
    <div className="space-y-2 min-w-[45px]" >
      <Button
        onClick={
          () => {
            onOpen()
          }
        }
        variant="muted" size="icon" className='w-full' title="Add a new column">
        <PlusCircleIcon className="h-4 w-4" />
      </Button>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="muted" size="icon" className='w-full' title='2 Hidden Columns'>
            <EyeOffIcon className="h-3.5 w-3.5" />
            <p className='text-xs ml-1'>(2)</p>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-60" side='left'>
          <div className=" divide-y  space-y-2">

            <div className="flex justify-between items-center">
              <Label htmlFor="Stage A" className="text-xs">Stage A</Label>
              <div className="flex justify-between items-center space-x-1.5">
                <p className='text-xs'>(6)</p>
                <Button variant="muted" size="icon" className='h-5 w-5 rounded-sm'>
                  <EyeIcon className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
            <div className="flex justify-between items-center pt-2">
              <Label htmlFor="Stage A" className="text-xs">Stage B</Label>
              <div className="flex justify-between items-center space-x-1.5">
                <p className='text-xs'>(1)</p>
                <Button variant="muted" size="icon" className='h-5 w-5 rounded-sm'>
                  <EyeIcon className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>



    </div>
  )
}
