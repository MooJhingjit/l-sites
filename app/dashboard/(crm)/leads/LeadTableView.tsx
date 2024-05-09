"use client"

import * as React from "react"


import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"


import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  SortingState,
  getSortedRowModel,
  VisibilityState
} from "@tanstack/react-table"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DataTablePagination } from "../../components/data-table/DataTablePagination"
import { DataTableViewOptions } from "../../components/data-table/DataTableViewOptions"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}


export default function LeadTableView<TData, TValue>({
  data,
  columns
}: DataTableProps<TData, TValue>) {

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,

    state: {
      sorting,
      columnVisibility
    },

  })
  // update url when pagination changes
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    params.set("page", (table.getState().pagination.pageIndex + 1).toString())
    params.set("pageSize", table.getState().pagination.pageSize.toString())
    window.history.replaceState({}, "", `${window.location.pathname}?${params}`)
  }, [table.getState().pagination.pageIndex, table.getState().pagination.pageSize])

  // udpate url when sorting changes
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    table.getState().sorting.forEach((sort) => {
      params.set(`sort[${sort.id}]`, sort.desc ? "desc" : "asc")
    })
    window.history.replaceState({}, "", `${window.location.pathname}?${params}`)
  }, [table.getState().sorting])


  return (
    <>
      <DataTableViewOptions table={table} />

      <Card>
        <CardContent>


          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>

        {/* footer */}
        <CardFooter>
          <DataTablePagination table={table} />

        </CardFooter>
      </Card >
    </>

  );
};

