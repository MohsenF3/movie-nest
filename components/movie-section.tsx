import { getAllMoviesByListType } from "@/lib/data";
import { MovieListType } from "@/types/movie";
import React from "react";
import FantasyTitle from "./fantasy-title";
import MovieSlider from "./movie-slider";
import MovieSliderSkeleton from "./movie-slider-skeleton";

interface MovieSectionProps {
  title: string;
  target: MovieListType;
}

export default async function MovieSection({
  title,
  target,
}: MovieSectionProps) {
  const { type, message, movies, status } =
    await getAllMoviesByListType(target);

  const hasError = (type === "error" && status === 500) || !movies;

  const renderContent = () => {
    if (hasError) {
      return <p className="text-destructive">{message}</p>;
    }

    return (
      <React.Suspense fallback={<MovieSliderSkeleton />}>
        <MovieSlider movies={movies} />
      </React.Suspense>
    );
  };

  return (
    <section className="relative space-y-7">
      <FantasyTitle title={title} href={`/movies/${target}`} />
      {renderContent()}
    </section>
  );
}
