import Error from "@/components/error";
import CastSection from "@/components/movie/cast-section";
import MovieDetailsSection from "@/components/movie/movie-details-section";
import MovieTrailerSection from "@/components/movie/movie-trailer-section";
import { imageURL } from "@/lib/consts";
import { getMovieById } from "@/lib/data";
import { notFound } from "next/navigation";

interface MoviePageProps {
  params: Promise<{ id: number }>;
}

export default async function MoviePage({ params }: MoviePageProps) {
  const id = (await params).id;
  const { status, movie, message, type } = await getMovieById(id);

  // check if movie exists
  if (status === 404 || !movie) {
    notFound();
  }

  // show message if request failed
  if (type === "error" && status === 500) {
    return <Error message={message} className="min-h-[85dvh]" />;
  }

  const trailerVideo = movie.videos?.results.find(
    (video) => video.type === "Trailer",
  );
  const casts = movie.credits?.cast.slice(0, 12);

  return (
    <div className="mx-auto my-10 max-w-screen-md space-y-9">
      <MovieDetailsSection
        title={movie.title}
        posterPath={`${imageURL}${movie.poster_path}`}
        genres={movie.genres}
        releaseDate={movie.release_date}
        totalTime={movie.runtime}
        status={movie.status}
        voteAverage={movie.vote_average}
      />

      <OverviewSection overview={movie.overview} />

      <MovieTrailerSection id={trailerVideo?.key ?? ""} />

      <CastSection casts={casts!} />
    </div>
  );
}

function OverviewSection({ overview }: { overview: string }) {
  return (
    <section className="card-section">
      <h3>Overview</h3>
      <p className="text-sm leading-relaxed tracking-wide text-muted-foreground md:text-base">
        {overview}
      </p>
    </section>
  );
}
