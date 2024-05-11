"use client";
import React from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import BoardStage from "./BoardStage";
import BoardTools from "./BoardTools";

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
type Props = {
  onDragEnd: (result: any) => void;
  children: React.ReactNode;
};

export default function BoardContext(props: Props) {
  const { onDragEnd, children } = props;
  const [leads, setLeads] = React.useState(defaultLeads);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="lists" type="list">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="flex space-x-4 h-full justify-between"
          >
            {children}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
