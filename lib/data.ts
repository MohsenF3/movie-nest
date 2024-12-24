"use server";

import { Cast, Movie, MovieListType } from "@/types/movie";
import { base_url, key } from "./consts";

export const getAllMoviesByListType = async (
  target: MovieListType,
  page: number = 1,
) => {
  try {
    const response = await fetch(
      `${base_url}/movie/${target}?api_key=${key}&page=${page}`,
    );

    const data = await response.json();
    const totalPages: number = data.total_pages;
    const movies: Movie[] = data.results;

    return { type: "success", status: 200, movies, totalPages };
  } catch (error) {
    return {
      type: "error",
      status: 500,
      message: `Failed to fetch ${target.replace("_", " ")} movies`,
    };
  }
};

export const getMovieById = async (id: number) => {
  try {
    const response = await fetch(
      `${base_url}/movie/${id}?api_key=${key}&append_to_response=videos,credits`,
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
