import Error from "@/components/error";
import InfiniteScrollMovies from "@/components/movies/infinite-scroll-movies";
import { getAllMovies } from "@/lib/data";
import dynamic from "next/dynamic";

const GenreSelect = dynamic(() => import("@/components/movies/genre-select"), {
  ssr: false,
});

type SearchParams = { [key: string]: string | string[] | undefined };

export default async function MoviesPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = props.searchParams;
  const search =
    typeof searchParams.query === "string" ? searchParams.query : undefined;
  const genreId =
    typeof searchParams.genre === "string" ? searchParams.genre : undefined;

  const { movies, status, type, message } = await getAllMovies({
    search,
    genreId,
  });

  // show message if request failed
  if (type === "error" && status === 500) {
    return <Error message={message} />;
  }

  // show message if no movies found
  if (!movies?.length) {
    return (
      <div className="flex min-h-[calc(100vh-11.5rem)] items-center justify-center">
        <p>No movies found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-11.5rem)]">
      <GenreSelect className="mb-5 flex md:hidden" />

      <ul
        key={search || "" + genreId + Date.now()}
        role="list"
        className="movie-grid-list"
      >
        <InfiniteScrollMovies
          search={search}
          genreId={genreId}
          initialMovies={movies}
        />
      </ul>
    </div>
  );
}
