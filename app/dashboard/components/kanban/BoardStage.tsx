"use client"
import React from 'react';
import { Droppable } from "@hello-pangea/dnd";

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { EllipsisVertical, EyeOffIcon, PencilLineIcon, Trash2Icon } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useLeadModal from '../../lib/hooks/useLeadModal';


export default function BoardStage({
  variant,
  items,
  columnKey,
  label,
  renderCardItem
}: {
  variant: "default" | "success" | "destructive";
  label: string;
  columnKey: string;
  items: any[];
  renderCardItem: (item: any, index: number) => React.ReactNode;
}) {
  const { data, refs, onOpen } = useLeadModal()

  const openNewLead = () => {
    // open filter modal
    onOpen()
  }

  return (
    <div className="h-auto min-w-[240px] w-full select-none ">
      <div
        className={
          cn(
            "w-full   shadow-md pb-2 h-full bg-secondary/50",
            // variant === "default" && "bg-secondary/50 ",
            variant === "success" && "border-t-2 border-t-green-500",
            variant === "destructive" && "border-t-2 border-t-red-500",
          )
          //   classNames(
          //   "w-full rounded-md  shadow-md pb-2 h-full",
          //   variant === "default" && "bg-secondary",
          // )
        }
      >
        <div className=" flex justify-between items-center px-3 pt-2 pb-4 text-sm font-semibold whitespace-nowrap">
          <div className='flex space-x-2 items-center w-4/5'>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="muted" size="icon" className='h-5 w-5 rounded-sm'>
                  <EllipsisVertical className="h-4 w-4 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className=' cursor-pointer space-x-2 text-xs  flex items-center'>
                  <PencilLineIcon className="h-3 w-3" /><span>Edit Title</span>
                </DropdownMenuItem>
                <DropdownMenuItem className=' cursor-pointer space-x-2 text-xs  flex items-center'>
                  <EyeOffIcon className="h-3 w-3" /><span>Hide Column</span>
                </DropdownMenuItem>
                <DropdownMenuItem className='text-destructive text-xs cursor-pointer space-x-2 flex items-center'>
                  <Trash2Icon className="h-3 w-3 " />
                  <span >Remove</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <p className='truncate' title={label}>{label}</p>
          </div>
          <p>({items.length})</p>
        </div>
        <div className="h-full px-3">
          <Droppable droppableId={columnKey} type="card">
            {(provided) => (
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="h-full group"
              >
                {items.map(renderCardItem)}

                {provided.placeholder}

                <li>
                  <Button
                    onClick={openNewLead}
                    variant="muted" className="w-full hidden group-hover:block">
                    Add Item
                  </Button>
                </li>
              </ul>
            )}
          </Droppable>
        </div>
      </div>
    </div >
  );
}
