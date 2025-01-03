import ShowMoviesByListType from "@/components/movies/show-movies-by-list-type";
import { MovieListType } from "@/types/movie";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import MoviesPageLoadingSkeleton from "../loading";

const MoviesPagination = dynamic(
  () => import("@/components/movies/movies-pagination"),
);

interface MoviesByListTypeProps {
  params: { listType: MovieListType };
  searchParams: {
    page?: string;
  };
}

export default async function MoviesByListType(props: MoviesByListTypeProps) {
  const searchParams = props.searchParams;
  const listType = props.params.listType;
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="flex min-h-[calc(100vh-11.5rem)] flex-col justify-between gap-10">
      <h1 className="my-6 capitalize">{listType.replace("_", " ")} Movies</h1>

      <Suspense key={currentPage} fallback={<MoviesPageLoadingSkeleton />}>
        <ShowMoviesByListType listType={listType} currentPage={currentPage} />
      </Suspense>

      <MoviesPagination currentPage={currentPage} listType={listType} />
    </div>
  );
}
