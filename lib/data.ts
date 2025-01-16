"use server";

import { Cast, Movie, MovieListType } from "@/types/movie";
import { base_url, key } from "./consts";
import { formatListType } from "./formatter";

export const getAllMoviesByListType = async (
  target: MovieListType,
  page: number = 1,
) => {
  const listTypeTitle = formatListType(target);

  try {
    const response = await fetch(
      `${base_url}/movie/${target}?api_key=${key}&page=${page}`,
    );

    const data = await response.json();
    const movies: Movie[] = data.results;

    if (!movies && data.success == false) {
      return {
        type: "error",
        status: 404,
        message: `Failed to fetch ${listTypeTitle} movies`,
      };
    }

    const originalTotalPages: number = data.total_pages;
    // Limit the total pages to a maximum of 3 digits by truncating extra digits
    const limitedTotalPages = limitToThreeDigits(originalTotalPages);

    return {
      type: "success",
      status: 200,
      movies,
      totalPages: limitedTotalPages,
    };
  } catch (error) {
    return {
      type: "error",
      status: 500,
      message: `Failed to fetch ${listTypeTitle} movies`,
    };
  }
};

function limitToThreeDigits(totalPages: number): number {
  return totalPages > 999 ? Math.floor(totalPages / 100) : totalPages;
}

export const getMovieById = async (id: number) => {
  try {
    const response = await fetch(
      `${base_url}/movie/${id}?api_key=${key}&append_to_response=videos,credits,similar`,
    );
    const movie = await response.json();

    if (movie.success == false) {
      return {
        type: "error",
        status: 404,
        message: "Movie not found",
      };
    }

    return {
      type: "success",
      status: 200,
      movie: movie as Movie,
    };
  } catch (error) {
    return {
      type: "error",
      status: 500,
      message: "Failed to fetch movie",
    };
  }
};

export const getCastById = async (id: number) => {
  try {
    const response = await fetch(`${base_url}/person/${id}?api_key=${key}`);
    const cast = await response.json();

    if (cast.success == false) {
      return {
        type: "error",
        status: 404,
        message: "Cast not found",
      };
    }

    return {
      type: "success",
      status: 200,
      cast: cast as Cast,
    };
  } catch (error) {
    return {
      type: "error",
      status: 500,
      message: "Failed to fetch movie",
    };
  }
};

export const getAllMovies = async ({
  page = 1,
  search,
  genreId = "",
}: {
  page?: number;
  search?: string | undefined;
  genreId?: string | undefined;
}) => {
  const endpoint = search
    ? `${base_url}/search/movie?api_key=${key}&page=${page}&query=${search}&with_genres=${genreId}`
    : `${base_url}/discover/movie?api_key=${key}&page=${page}&with_genres=${genreId}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    const movies: Movie[] = data.results;

    return {
      type: "success",
      status: 200,
      movies,
    };
  } catch (error) {
    return {
      type: "error",
      status: 500,
      message: "Failed to fetch movies",
    };
  }
};
