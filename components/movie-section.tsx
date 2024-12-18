import { MovieListType } from "@/types/movie";
import Link from "next/link";
import React from "react";
import MovieSlider from "./movie-slider";
import MovieSliderSkeleton from "./movie-slider-skeleton";
import { buttonVariants } from "./ui/button";

interface MovieSectionProps {
  title: string;
  target: MovieListType;
}

export default function MovieSection({ target, title }: MovieSectionProps) {
  return (
    <section className="relative space-y-7">
      <div className="absolute left-0 top-0 h-8 w-1 rounded bg-primary lg:h-10" />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="pl-3">{title}</h2>

        <Link
          href={`/movies/${target}`}
          className={buttonVariants({ variant: "outline" })}
        >
          See more
        </Link>
      </div>
      <hr />

      <React.Suspense fallback={<MovieSliderSkeleton />}>
        <MovieSlider target={target} />
      </React.Suspense>
    </section>
  );
}
