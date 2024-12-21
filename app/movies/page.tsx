import Error from "@/components/error";
import InfiniteScrollMovies from "@/components/movies/infinite-scroll-movies";
import { getAllMovies } from "@/lib/data";

export default async function MoviesPage() {
  const { movies, status, type, message } = await getAllMovies({});

  // show message if request failed
  if (type === "error" && status === 500) {
    return <Error message={message} className="min-h-[85dvh]" />;
  }

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-8 xs:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4"
    >
      <InfiniteScrollMovies initialMovies={movies} />
    </ul>
  );
}
