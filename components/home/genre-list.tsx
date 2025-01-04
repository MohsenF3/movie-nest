import { allGenres } from "@/lib/placeholder";
import { LucideProps } from "lucide-react";
import Link from "next/link";
import React from "react";
import FantasyTitle from "../fantasy-title";

const VISIBLE_GENRES_START = 1;
const VISIBLE_GENRES_END = 10;

export default function GenreGrid() {
  return (
    <section className="relative my-28 space-y-7">
      <FantasyTitle
        title="Popular Genres"
        href="/movies"
        linkText="View All Genres"
        hasLine={false}
      />

      <div className="grid grid-cols-1 divide-x divide-y divide-muted-foreground/50 border border-muted-foreground/50 md:grid-cols-3">
        {allGenres
          .slice(VISIBLE_GENRES_START, VISIBLE_GENRES_END)
          .map((genre) => (
            <GenreCard key={genre.id} {...genre} />
          ))}
      </div>
    </section>
  );
}

interface GenreCardProps {
  id: number;
  href: string;
  title: string;
  Icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}

function GenreCard({ href, title, Icon, id }: GenreCardProps) {
  const randomX = (id * 80) % 100;
  const randomY = (id * 20) % 100;
  const backgroundPosition = `${randomX}% ${randomY}%`;

  return (
    <Link
      href={href}
      className="group relative block h-full w-full bg-muted/30 p-6 transition-all duration-500"
    >
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 bg-[url(/grid-background.webp)] bg-cover bg-top opacity-0 blur-lg grayscale transition-all duration-500 group-hover:opacity-25"
        style={{ backgroundPosition }}
      />

      <HoverEffects />
      {Icon && (
        <Icon
          className="size-16 rounded-full bg-background p-4 transition-all duration-500 group-hover:bg-primary"
          aria-hidden="true"
        />
      )}
      <h4 className="mt-4">{title}</h4>
    </Link>
  );
}

function HoverEffects() {
  const hoverStyles =
    "absolute z-10 scale-0 bg-primary transition-all duration-500 group-hover:scale-100";

  const cornerPositions = [
    { position: "left-[1px] top-[1px]", origin: "top" },
    { position: "right-[1px] top-[1px]", origin: "top" },
    { position: "bottom-[1px] left-[1px]", origin: "bottom" },
    { position: "bottom-[1px] right-[1px]", origin: "bottom" },
  ];

  return (
    <>
      {cornerPositions.map(({ position, origin }, index) => (
        <React.Fragment key={index}>
          <span
            className={`${position} h-4 w-[3px] origin-${origin} ${hoverStyles}`}
          />
          <span
            className={`${position} h-[3px] w-4 origin-${origin} ${hoverStyles}`}
          />
        </React.Fragment>
      ))}
    </>
  );
}
