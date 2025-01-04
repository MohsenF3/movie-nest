import Error from "@/components/error";
import MovieDetailsSection from "@/components/movie/movie-details-section";
import MovieTrailerSection from "@/components/movie/movie-trailer-section";
import { imageURL } from "@/lib/consts";
import { getMovieById } from "@/lib/data";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

const CastSection = dynamic(() => import("@/components/movie/cast-section"));

interface MoviePageProps {
  params: {
    id: number;
  };
}

export async function generateMetadata({ params }: MoviePageProps) {
  const id = params.id;
  const { status, movie } = await getMovieById(id);
  if (status === 404 || !movie) {
    return {
      title: "Movie not found",
    };
  }
  return {
    title: movie.title,
    description: movie.overview,
    openGraph: {
      images: [
        {
          url: `${imageURL}${movie.poster_path}`,
          width: 1200,
          height: 630,
          alt: movie.title,
        },
      ],
    },
  };
}

export default async function MoviePage({ params }: MoviePageProps) {
  const id = params.id;
  const { status, movie, message, type } = await getMovieById(id);

  // check if movie exists
  if (status === 404 || !movie) {
    notFound();
  }

  // show message if request failed
  if (type === "error" && status === 500) {
    return <Error message={message} />;
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
