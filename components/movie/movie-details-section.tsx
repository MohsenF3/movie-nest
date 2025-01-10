import { convertMinutesToHours } from "@/lib/utils";
import { Movie } from "@/types/movie";
import { Calendar, Clock, Command } from "lucide-react";
import React from "react";
import { v4 as uuid } from "uuid";
import CircleProgress from "../ui/circle-progressbar";
import CustomImage from "../ui/custom-image";

type MovieDetailsProps = {
  title: Movie["title"];
  backdropPath: Movie["backdrop_path"];
  posterPath: Movie["poster_path"];
  genres: Movie["genres"];
  releaseDate: Movie["release_date"];
  totalTime: Movie["runtime"];
  status: Movie["status"];
  voteAverage: Movie["vote_average"];
};

export default function MovieDetailsSection({
  title,
  backdropPath,
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
      className="relative flex flex-col gap-8 overflow-hidden rounded-lg border bg-cover bg-top bg-no-repeat p-5 md:flex-row md:px-10 md:pb-56"
      style={{
        backgroundImage: `url(${backdropPath})`,
      }}
    >
      <div className="absolute inset-0 h-full w-full bg-popover/80" />

      <CustomImage
        src={posterPath!}
        alt={title}
        containerClassName="z-10 w-full md:w-80 h-[600px] md:h-[500px] border rounded-lg"
        fallbackPath="/camera.webp"
        sizes="(max-width: 768px) 100vw, 50vw"
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
