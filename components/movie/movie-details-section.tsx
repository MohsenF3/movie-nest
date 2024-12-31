import { convertMinutesToHours } from "@/lib/utils";
import { Movie } from "@/types/movie";
import { Calendar, Clock, Command } from "lucide-react";
import React from "react";
import { v4 as uuid } from "uuid";
import Image from "../Image";
import CircleProgress from "../ui/circle-progressbar";

type MovieDetailsProps = {
  title: Movie["title"];
  posterPath: Movie["poster_path"];
  genres: Movie["genres"];
  releaseDate: Movie["release_date"];
  totalTime: Movie["runtime"];
  status: Movie["status"];
  voteAverage: Movie["vote_average"];
};

export default function MovieDetailsSection({
  title,
  posterPath,
  genres,
  releaseDate,
  totalTime,
  status,
  voteAverage,
}: MovieDetailsProps) {
  const { hours, minutes } = convertMinutesToHours(totalTime!);

  return (
    <section className="flex flex-col gap-8 md:flex-row">
      <Image
        src={posterPath!}
        alt={title}
        className="h-auto w-64 rounded-xl"
        fallbackPath="/camera.webp"
      />
      <div className="flex flex-1 flex-col space-y-6">
        <h2>{title}</h2>
        <Genres genres={genres} />
        <div className="flex flex-wrap items-center gap-8">
          <Details Icon={Calendar}>{releaseDate}</Details>
          <Details Icon={Clock}>{`${hours}h ${minutes}m`}</Details>
          <Details Icon={Command}>{status}</Details>
        </div>
        <CircleProgress rate={voteAverage} />
      </div>
    </section>
  );
}

function Genres({ genres }: { genres: Movie["genres"] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {genres.map((genre) => (
        <div
          className="rounded-full bg-secondary px-5 py-2 text-sm"
          key={uuid()}
        >
          {genre.name}
        </div>
      ))}
    </div>
  );
}

interface DetailsProps extends React.PropsWithChildren {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

function Details({ Icon, children }: DetailsProps) {
  return (
    <p className="flex items-center text-sm">
      <Icon className="mr-2 h-4 w-4" />
      {children}
    </p>
  );
}
