"use client";

import { useMemo } from "react";
import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import MultipleSelector from "@/components/ui/multiple-selector";
import { genres } from "@/lib/placeholder";
import { MoviesListFiltersFormValues } from "../../schema";

// Static genresOptions; it won't change during the component's lifecycle
const genresOptions = genres.map(({ title, id }) => ({
  label: title,
  value: id,
  disable: title === "All",
}));

export const GenresField = () => {
  const { control, watch } = useFormContext<MoviesListFiltersFormValues>();

  const selectedGenres = useMemo(() => {
    const watchedGenres = watch("with_genres") || [];
    return genresOptions.filter((genreOption) =>
      watchedGenres.includes(genreOption.value),
    );
  }, [watch]); // Removed genresOptions from dependencies

  const selectableGenres = useMemo(() => {
    const selectedValues = new Set(
      selectedGenres.map((option) => option.value),
    );
    return genresOptions.filter((option) => !selectedValues.has(option.value));
  }, [selectedGenres]); // Removed genresOptions from dependencies

  return (
    <FormField
      control={control}
      name="with_genres"
      render={({ field: { onChange } }) => (
        <FormItem>
          <FormLabel>Genres</FormLabel>

          <FormControl>
            <MultipleSelector
              defaultOptions={selectableGenres}
              placeholder="Select a genre"
              value={selectedGenres}
              onChange={(options) =>
                onChange(options.map((option) => option.value))
              }
              emptyIndicator={
                <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                  No genre found.
                </p>
              }
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
