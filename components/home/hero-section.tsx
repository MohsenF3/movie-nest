import { getAllMoviesByListType } from "@/lib/data";
import HeroCarousel from "./hero-carousel";

const TARGET = "now_playing";
const ITEM_TO_SHOW_FROM = 0;
const ITEM_TO_SHOW_TO = 6;

export default async function HeroSection() {
  const { type, message, movies, status } =
    await getAllMoviesByListType(TARGET);

  if ((type === "error" && status === 500) || !movies) {
    return <p className="text-destructive">{message}</p>;
  }

  const data = movies
    .slice(ITEM_TO_SHOW_FROM, ITEM_TO_SHOW_TO)
    .map(({ overview, title, release_date, poster_path, id }) => {
      return {
        id,
        overview,
        title,
        release_date,
        poster_path,
      };
    });

  return (
    <section>
      <HeroCarousel movies={data} autoplay />
    </section>
  );
}
