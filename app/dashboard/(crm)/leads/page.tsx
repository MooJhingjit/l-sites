
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
import { columns } from './lead-columns';
import { Params, SearchParams } from "@/lib/definitions";

type Props = {
  params: Params;
  searchParams: SearchParams;
};


export default async function LeadPage({
  params,
  searchParams,
}: Props) {
  console.log(params, searchParams)

  let defaultDisplay = 'board';

  if (searchParams.display && ['board', 'table'].includes(searchParams.display)) {
    defaultDisplay = searchParams.display;
  }

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'All Leads' }
      ]}
      className="w-full h-full  ">
      <Tabs defaultValue={defaultDisplay} className=''>
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
        </div>
        <TabsContent value="board" className='relative overflow-x-scroll w-full'>
          <LeadBoardView />
        </TabsContent>
        <TabsContent value="table" className="relative">
          <LeadTableView
            columns={columns}
            data={defaultLeads}
          />
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
}
