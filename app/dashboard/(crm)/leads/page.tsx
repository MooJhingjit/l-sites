
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
import LeadBoardView from './LeadBoardView';
import Tools from './Tools';
import ActiveFilters from './ActiveFilters';


export default function LeadPage() {
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
          <LeadTableView />
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
}
