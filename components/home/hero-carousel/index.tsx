"use client";

import { buttonVariants } from "@/components/ui/button";
import useAutoplay from "@/hooks/use-autoplay";
import { cn } from "@/lib/utils";
import { Movie } from "@/types/movie";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import MovieContent from "./movie-content";
import NavigationButton from "./navigation-button";
import PosterImages from "./poster-images";

export type MovieCarousel = Pick<
  Movie,
  "id" | "overview" | "title" | "release_date" | "poster_path"
>;

interface HeroCarouselProps {
  movies: MovieCarousel[];
  autoplay?: boolean;
}

export default function HeroCarousel({
  movies,
  autoplay = false,
}: HeroCarouselProps) {
  const [active, setActive] = useState(0);

  const handleNext = () => setActive((prev) => (prev + 1) % movies.length);
  const handlePrev = () =>
    setActive((prev) => (prev - 1 + movies.length) % movies.length);

  useAutoplay(autoplay, handleNext, 5000);

  return (
    <div className="pb-10 max-md:overflow-hidden md:py-20">
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="relative h-[32rem] w-full max-w-lg md:h-[40.625rem]">
          <PosterImages
            movies={movies}
            active={active}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <MovieContent movie={movies[active]} />
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex items-end justify-between gap-4 pt-5 md:pt-0">
            <div className="flex gap-4">
              <NavigationButton direction="prev" onClick={handlePrev} />
              <NavigationButton direction="next" onClick={handleNext} />
            </div>
            <Link
              href={`/movie/${movies[active].id}`}
              className={cn(
                buttonVariants({ variant: "default", className: "mt-5" }),
              )}
            >
              See Movie
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
