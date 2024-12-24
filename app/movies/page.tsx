import Error from "@/components/error";
import InfiniteScrollMovies from "@/components/movies/infinite-scroll-movies";
import { getAllMovies } from "@/lib/data";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function MoviesPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const search =
    typeof searchParams.query === "string" ? searchParams.query : undefined;

  const { movies, status, type, message } = await getAllMovies({ search });

  // show message if request failed
  if (type === "error" && status === 500) {
    return <Error message={message} className="min-h-[85dvh]" />;
  }

  if (!movies?.length) {
    return (
      <div className="flex min-h-[85dvh] items-center justify-center">
        <p>No movies found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[85dvh]">
      <ul
        key={search || "" + Date.now()}
        role="list"
        className="my-6 grid grid-cols-1 gap-8 xs:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4"
      >
        <InfiniteScrollMovies search={search} initialMovies={movies} />
      </ul>
    </div>
  );
}
