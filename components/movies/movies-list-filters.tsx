"use client";

import { Button } from "@/components/ui/button";
import {
  ResponsiveSheet,
  ResponsiveSheetBody,
  ResponsiveSheetClose,
  ResponsiveSheetContent,
  ResponsiveSheetDescription,
  ResponsiveSheetFooter,
  ResponsiveSheetHeader,
  ResponsiveSheetTitle,
  ResponsiveSheetTrigger,
} from "@/components/ui/responsive-sheet";
import { buildQueryStringFromValues, getDefaultValues } from "@/helpers/movies";
import { SlidersHorizontal } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FilterTabs from "./filter-tabs";
import { MoviesListFiltersFormValues } from "./schema";
export default function MoviesListFilters() {
  const [open, setOpen] = React.useState(false);

  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const defaultValues = {
    ...getDefaultValues(searchParams),
  };

  const methods = useForm<MoviesListFiltersFormValues>({
    defaultValues,
  });

  const onSubmit = (data: MoviesListFiltersFormValues) => {
    const queryString = buildQueryStringFromValues(data);

    replace(`${pathname}?${queryString}`);
    setOpen(false);
  };

  const hasFilters = Object.keys(defaultValues).some((key) =>
    searchParams.get(key),
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <ResponsiveSheet open={open} onOpenChange={setOpen}>
          <ResponsiveSheetTrigger asChild>
            <Button variant={hasFilters ? "default" : "outline"} size="icon">
              <SlidersHorizontal size={16} />
            </Button>
          </ResponsiveSheetTrigger>

          <ResponsiveSheetContent className="space-y-4 p-4">
            <ResponsiveSheetHeader>
              <ResponsiveSheetTitle>Filters</ResponsiveSheetTitle>
              <ResponsiveSheetDescription>
                Filter movies by genre, release date, and more.
              </ResponsiveSheetDescription>
            </ResponsiveSheetHeader>

            <FilterTabs />

            <ResponsiveSheetFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  methods.reset();
                  setOpen(false);
                }}
              >
                Close
              </Button>

              <Button type="submit" onClick={methods.handleSubmit(onSubmit)}>
                Save changes
              </Button>
            </ResponsiveSheetFooter>
          </ResponsiveSheetContent>
        </ResponsiveSheet>
      </form>
    </FormProvider>
  );
}
