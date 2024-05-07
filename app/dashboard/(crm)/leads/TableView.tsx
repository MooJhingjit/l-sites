'use client'
import React from 'react';

import Image from "next/image"
import {
  MoreHorizontal,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { defaultLeads } from './BoardView';



// Reusable function to render the dropdown menu
const ActionsMenu = () => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button aria-haspopup="true" size="icon" variant="ghost">
        <MoreHorizontal className="h-4 w-4" />
        <span className="sr-only">Toggle menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const TableView = () => {
  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Updated</TableHead>

            </TableRow>
          </TableHeader>
          <TableBody>
            {defaultLeads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell>
                  <ActionsMenu />
                </TableCell>
                <TableCell className="font-medium">{lead.title}</TableCell>
                <TableCell>${lead.value.toLocaleString()}</TableCell>
                <TableCell>{lead.type}</TableCell>
                <TableCell>
                  <Badge variant={lead.status === "qualify-won" ? "outline" : "secondary"}>{lead.status}</Badge>
                </TableCell>
                <TableCell>{lead.lastUpdated.toLocaleString()}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong>{" "}
          products
        </div>
      </CardFooter>
    </Card>

  );
};

export default TableView;
