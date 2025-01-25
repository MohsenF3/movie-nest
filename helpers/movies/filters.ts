import { MovieSearchParams } from "@/types/movie/filters";

export const buildFilters = (searchParams: MovieSearchParams) => ({
  query: searchParams?.query,
  page: searchParams?.page,
  with_genres: searchParams?.with_genres,
  "release_date.gte": searchParams?.["release_date.gte"],
  "release_date.lte": searchParams?.["release_date.lte"],
  with_original_language: searchParams?.with_original_language,
  sort_by: searchParams?.sort_by,
  "vote_average.gte": searchParams?.["vote_average.gte"],
  "vote_average.lte": searchParams?.["vote_average.lte"],
  "vote_count.gte": searchParams?.["vote_count.gte"],
});
