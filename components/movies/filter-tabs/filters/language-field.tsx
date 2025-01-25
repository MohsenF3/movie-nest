"use client";

import { useFormContext } from "react-hook-form";

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
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { languages } from "@/lib/placeholder";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import React from "react";
import { MoviesListFiltersFormValues } from "../../schema";

export const LanguageField = () => {
  const [open, setOpen] = React.useState(false);
  const { control } = useFormContext<MoviesListFiltersFormValues>();

  const options = languages.map((language) => ({
    value: language.iso_639_1,
    label: language.english_name,
  }));

  return (
    <FormField
      control={control}
      name="with_original_language"
      render={({ field: { onChange, value } }) => (
        <FormItem>
          <FormLabel>Language</FormLabel>

          <FormControl>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  role="combobox"
                  className="w-full justify-between border"
                >
                  {value
                    ? options.find((lang) => lang.value === value)?.label
                    : "Select language..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>

              <PopoverContent
                className="w-full p-0"
                align="start"
                sideOffset={10}
              >
                <Command>
                  <CommandInput placeholder="Search language..." />
                  <CommandList>
                    <CommandEmpty>No language found.</CommandEmpty>
                    <CommandGroup>
                      {options.map((language) => (
                        <CommandItem
                          key={language.value}
                          value={language.label.toLocaleLowerCase()}
                          onSelect={(value) => {
                            const isoValue = options.find(
                              (lang) =>
                                lang.label.toLocaleLowerCase() === value,
                            )?.value;
                            onChange(isoValue);
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              language.value === value
                                ? "opacity-100"
                                : "opacity-0",
                            )}
                          />
                          {language.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};
