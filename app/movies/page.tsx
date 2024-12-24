import Error from "@/components/error";
import GenreSelect from "@/components/movies/genre-select";
import InfiniteScrollMovies from "@/components/movies/infinite-scroll-movies";
import { getAllMovies } from "@/lib/data";

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

  if (!movies?.length) {
    return (
      <div className="flex min-h-[calc(100vh-11.5rem)] items-center justify-center">
        <p>No movies found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-11.5rem)]">
      <GenreSelect className="flex md:hidden" />

      <ul
        key={search || "" + genreId + Date.now()}
        role="list"
        className="xs:grid-cols-2 my-6 grid grid-cols-1 gap-8 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4"
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
