import CallToAction from "@/components/home/call-to-action";
import GenreList from "@/components/home/genre-list";
import HeroSection from "@/components/home/hero-section";
import MovieSection from "@/components/movie-section";

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      <GenreList />

      <CallToAction />

      <div className="space-y-20 py-20">
        <MovieSection title="Now Playing" target="now_playing" />
        <MovieSection title="Upcoming" target="upcoming" />
        <MovieSection title="Top Rated" target="top_rated" />
        <MovieSection title="Popular" target="popular" />
      </div>
    </div>
  );
}
