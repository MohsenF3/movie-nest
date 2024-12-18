"use server";

import { Movie, MovieListType } from "@/types/movie";
import { base_url, key } from "./consts";

export const getAllMoviesByCategory = async (target: MovieListType) => {
  try {
    const res = await fetch(`${base_url}/movie/${target}?api_key=${key}`);
    const data = await res.json();
    const movies: Movie[] = data.results;

    return { type: "success", movies };
  } catch (error) {
    return {
      type: "error",
      message: `Failed to fetch ${target.replace("_", " ")} movies`,
    };
  }
};
