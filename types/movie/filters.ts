export type MovieSearchParams = {
  // search query
  query?: string;

  // Sorting
  sort_by?: string;

  // Genre, keyword, and company filters
  with_genres?: string; // Comma or pipe-separated string

  // Release date filters
  "release_date.gte"?: string; // Date in YYYY-MM-DD format
  "release_date.lte"?: string; // Date in YYYY-MM-DD format

  // Vote filters
  "vote_average.gte"?: number;
  "vote_average.lte"?: number;
  "vote_count.gte"?: number;

  // Origin country and language filters
  with_original_language?: string;

  // Pagination
  page?: number;

  with_keywords?: string;
};
