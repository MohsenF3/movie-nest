import { getAllMoviesByCategory } from "@/lib/data";
import { MovieListType } from "@/types/movie";

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import MovieCard from "./movie-card";

interface MovieSliderProps {
  target: MovieListType;
}

const ITEM_COUNT = 10;

export default async function MovieSlider({ target }: MovieSliderProps) {
  const { type, message, movies, status } =
    await getAllMoviesByCategory(target);

  if (type === "error" && status === 500 && !movies) {
    return <p className="text-destructive">{message}</p>;
  }

  return (
    <Carousel>
      <CarouselContent>
        {movies?.slice(0, ITEM_COUNT).map((movie) => (
          <CarouselItem
            key={movie.id}
            className="relative h-[500px] w-full basis-2/3 select-none space-y-2 rounded-xl max-xs:min-w-full sm:basis-1/3 lg:basis-1/4"
          >
            <MovieCard {...movie} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  );
}
