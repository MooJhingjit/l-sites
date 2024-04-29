import React from "react";
import PaginationA from "@components/pagination/PaginationA";

export default function SearchPagination({
  totalPages,
}: {
  totalPages: number;
}) {
  return (
    <div className="flex my-8 justify-end">
      <PaginationA totalPages={totalPages} />
    </div>
  );
}
