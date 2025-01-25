"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sortOptions } from "@/lib/placeholder";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { MoviesListFiltersFormValues } from "../schema";

export default function Sort() {
  const { control } = useFormContext<MoviesListFiltersFormValues>();

  return (
    <FormField
      control={control}
      name="sort_by"
      render={({ field: { value, onChange } }) => {
        return (
          <FormItem>
            <FormLabel>Sort by</FormLabel>

            <FormControl>
              <Select
                onValueChange={onChange}
                value={value}
                defaultValue={sortOptions[0].value}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>

                <SelectContent>
                  {sortOptions.map(({ value, label }) => {
                    return (
                      <SelectItem value={value} key={value}>
                        <div className="flex items-center gap-1">
                          {value.endsWith("asc") ? (
                            <ChevronDown width={16} height={16} />
                          ) : (
                            <ChevronUp width={16} height={16} />
                          )}
                          {label}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </FormControl>

            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
