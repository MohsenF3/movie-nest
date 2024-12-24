export type MovieListType =
  | "now_playing"
  | "top_rated"
  | "upcoming"
  | "popular";

export type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids?: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  belongs_to_collection?: any;
  budget?: number;
  genres: Genre[];
  homepage: string;
  imdb_id?: string;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: SpokenLanguage[];
  status?: string;
  tagline?: string;
  videos?: Videos;
  credits?: Credits;
  media_type: string;
};

type Genre = {
  id: number;
  name: string;
};

type ProductionCompany = {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

type Videos = {
  results: Video[];
};

type Video = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
};

type Credits = {
  cast: CastMember[];
};

export type CastMember = {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
  department?: string;
  job?: string;
};
