"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { allGenres } from "@/lib/placeholder";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Check, ChevronsUpDown } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

type Genre = {
  href: string;
  id: string | number;
  title: string;
};

export default function GenreSelect({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const searchParams = useSearchParams();
  const defaultGenreId = searchParams.get("genre");

  const defaultGenre = React.useMemo(
    () => allGenres.find((genre) => genre.id.toString() === defaultGenreId),
    [defaultGenreId],
  );

  const [open, setOpen] = React.useState(false);
  const [selectedGenre, setSelectedGenre] = React.useState<Genre | undefined>(
    defaultGenre,
  );

  const handleGenreSelect = (genre: Genre | undefined) => {
    setSelectedGenre(genre);
    setOpen(false);
  };

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-5",
        className,
      )}
      {...props}
    >
      <p className="font-medium">Select a genre:</p>
      <GenreDrawer
        open={open}
        onOpenChange={setOpen}
        selectedGenre={selectedGenre}
        onGenreSelect={handleGenreSelect}
      />
    </div>
  );
}

interface GenreDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedGenre: Genre | undefined;
  onGenreSelect: (genre: Genre | undefined) => void;
}

function GenreDrawer({
  open,
  onOpenChange,
  selectedGenre,
  onGenreSelect,
}: GenreDrawerProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="w-[140px] justify-between sm:w-[170px]"
        >
          {selectedGenre ? selectedGenre.title : "Genres"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <VisuallyHidden asChild>
          <DrawerTitle>Movies Genre Drawer Title</DrawerTitle>
        </VisuallyHidden>
        <VisuallyHidden asChild>
          <DrawerDescription>Movies Genre Drawer Description</DrawerDescription>
        </VisuallyHidden>
        <div className="mt-4 border-t">
          <GenreList selectedGenre={selectedGenre} onSelect={onGenreSelect} />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

interface GenreListProps {
  selectedGenre: Genre | undefined;
  onSelect: (genre: Genre | undefined) => void;
}

function GenreList({ selectedGenre, onSelect }: GenreListProps) {
  const { replace } = useRouter();

  const handleSelect = (id: number) => {
    const selectedGenre = allGenres.find((genre) => genre.id === id);
    onSelect(selectedGenre);
    if (selectedGenre) replace(selectedGenre.href);
  };

  return (
    <Command>
      <CommandInput placeholder="Search genre..." />
      <CommandList>
        <CommandEmpty>No genre found.</CommandEmpty>
        <CommandGroup>
          {allGenres.map((genre) => (
            <CommandItem
              key={genre.id}
              value={genre.title}
              onSelect={() => handleSelect(genre.id)}
              className="cursor-pointer"
            >
              {genre.title}
              <Check
                className={cn(
                  "ml-auto",
                  selectedGenre?.id === genre.id ? "opacity-100" : "opacity-0",
                )}
              />
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
