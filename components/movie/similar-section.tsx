import { Movie } from "@/types/movie";
import MovieSlider from "../movie-slider";

interface SimilarSectionProps {
  movies: Movie[];
}

export default function SimilarSection({ movies }: SimilarSectionProps) {
  return (
    <section className="card-section">
      <h3>Similar Movies</h3>
      {movies.length ? (
        <MovieSlider movies={movies} />
      ) : (
        <p className="text-sm">"No similar movies available.</p>
      )}
    </section>
  );
}
