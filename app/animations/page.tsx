import Error from "@/components/error";
import InfiniteScrollMovies from "@/components/movies/infinite-scroll-movies";
import { getAllMovies } from "@/lib/data";

export default async function AnimationPage() {
  const filter = {
    with_keywords: "210024",
  };
  const { movies: animas, status, type, message } = await getAllMovies(filter);

  // show message if request failed
  if (type === "error" && status === 500) {
    return <Error message={message} />;
  }

  // show message if no movies found
  if (!animas?.length) {
    return (
      <div className="flex min-h-[calc(100vh-11.5rem)] items-center justify-center">
        <p>No animation found.</p>
      </div>
    );
  }
  return (
    <div className="mb-5 min-h-[calc(100vh-11.5rem)]">
      <div className="mb-5 space-y-2">
        <h2 className="capitalize md:mt-6">Animations</h2>
        <p className="tracking-wide text-muted-foreground">
          From legendary classics to new hits, find the anime you love, organize
          your lists, and dive into incredible stories.
        </p>
      </div>

      <ul key={Date.now()} role="list" className="movie-grid-list">
        <InfiniteScrollMovies initialMovies={animas} filters={filter} />
      </ul>
    </div>
  );
}
