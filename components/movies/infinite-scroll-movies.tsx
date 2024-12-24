"use client";

import { getAllMovies } from "@/lib/data";
import { Movie } from "@/types/movie";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Loader from "../loader";
import MovieCard from "../movie-card";

interface InfiniteScrollMoviesProps {
  search: string | undefined;
  genreId: string | undefined;
  initialMovies: Movie[] | undefined;
}

export default function InfiniteScrollMovies({
  search,
  genreId,
  initialMovies,
}: InfiniteScrollMoviesProps) {
  const [movies, setMovies] = useState(initialMovies);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [ref, inView] = useInView();

  const loadMoreMovies = React.useCallback(async () => {
    // Do not fetch if no more movies are available
    if (!hasMore) return;

    const next = page + 1;
    const { movies: fetchedMovies } = await getAllMovies({
      search,
      genreId,
      page: next,
    });

    if (fetchedMovies?.length) {
      setPage(next);
      setMovies((prev: Movie[] | undefined) => [
        ...(prev?.length ? prev : []),
        ...fetchedMovies,
      ]);
    } else {
      // No more movies available
      setHasMore(false);
    }
  }, [search, page]);

  useEffect(() => {
    if (inView && hasMore) {
      console.log("In view");
      loadMoreMovies();
    }
  }, [inView, genreId]);

  return (
    <>
      {movies?.map((movie, index) => {
        return (
          <li key={movie.id + index} className="relative">
            <MovieCard {...movie} />
          </li>
        );
      })}

      {/* Conditionally render loader */}
      {hasMore ? <Loader loaderRef={ref} /> : null}
    </>
  );
}
