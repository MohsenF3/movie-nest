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
    <section
      className="relative flex flex-col gap-8 overflow-hidden rounded-lg border bg-cover bg-top bg-no-repeat p-5 md:flex-row md:px-10 md:pb-48"
      style={{
        backgroundImage: `url(${posterPath})`,
      }}
    >
      <div className="absolute inset-0 h-full w-full bg-popover/80" />

      <Image
        src={posterPath!}
        alt={title}
        className="z-10 h-auto w-64 rounded-xl"
        fallbackPath="/camera.webp"
      />
      <div className="z-10 flex flex-1 flex-col space-y-6">
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
