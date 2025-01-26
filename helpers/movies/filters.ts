import { MoviesListFiltersFormValues } from "@/components/movies/schema";
import { MovieSearchParams } from "@/types/movie/filters";
import { ReadonlyURLSearchParams } from "next/navigation";

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

export const getDefaultValues = (
  searchParams: ReadonlyURLSearchParams,
): MoviesListFiltersFormValues => {
  // Helper function to parse a pipe-separated string into an array of numbers
  const parseList = (param: string): number[] | undefined => {
    const value = searchParams.get(param);
    return value ? value.split("|").map(Number) : undefined;
  };

  // Helper function to parse a date string into a Date object
  const getDate = (param: string): Date | undefined => {
    const value = searchParams.get(param);
    return value ? new Date(value) : undefined;
  };

  // Helper function to get a number or return a default value if undefined
  const getNumberOrDefault = (param: string, defaultValue: number): number => {
    const value = searchParams.get(param);
    return value ? Number(value) : defaultValue;
  };

  // Helper function to get a string or undefined
  const getString = (param: string): string | undefined => {
    const value = searchParams.get(param);
    return value || undefined;
  };

  return {
    // Mapping URL parameters to the corresponding filter values
    with_genres: parseList("genres"),
    with_original_language: getString("with_original_language"),
    release_date: {
      gte: getDate("release_date.gte"),
      lte: getDate("release_date.lte"),
    },
    sort_by: getString("sort_by"),
    vote_average: {
      gte: getNumberOrDefault("vote_average.gte", 0),
      lte: getNumberOrDefault("vote_average.lte", 10),
    },
    vote_count: {
      gte: getNumberOrDefault("vote_count.gte", 0),
    },
  };
};
