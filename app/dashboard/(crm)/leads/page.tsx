
import React from 'react';
import PageLayout from '../../components/PageLayout';
import {
  Columns3Icon,
  LayoutListIcon,
} from "lucide-react"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import LeadTableView from './LeadTableView';
import LeadBoardView, { defaultLeads } from './LeadBoardView';
import Tools from './Tools';
import ActiveFilters from './ActiveFilters';

import {
  ColumnDef,
} from "@tanstack/react-table"
import { columns } from './lead-columns';

// async function getData(): Promise<Payment[]> {
//   // Fetch data from your API here.
//   return [
//     {
//       id: "728ed52f",
//       amount: 100,
//       status: "pending",
//       email: "m@example.com",
//     },
//     {
//       id: "0a4e48fc",
//       amount: 250,
//       status: "pending",
//       email: "john.doe@example.com",
//     },
//     {
//       id: "1f5a2b6e",
//       amount: 75,
//       status: "pending",
//       email: "jane.smith@example.com",
//     },
//     {
//       id: "2e4b3d1a",
//       amount: 300,
//       status: "pending",
//       email: "alex.jones@example.com",
//     },
//     {
//       id: "3d2f1e5b",
//       amount: 150,
//       status: "pending",
//       email: "susan.wilson@example.com",
//     },
//     {
//       id: "4f7e3c5d",
//       amount: 200,
//       status: "pending",
//       email: "emily.jackson@example.com",
//     },
//     {
//       id: "5a3f6b8e",
//       amount: 125,
//       status: "pending",
//       email: "kevin.miller@example.com",
//     },
//     {
//       id: "6b2d4f7c",
//       amount: 400,
//       status: "pending",
//       email: "olivia.davis@example.com",
//     },
//     {
//       id: "7c4e5d1a",
//       amount: 175,
//       status: "pending",
//       email: "michael.brown@example.com",
//     },
//     {
//       id: "8d3b1f2e",
//       amount: 500,
//       status: "pending",
//       email: "elizabeth.williams@example.com",
//     },
//     {
//       id: "9e1a4b3c",
//       amount: 225,
//       status: "pending",
//       email: "jacob.thomas@example.com",
//     },
//     {
//       id: "10f5a6b7",
//       amount: 350,
//       status: "pending",
//       email: "emma.martin@example.com",
//     },
//     {
//       id: "11a2e4c8",
//       amount: 275,
//       status: "pending",
//       email: "isabella.rodriguez@example.com",
//     },
//     {
//       id: "12b3c7d9",
//       amount: 50,
//       status: "pending",
//       email: "noah.garcia@example.com",
//     },
//     {
//       id: "13c4d8a0",
//       amount: 600,
//       status: "pending",
//       email: "sophia.lopez@example.com",
//     },
//     {
//       id: "14d5e9b1",
//       amount: 80,
//       status: "pending",
//       email: "liam.hall@example.com",
//     },
//     {
//       id: "15e6f0c2",
//       amount: 90,
//       status: "pending",
//       email: "oliver.young@example.com",
//     },
//     {
//       id: "16f7a1d3",
//       amount: 120,
//       status: "pending",
//       email: "amelia.harris@example.com",
//     },
//     {
//       id: "17a8b2e4",
//       amount: 700,
//       status: "pending",
//       email: "charlotte.lewis@example.com",
//     },
//     {
//       id: "18b9c3f5",
//       amount: 45,
//       status: "pending",
//       email: "james.walker@example.com",
//     },
//     {
//       id: "19c0d4a6",
//       amount: 95,
//       status: "pending",
//       email: "ava.green@example.com",
//     },
//     {
//       id: "20d1e5b7",
//       amount: 800,
//       status: "pending",
//       email: "william.scott@example.com",
//     },
//   ];
// }

export default async function LeadPage() {
  // const data = await getData()

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'All Leads' }
      ]}
      className="w-full h-full  ">
      <Tabs defaultValue="board" className=''>
        <div className="flex items-center ">
          <TabsList className='rounded-sm' >
            <TabsTrigger value="board" className='text-xs space-x-1.5 rounded-sm px-1.5 mx-1'>
              <Columns3Icon className="h-4 w-4" />
              <span>Columns</span>
            </TabsTrigger>
            <TabsTrigger value="table" className='text-xs space-x-1.5 rounded-sm px-1.5 mx-1'>
              <LayoutListIcon className="h-4 w-4" />
              <span>Lists</span>
            </TabsTrigger>

          </TabsList>
          <div className="ml-auto flex items-center gap-2">
            <Tools />
          </div>
        </div>
        <div className="mt-2">
          <ActiveFilters />
        </div>
        <TabsContent value="board" className='overflow-x-scroll w-full'>
          <LeadBoardView />
        </TabsContent>
        <TabsContent value="table">
          <LeadTableView
            columns={columns}
            data={defaultLeads}
          />
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
}
