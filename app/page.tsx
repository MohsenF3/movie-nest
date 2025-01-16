import HeroSection from "@/components/home/hero-section";
import dynamic from "next/dynamic";

const GenreList = dynamic(() => import("@/components/home/genre-list"));
const CallToAction = dynamic(() => import("@/components/home/call-to-action"));
const MovieSections = dynamic(() => import("@/components/home/movie-sections"));

export default function HomePage() {
  return (
    <div>
      <HeroSection />

      <GenreList />

      <CallToAction />

      <MovieSections />
    </div>
  );
}
