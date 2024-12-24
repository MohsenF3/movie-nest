"use client";

import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import { getAllMovies } from "@/lib/data";
import { Movie } from "@/types/movie";
import Loader from "../loader";
import MovieCard from "../movie-card";

interface InfiniteScrollMoviesProps {
  search?: string;
  genreId?: string;
  initialMovies?: Movie[];
}

export default function InfiniteScrollMovies({
  search,
  genreId,
  initialMovies = [],
}: InfiniteScrollMoviesProps) {
  const {
    data: movies,
    hasMore,
    ref,
  } = useInfiniteScroll<Movie>({
    initialData: initialMovies,
    fetchData: async (page) => {
      const response = await getAllMovies({ search, genreId, page });
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
