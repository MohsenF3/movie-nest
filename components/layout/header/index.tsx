import Logo from "@/components/logo";
import CustomImage from "@/components/ui/custom-image";
import { Skeleton } from "@/components/ui/skeleton";
import { getAllMoviesByListType } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import { MobileMenuToggle } from "./mobile-menu-toggle";
import Navigation from "./navigation";
import SearchBox from "./search-box";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="mb-5 space-y-3 border-b py-5">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Left Section: Mobile Menu & Logo */}
        <div className="flex items-center gap-4">
          <MobileMenuToggle />
          <Logo className="mr-8 flex lg:hidden" />
        </div>

        {/* Middle Section: Desktop Navigation & Logo */}
        <div className="hidden flex-1 md:block">
          <Navigation>
            <NavigationPopularPoster />
          </Navigation>
        </div>
        {/* Middle Logo in Desktop */}
        <div className="ml-0 hidden flex-auto shrink-0 justify-center lg:flex">
          <Logo className="scale-150" />
        </div>

        {/* Right Section: Search and Theme Toggle */}
        <div className="flex items-center gap-2 lg:flex-1">
          {/* search box in desktop */}
          <Suspense>
            <div className="hidden w-full lg:block">
              <SearchBox />
            </div>
          </Suspense>

          <ThemeToggle />
        </div>
      </nav>

      {/* search box in mobile */}
      <Suspense>
        <div className="container block lg:hidden">
          <SearchBox />
        </div>
      </Suspense>
    </header>
  );
}

async function NavigationPopularPoster() {
  const { movies } = await getAllMoviesByListType("popular");
  const posterStyle =
    "aspect-[2/3] w-2/3 overflow-hidden rounded-md border shadow lg:w-1/3";

  if (!movies || movies.length === 0) {
    return <Skeleton className={cn("", posterStyle)} />;
  }

  const { id, poster_path, title } = movies[0];

  return (
    <Link className={cn("relative", posterStyle)} href={`/movie/${id}`}>
      <CustomImage
        src={poster_path!}
        containerClassName="w-full h-full"
        alt={title}
        fallbackPath="/no-poster.webp"
      />
    </Link>
  );
}
