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
];

const genres = [
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
  href: genre.id === 0 ? "/movies" : `/movies?genre=${genre.id}`,
}));
