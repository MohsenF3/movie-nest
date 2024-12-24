import MoviesPagination from "@/components/movies/movies-pagination";
import ShowMoviesByListType from "@/components/movies/show-movies-by-list-type";
import { MovieListType } from "@/types/movie";
import { Suspense } from "react";
import MoviesPageLoadingSkeleton from "../loading";

interface MoviesByListTypeProps {
  params: Promise<{ listType: MovieListType }>;
  searchParams?: Promise<{
    page?: string;
  }>;
}

export default async function MoviesByListType(props: MoviesByListTypeProps) {
  const searchParams = await props.searchParams;
  const listType = (await props.params).listType;
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="flex min-h-[calc(100vh-11.5rem)] flex-col justify-between gap-10">
      <h1 className="mt-6 capitalize">{listType.replace("_", " ")} Movies</h1>

      <Suspense key={currentPage} fallback={<MoviesPageLoadingSkeleton />}>
        <ShowMoviesByListType listType={listType} currentPage={currentPage} />
      </Suspense>

      <MoviesPagination currentPage={currentPage} listType={listType} />
    </div>
  );
}
