"use client"
import React from 'react';
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { EllipsisVertical, EyeIcon, EyeOffIcon, PencilLineIcon, PlusCircleIcon, Trash2Icon } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useLeadModal from '../../lib/hooks/useLeadModal';
import usePipelineStateModal from '../../lib/hooks/usePipelineStateModal';

export const defaultLeads = [
  {
    id: 1,
    title: "Jessica Davis",
    value: 110903,
    type: "buyer",
    status: "qualify-won",
    lastUpdated: new Date("2022-02-14T09:35:20"),
  },
  {
    id: 2,
    title: "Jason Lee",
    value: 7911958,
    type: "buyer",
    status: "lost",
    lastUpdated: new Date("2023-08-11T06:07:23"),
  },
  {
    id: 3,
    title: "Cristina Ware",
    value: 1685733,
    type: "buyer",
    status: "qualify-won",
    lastUpdated: new Date("2020-08-16T00:25:53"),
  },
  {
    id: 4,
    title: "Susan Smith",
    value: 3272996,
    type: "buyer",
    status: "lost",
    lastUpdated: new Date("2024-01-27T00:41:15"),
  },
  {
    id: 5,
    title: "Leroy Combs",
    value: 9966224,
    type: "buyer",
    status: "inbound",
    lastUpdated: new Date("2023-03-18T19:27:13"),
  },
  {
    id: 6,
    title: "Frank Sutton",
    value: 5971003,
    type: "buyer",
    status: "inbound",
    lastUpdated: new Date("2023-01-08T02:49:02"),
  },
  {
    id: 7,
    title: "Andrew Brown",
    value: 6330396,
    type: "buyer",
    status: "qualify",
    lastUpdated: new Date("2021-10-31T21:21:08"),
  },
  {
    id: 8,
    title: "Paul Sandoval",
    value: 8557791,
    type: "buyer",
    status: "inbound",
    lastUpdated: new Date("2022-04-29T12:11:43"),
  },
  {
    id: 9,
    title: "Daniel Nelson",
    value: 5906336,
    type: "buyer",
    status: "qualify-won",
    lastUpdated: new Date("2021-04-30T11:24:26"),
  },
  {
    id: 10,
    title: "Barbara Cisneros",
    value: 100271,
    type: "buyer",
    status: "lost",
    lastUpdated: new Date("2021-07-08T13:17:31"),
  },
  {
    id: 11,
    title: "Catherine Patrick",
    value: 2586516,
    type: "buyer",
    status: "lost",
    lastUpdated: new Date("2022-05-09T04:06:45"),
  },
  {
    id: 12,
    title: "Valerie Mendoza",
    value: 9931571,
    type: "buyer",
    status: "qualify-won",
    lastUpdated: new Date("2023-09-14T12:26:10"),
  },
  {
    id: 13,
    title: "Carla Nelson",
    value: 1771083,
    type: "buyer",
    status: "lost",
    lastUpdated: new Date("2022-10-18T14:15:31"),
  },
  {
    id: 14,
    title: "Tracy Webb",
    value: 2083868,
    type: "buyer",
    status: "lost",
    lastUpdated: new Date("2020-03-13T05:12:47"),
  },
];


const BoardView = () => {

  const [leads, setLeads] = React.useState(defaultLeads);


  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    // if dropped in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newStatus = destination.droppableId;
    const quotationId = draggableId.split("-")[1]; // QT-1

    const updatedLeads = leads.map((i) => {
      if (i.id === Number(quotationId)) {
        return {
          ...i,
          status: newStatus,
        };
      }
      return i;
    });

    setLeads(updatedLeads);
  };


  return (
    <Card className='border-none shadow-none' >
      <CardContent className='px-0 pt-0'>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="lists" type="list">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flex space-x-4 h-full justify-between"
              >
                <BoardStage
                  variant="default"
                  items={
                    leads.filter((i) => i.status === "inbound")
                  }
                  columnKey="inbound"
                  label="Inbound"
                />
                <BoardStage
                  variant="default"
                  items={
                    leads.filter((i) => i.status === "qualify")
                  }
                  columnKey="qualify"
                  label="Qualify"
                />
                <BoardStage
                  variant="success"
                  items={
                    leads.filter((i) => i.status === "qualify-won")
                  }
                  columnKey="qualify-won"
                  label="Won[Moved to new Pipeline]"
                />
                <BoardStage
                  variant="destructive"
                  items={
                    leads.filter((i) => i.status === "lost")
                  }
                  columnKey="lost"
                  label="Lost"
                />

                {provided.placeholder}
                <StageTools />
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </CardContent>
      <CardFooter>

      </CardFooter>
    </Card>

  );
};

const StageTools = () => {

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

const BoardStage = ({
  variant,
  items,
  columnKey,
  label,
}: {
  variant: "default" | "success" | "destructive";
  label: string;
  columnKey: string;
  items: any[];
}) => {

  const { data, refs, onOpen } = useLeadModal()

  const openNewLead = () => {
    // open filter modal
    onOpen()
  }

  return (
    <div className="h-auto min-w-[220px] w-full select-none ">
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
          <div className='flex space-x-2 items-center'>

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

            <p>{label}</p>
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
                {items.map((i: any, cardIdx) => {
                  return <BoardCard idx={`QT-${i.id}`} key={i.id} item={i} />;
                })}

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
};


const BoardCard = ({
  idx,
  item,
}: {
  idx: string;
  item: any;
}) => {
  return (
    <Draggable draggableId={idx.toString()} index={item.id}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="w-full mb-3 cursor-move"
        >

          <Card className='rounded-md'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-3 px-3 " >
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent className='px-3 pb-3 '>
              <p className="text-xs text-secondary-foreground capitalize">
                {item.type}
              </p>
              <div className="text text-secondary-foreground font-semibold">
                ฿{item.value.toLocaleString()}
              </div>

              <p className="text-xs text-muted-foreground mt-1">
                Last updated: {item.lastUpdated.toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        </li>
      )}
    </Draggable>
  );
};


export default BoardView;
