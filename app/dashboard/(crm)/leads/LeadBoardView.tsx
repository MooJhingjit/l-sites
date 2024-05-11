"use client";
import React from "react";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";
import { BoardStage, BoardTools, BoardContext } from "../../components/kanban";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

const LeadBoardView = () => {
  const [leads, setLeads] = React.useState(defaultLeads);
  const [stages, setStages] = React.useState([
    {
      id: "inbound",
      label: "Inbound",
      isVisible: true,
      variant: "default",
    },
    {
      id: "qualify",
      label: "Qualify",
      isVisible: true,
      variant: "default",
    },
    {
      id: "qualify-won",
      label: "Won[Moved to new Pipeline]",
      isVisible: true,
      variant: "success",
    },
    {
      id: "lost",
      label: "Lost",
      isVisible: true,
      variant: "destructive",
    },
  ]);

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
    <Card className="border-none shadow-none ">
      <CardContent className="px-0 pt-0">
        <BoardContext onDragEnd={onDragEnd}>
          {stages
            .filter((i) => i.isVisible)
            .map((stage) => (
              <BoardStage
                key={`lead-stage-${stage.id}`}
                variant={stage.variant}
                columnKey={stage.id}
                label={stage.label}
                items={leads.filter((i) => i.status === stage.id)}
                renderCardItem={(item, idx) => (
                  <LeadCard key={item.id} idx={`lead-${item.id}`} item={item} />
                )}
              />
            ))}
          <BoardTools />
        </BoardContext>
      </CardContent>
    </Card>
  );
};

export default LeadBoardView;

const LeadCard = ({ idx, item }: { idx: string; item: any }) => {
  return (
    <Draggable draggableId={idx.toString()} index={item.id}>
      {(provided) => (
        <li
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="w-full mb-3 cursor-move"
        >
          <Card className="rounded-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-3 px-3 ">
              <CardTitle className="text-sm font-medium">
                {item.title}
              </CardTitle>
              {/* <DollarSign className="h-4 w-4 text-muted-foreground" /> */}
            </CardHeader>
            <CardContent className="px-3 pb-3 ">
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
