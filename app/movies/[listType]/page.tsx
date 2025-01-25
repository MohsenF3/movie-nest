import MoviesPagination from "@/components/movies/movies-pagination";
import ShowMoviesByListType from "@/components/movies/show-movies-by-list-type";
import { formatListType } from "@/lib/formatter";
import { NAVIGATION_MENU_DATA, VALID_LIST_TYPES } from "@/lib/placeholder";
import { MovieListType } from "@/types/movie";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import MoviesPageLoadingSkeleton from "../loading";

interface MoviesByListTypeProps {
  params: { listType: MovieListType };
  searchParams: {
    page?: string;
  };
}

const isValidListType = (listType: MovieListType): boolean =>
  VALID_LIST_TYPES.includes(listType);

export async function generateMetadata({ params }: MoviesByListTypeProps) {
  const { listType } = params;

  // Validate list type before generating metadata
  if (!isValidListType(listType)) {
    notFound();
  }

  const listTypeTitle = formatListType(listType);

  return {
    title: `${listTypeTitle} Movies`,
  };
}

export default async function MoviesByListType(props: MoviesByListTypeProps) {
  const { searchParams, params } = props;
  const listType = params.listType;

  // Ensure list type is valid
  if (!isValidListType(listType)) {
    notFound();
  }

  const currentPage = Number(searchParams?.page) || 1;
  const listTypeTitle = formatListType(listType);
  const description = NAVIGATION_MENU_DATA[0].items?.find(
    (item) => item.href === `/movies/${listType}`,
  )?.description;

  return (
    <div className="flex min-h-[calc(100vh-11.5rem)] flex-col justify-between gap-10">
      <div className="space-y-2">
        <h2 className="capitalize md:mt-6">{listTypeTitle} Movies</h2>
        <p className="tracking-wide text-muted-foreground">{description}</p>
      </div>

      <Suspense key={currentPage} fallback={<MoviesPageLoadingSkeleton />}>
        <ShowMoviesByListType listType={listType} currentPage={currentPage} />
      </Suspense>

      <MoviesPagination currentPage={currentPage} listType={listType} />
    </div>
  );
}
