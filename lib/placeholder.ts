import { NavigationMenuDataType } from "@/types/placeholder";
import {
  Book,
  Calendar,
  Clapperboard,
  Crosshair,
  Eye,
  Ghost,
  Heart,
  Hourglass,
  JapaneseYen,
  Layers,
  Map,
  Music,
  Play,
  Popcorn,
  Rocket,
  Search,
  ShieldAlert,
  Smile,
  Sparkles,
  Star,
  Sword,
  Target,
  Users,
} from "lucide-react";

export const VALID_LIST_TYPES = [
  "now_playing",
  "top_rated",
  "popular",
  "upcoming",
] as const;

export const NAVIGATION_MENU_DATA: NavigationMenuDataType[] = [
  {
    label: "Movies",
    href: "/movies",
    icon: Clapperboard,
    items: [
      {
        label: "All Movies",
        description:
          "Explore a vast collection of movies, from classics to the latest releases.",
        href: "/movies",
        icon: Clapperboard,
      },
      {
        label: "Now Playing",
        description:
          "Stay up-to-date with the movies shining on the big screens right now.",
        href: "/movies/now_playing",
        icon: Play,
      },
      {
        label: "Top Rated",
        description:
          "Discover what have won over the hearts and minds of audiences and critics.",
        href: "/movies/top_rated",
        icon: Star,
      },
      {
        label: "Popular",
        description:
          "See what's trending! These are the movies and shows everyone is watching and talking about.",
        href: "/movies/popular",
        icon: Heart,
      },

      {
        label: "Upcoming",
        description: "Stay tuned about the next big hits set to premiere soon.",
        href: "/movies/upcoming",
        icon: Calendar,
      },
    ],
  },
  {
    label: "Animations",
    href: "/animations",
    icon: JapaneseYen,
  },
];

export const genres = [
  {
    id: 0,
    title: "All",
  },
  {
    id: 28,
    title: "Action",
    Icon: Sword, // Icon for action-packed genres
  },
  {
    id: 12,
    title: "Adventure",
    Icon: Map, // Map for exploration/adventure
  },
  {
    id: 16,
    title: "Animation",
    Icon: Popcorn, // Represents animation reels
  },
  {
    id: 35,
    title: "Comedy",
    Icon: Smile, // A smile for comedy
  },
  {
    id: 80,
    title: "Crime",
    Icon: ShieldAlert, // Represents crime and danger
  },
  {
    id: 99,
    title: "Documentary",
    Icon: Book, // Knowledge/documentary focus
  },
  {
    id: 18,
    title: "Drama",
    Icon: Layers, // Layered storytelling
  },
  {
    id: 10751,
    title: "Family",
    Icon: Users, // Represents family/groups
  },
  {
    id: 14,
    title: "Fantasy",
    Icon: Sparkles, // Magic wand for fantasy
  },
  {
    id: 36,
    title: "History",
    Icon: Hourglass, // Time/history representation
  },
  {
    id: 27,
    title: "Horror",
    Icon: Ghost, // Ghost for horror
  },
  {
    id: 10402,
    title: "Music",
    Icon: Music, // Music note
  },
  {
    id: 9648,
    title: "Mystery",
    Icon: Search, // Magnifying glass for mystery
  },
  {
    id: 10749,
    title: "Romance",
    Icon: Heart, // Heart for romance
  },
  {
    id: 878,
    title: "Science Fiction",
    Icon: Rocket, // Rocket for sci-fi themes
  },
  {
    id: 10770,
    title: "TV Movie",
  },
  {
    id: 53,
    title: "Thriller",
    Icon: Eye, // Eye for suspense and thrill
  },
  {
    id: 10752,
    title: "War",
    Icon: Target, // Target for war
  },
  {
    id: 37,
    title: "Western",
    Icon: Crosshair, // Crosshair for gunslingers
  },
];

export const allGenres = genres.map((genre) => ({
  ...genre,
  // Add href to each genre
  href: genre.id === 0 ? "/movies" : `/movies?with_genres=${genre.id}`,
}));

export const languages = [
  {
    iso_639_1: "en",
    english_name: "English",
  },
  {
    iso_639_1: "fa",
    english_name: "Persian",
  },
  {
    iso_639_1: "es",
    english_name: "Spanish",
  },
  {
    iso_639_1: "fr",
    english_name: "French",
  },
  {
    iso_639_1: "de",
    english_name: "German",
  },
  {
    iso_639_1: "zh",
    english_name: "Mandarin",
  },
  {
    iso_639_1: "ar",
    english_name: "Arabic",
  },
  {
    iso_639_1: "ru",
    english_name: "Russian",
  },
  {
    iso_639_1: "hi",
    english_name: "Hindi",
  },
  {
    iso_639_1: "bn",
    english_name: "Bengali",
  },
  {
    iso_639_1: "pt",
    english_name: "Portuguese",
  },
  {
    iso_639_1: "ja",
    english_name: "Japanese",
  },
  {
    iso_639_1: "it",
    english_name: "Italian",
  },
  {
    iso_639_1: "ko",
    english_name: "Korean",
  },
  {
    iso_639_1: "tr",
    english_name: "Turkish",
  },
  {
    iso_639_1: "ur",
    english_name: "Urdu",
  },
  {
    iso_639_1: "ta",
    english_name: "Tamil",
  },
  {
    iso_639_1: "sw",
    english_name: "Swahili",
  },
  {
    iso_639_1: "vi",
    english_name: "Vietnamese",
  },
  {
    iso_639_1: "el",
    english_name: "Greek",
  },
  {
    iso_639_1: "nl",
    english_name: "Dutch",
  },
  {
    iso_639_1: "pl",
    english_name: "Polish",
  },
  {
    iso_639_1: "th",
    english_name: "Thai",
  },
  {
    iso_639_1: "uk",
    english_name: "Ukrainian",
  },
  {
    iso_639_1: "he",
    english_name: "Hebrew",
  },
  {
    iso_639_1: "ms",
    english_name: "Malay",
  },
  {
    iso_639_1: "sv",
    english_name: "Swedish",
  },
  {
    iso_639_1: "no",
    english_name: "Norwegian",
  },
  {
    iso_639_1: "ro",
    english_name: "Romanian",
  },
  {
    iso_639_1: "sq",
    english_name: "Albanian",
  },
];

export const sortOptions = [
  { value: "popularity.desc", label: "Popularity (High to Low)" },
  { value: "popularity.asc", label: "Popularity (Low to High)" },
  { value: "revenue.desc", label: "Revenue (High to Low)" },
  { value: "revenue.asc", label: "Revenue (Low to High)" },
  { value: "primary_release_date.desc", label: "Release Date (Newest First)" },
  { value: "primary_release_date.asc", label: "Release Date (Oldest First)" },
  { value: "vote_average.desc", label: "Average Vote (High to Low)" },
  { value: "vote_average.asc", label: "Average Vote (Low to High)" },
  { value: "vote_count.desc", label: "Vote Count (High to Low)" },
  { value: "vote_count.asc", label: "Vote Count (Low to High)" },
];
