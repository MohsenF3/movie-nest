import { Movie } from "@/types/movie";
import MovieSlider from "../movie-slider";

interface SimilarSectionProps {
  movies: Movie[];
}

export default function SimilarSection({ movies }: SimilarSectionProps) {
  return (
    <section className="card-section">
      <h3>Similar Movies</h3>
      <MovieSlider movies={movies} />
    </section>
  );
}
