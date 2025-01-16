import {
  Book,
  Crosshair,
  Eye,
  Ghost,
  Heart,
  Hourglass,
  Layers,
  Map,
  Music,
  Popcorn,
  Rocket,
  Search,
  ShieldAlert,
  Smile,
  Sparkles,
  Sword,
  Target,
  Users,
} from "lucide-react";

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

export const VALID_LIST_TYPES = [
  "now_playing",
  "top_rated",
  "popular",
  "upcoming",
] as const;
