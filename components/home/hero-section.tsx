import dynamic from "next/dynamic";
import { FlipWords } from "../ui/flip-words";

const HeroSectionIcon = dynamic(() => import("./hero-section-icon"), {
  ssr: false,
});

export default function HeroSection() {
  const words = ["Possibilities", "Stories", "Adventures"];

  return (
    <section className="flex flex-col items-center md:flex-row">
      <div className="w-auto shrink-0 md:w-1/3">
        <HeroSectionIcon />
      </div>

      <div className="space-y-5">
        <h1 className="tracking-wide">
          <span className="mb-1 block">
            <span className="text-primary">Discover</span>
            <FlipWords words={words} />
          </span>
          <span> Within the World of Cinema</span>
        </h1>
        <p>
          Unleash your curiosity with insights, reviews, and stories that bring
          movies to life.
        </p>
      </div>
    </section>
  );
}
