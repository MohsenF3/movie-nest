"use client";

import { CalendarIcon } from "lucide-react";
import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { MoviesListFiltersFormValues } from "../../schema";

export const ReleaseDateField = () => {
  const { control, watch } = useFormContext<MoviesListFiltersFormValues>();

  const startDate = watch("release_date.gte");
  const endDate = watch("release_date.lte");

  return (
    <div className="grid grid-cols-2 gap-2">
      <FormField
        control={control}
        name="release_date.gte"
        render={({ field: { onChange, value } }) => (
          <FormItem>
            <FormLabel>From</FormLabel>

            <FormControl>
              <Popover>
                <PopoverTrigger asChild>
                  <div>
                    <Button
                      variant="outline"
                      aria-label="Open popover date"
                      className="group w-full justify-start"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />

                      {value ? (
                        format(new Date(value), "PP", {
                          locale: ptBR,
                        })
                      ) : (
                        <p className="text-sm text-muted-foreground group-hover:text-muted">
                          18/11/2002
                        </p>
                      )}

                      <span className="sr-only">18/11/2002</span>
                    </Button>
                  </div>
                </PopoverTrigger>

                <PopoverContent className="w-auto p-1" align="start">
                  <Calendar
                    mode="single"
                    selected={value}
                    onSelect={onChange}
                    fromYear={1900}
                    captionLayout="dropdown"
                    toYear={endDate ? endDate.getFullYear() : 2030}
                    disabled={endDate && { after: new Date(endDate) }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="release_date.lte"
        render={({ field: { onChange, value } }) => (
          <FormItem>
            <FormLabel>To</FormLabel>

            <FormControl>
              <Popover>
                <PopoverTrigger asChild>
                  <div>
                    <Button
                      variant="outline"
                      aria-label="Open popover date"
                      className="group w-full justify-start"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />

                      {value ? (
                        format(new Date(value), "PP", {
                          locale: ptBR,
                        })
                      ) : (
                        <p className="text-sm text-muted-foreground group-hover:text-muted">
                          18/11/2003
                        </p>
                      )}

                      <span className="sr-only">18/11/2003</span>
                    </Button>
                  </div>
                </PopoverTrigger>

                <PopoverContent className="w-auto p-1" align="start">
                  <Calendar
                    mode="single"
                    selected={value}
                    onSelect={onChange}
                    captionLayout="dropdown"
                    toYear={2030}
                    fromYear={startDate ? startDate.getFullYear() : 1900}
                    disabled={
                      startDate && {
                        before: new Date(startDate),
                      }
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
