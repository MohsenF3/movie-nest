import Error from "@/components/error";
import InfiniteScrollMovies from "@/components/movies/infinite-scroll-movies";
import { buildFilters } from "@/helpers/inde";
import { getAllMovies } from "@/lib/data";
import { MovieSearchParams } from "@/types/movie/filters";
import dynamic from "next/dynamic";

const MoviesListFilters = dynamic(
  () => import("@/components/movies/movies-list-filters"),
  {
    ssr: false,
  },
);

export async function generateMetadata() {
  return {
    title: "Movies",
  };
}

interface MoviesPageProps {
  searchParams: MovieSearchParams;
}

export default async function MoviesPage({ searchParams }: MoviesPageProps) {
  const filters = buildFilters(searchParams);
  const { movies, status, type, message } = await getAllMovies(filters);

  // show message if request failed
  if (type === "error" && status === 500) {
    return <Error message={message} />;
  }

  // show message if no movies found
  if (!movies?.length) {
    return (
      <div className="flex min-h-[calc(100vh-11.5rem)] items-center justify-center">
        <p>No movies found.</p>
      </div>
    );
  }

  return (
    <div className="mb-5 min-h-[calc(100vh-11.5rem)]">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-5">
        <div className="space-y-2">
          <h2 className="capitalize md:mt-6">All Movies</h2>
          <p className="tracking-wide text-muted-foreground">
            Explore a wide selection of movies with personalized filters and
            sorting options.
          </p>
        </div>
        <MoviesListFilters />
      </div>

      <ul key={Date.now()} role="list" className="movie-grid-list">
        <InfiniteScrollMovies initialMovies={movies} filters={filters} />
      </ul>
    </div>
  );
}
