import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getAllMoviesByListType } from "@/lib/data";
import { cn, generatePagination } from "@/lib/utils";
import { MovieListType } from "@/types/movie";
import { v4 as uuid } from "uuid";

interface PaginationProps {
  currentPage: number;
  listType: MovieListType;
}

export default async function MoviesPagination({
  currentPage,
  listType,
}: PaginationProps) {
  const { type, status, totalPages } = await getAllMoviesByListType(listType);

  if (type === "error" && status === 500) {
    return null;
  }

  const allPages = generatePagination(currentPage, totalPages!);

  return (
    <Pagination className="mb-6 inline-flex w-full justify-end">
      <PaginationContent>
        <PaginationArrow
          direction="previous"
          href={getPageHref(listType, currentPage - 1)}
          isDisabled={currentPage <= 1}
        />
        {allPages.map((page) =>
          typeof page === "number" ? (
            <PaginationNumberItem
              key={uuid()}
              page={page}
              listType={listType}
              isActive={currentPage === page}
            />
          ) : (
            <PaginationEllipsisItem key={uuid()} />
          ),
        )}
        <PaginationArrow
          direction="next"
          href={getPageHref(listType, currentPage + 1)}
          isDisabled={currentPage >= totalPages!}
        />
      </PaginationContent>
    </Pagination>
  );
}

interface PaginationArrowProps {
  href: string;
  direction: "previous" | "next";
  isDisabled?: boolean;
}

function PaginationArrow({
  direction,
  href,
  isDisabled,
}: PaginationArrowProps) {
  return (
    <PaginationItem
      className={cn("", {
        "pointer-events-none text-muted-foreground opacity-80": isDisabled,
      })}
    >
      {direction === "previous" ? (
        <PaginationPrevious href={href} />
      ) : (
        <PaginationNext href={href} />
      )}
    </PaginationItem>
  );
}

interface PaginationNumberItemProps {
  page: number;
  listType: MovieListType;
  isActive: boolean;
}

function PaginationNumberItem({
  page,
  listType,
  isActive,
}: PaginationNumberItemProps) {
  return (
    <PaginationItem>
      <PaginationLink href={getPageHref(listType, page)} isActive={isActive}>
        {page}
      </PaginationLink>
    </PaginationItem>
  );
}

function PaginationEllipsisItem() {
  return (
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
  );
}

function getPageHref(listType: MovieListType, page: number) {
  return `/movies/${listType}?page=${page}`;
}
