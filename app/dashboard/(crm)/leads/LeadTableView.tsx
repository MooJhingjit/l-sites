import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";

import DataTable from "../../components/data-table/DataTable";
import Tools from "./Tools";
import ActiveFilters from "./ActiveFilters";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function LeadTableView<TData, TValue>({
  data,
  columns,
}: DataTableProps<TData, TValue>) {
  return (
    <div className="relative">
      <div className="absolute -top-10 right-0 space-x-2">
        <Tools />
      </div>
      <div className="">
        <ActiveFilters />
      </div>
      <DataTable columns={columns} data={data} pagination />
    </div>
  );
}
