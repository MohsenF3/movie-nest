import { imageURL } from "@/lib/consts";
import { Movie } from "@/types/movie";
import { Zap } from "lucide-react";
import Link from "next/link";
import CircleProgress from "./ui/circle-progressbar";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

export default function MovieCard(movie: Movie) {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="relative block h-full w-full space-y-2 rounded-xl"
    >
      <DirectionAwareHover
        image={{ url: `${imageURL}${movie.poster_path}`, alt: movie.title }}
      >
        <div className="h-full w-full space-y-2">
          <CircleProgress rate={movie.vote_average} />
          <h2 className="line-clamp-1 text-sm font-semibold text-white">
            {movie.title}
          </h2>
          <div className="flex flex-wrap items-center gap-2 font-medium text-white/80">
            <p className="flex items-center text-sm">
              <Zap className="mr-1 size-4 text-primary" />
              {movie.vote_count}
            </p>
            <p className="text-sm">votes</p>
          </div>
        </div>
      </DirectionAwareHover>
    </Link>
  );
}
