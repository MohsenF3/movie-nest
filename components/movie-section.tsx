import { MovieListType } from "@/types/movie";
import React from "react";
import FantasyTitle from "./fantasy-title";
import MovieSlider from "./movie-slider";
import MovieSliderSkeleton from "./movie-slider-skeleton";

interface MovieSectionProps {
  title: string;
  target: MovieListType;
}

export default function MovieSection({ target, title }: MovieSectionProps) {
  return (
    <section className="relative space-y-7">
      <FantasyTitle title={title} href={`/movies/${target}`} />

      <React.Suspense fallback={<MovieSliderSkeleton />}>
        <MovieSlider target={target} />
      </React.Suspense>
    </section>
  );
}
