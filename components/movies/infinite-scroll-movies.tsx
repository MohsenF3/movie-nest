"use client";

import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import { getAllMovies } from "@/lib/data";
import { Movie } from "@/types/movie";
import { MovieSearchParams } from "@/types/movie/filters";
import Loader from "../loader";
import MovieCard from "../movie-card";

interface InfiniteScrollMoviesProps {
  filters: MovieSearchParams;
  initialMovies?: Movie[];
}

export default function InfiniteScrollMovies({
  initialMovies = [],
  filters,
}: InfiniteScrollMoviesProps) {
  const {
    data: movies,
    hasMore,
    ref,
  } = useInfiniteScroll<Movie>({
    initialData: initialMovies,
    fetchData: async (page) => {
      const response = await getAllMovies({
        page,
        ...filters,
      });
      return response.movies || [];
    },
  });

  return (
    <>
      {movies.map((movie, index) => (
        <li key={movie.id + index} className="relative">
          <MovieCard {...movie} />
        </li>
      ))}
      {hasMore && <Loader loaderRef={ref} />}
    </>
  );
}
