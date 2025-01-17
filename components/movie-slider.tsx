import { Movie } from "@/types/movie";

import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from "@/components/ui/carousel";
import { v4 as uuid } from "uuid";
import MovieCard from "./movie-card";

interface MovieSliderProps {
  movies: Movie[];
}

const ITEM_COUNT = 10;

export default async function MovieSlider({ movies }: MovieSliderProps) {
  return (
    <Carousel>
      <CarouselContent>
        {movies.slice(0, ITEM_COUNT).map((movie) => (
          <CarouselItem
            key={uuid()}
            className="relative h-[300px] w-full basis-2/3 select-none rounded-xl max-xs:min-w-full sm:basis-1/3 md:h-[500px] lg:basis-1/4"
          >
            <MovieCard {...movie} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  );
}
