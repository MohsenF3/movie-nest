import { getAllMoviesByListType } from "@/lib/data";
import { MovieListType } from "@/types/movie";
import { v4 as uuid } from "uuid";
import Error from "../error";
import MovieCard from "../movie-card";

interface ShowMoviesByListTypeProps {
  currentPage: number;
  listType: MovieListType;
}

export default async function ShowMoviesByListType({
  currentPage,
  listType,
}: ShowMoviesByListTypeProps) {
  const { type, message, movies, status } = await getAllMoviesByListType(
    listType,
    currentPage,
  );

  if (type === "error" && status === 500) {
    return <Error message={message} />;
  }

  return (
    <ul className="grid grid-cols-1 gap-8 xs:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
      {movies?.map((movie) => {
        return (
          <li key={uuid()} className="relative">
            <MovieCard {...movie} />
          </li>
        );
      })}
    </ul>
  );
}
