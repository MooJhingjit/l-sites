"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@base_components/ui/pagination";
import { generatePagination } from "@/lib/utils";
import { usePathname, useSearchParams } from "next/navigation";

export default function PaginationA({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);
  return (
    <Pagination className="@container">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href={createPageURL(currentPage - 1)} />
        </PaginationItem>
        <div className="hidden @md:flex">
          {allPages.map((page, index) => {
            let position: "first" | "last" | "single" | "middle" | undefined;

            if (index === 0) position = "first";
            if (index === allPages.length - 1) position = "last";
            if (allPages.length === 1) position = "single";
            if (page === "...") position = "middle";

            return (
              <PaginationNumber
                key={page}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div>

        <PaginationItem>
          <PaginationNext href={createPageURL(currentPage + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: Readonly<{
  page: number | string;
  href: string;
  position?: "first" | "last" | "middle" | "single";
  isActive: boolean;
}>) {
  if (isActive) {
    return (
      <PaginationItem>
        <PaginationLink isActive>{page}</PaginationLink>
      </PaginationItem>
    );
  }

  if (position === "middle") {
    return (
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
    );
  }

  return (
    <PaginationItem>
      <PaginationLink href={href}>{page}</PaginationLink>
    </PaginationItem>
  );
}
