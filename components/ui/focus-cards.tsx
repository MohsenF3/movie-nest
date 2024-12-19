"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState } from "react";

type Card = {
  id: number;
  name: string;
  imagePath: string | null;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const hasImage = card.imagePath !== null;
    return (
      <Link
        href={`/cast/${card.id}`}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "relative h-60 w-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-out md:h-56",
          hovered !== null && hovered !== index && "scale-[0.98] blur-sm",
        )}
      >
        <img
          src={hasImage ? card.imagePath! : "/user.webp"}
          alt={card.name}
          className={cn(
            "absolute inset-0 w-full object-cover",
            hasImage ? "h-full" : "h-auto dark:invert",
          )}
        />
        <div
          className={cn(
            "absolute inset-0 flex items-end bg-black/50 p-4 text-white transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0",
          )}
        >
          <h6>{card.name}</h6>
        </div>
      </Link>
    );
  },
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
