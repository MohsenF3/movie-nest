"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface SearchBoxProps extends React.ComponentProps<"input"> {}

export default function SearchBox({ className, ...props }: SearchBoxProps) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`/movies?${params.toString()}`);
  }, 300);

  return (
    <Input
      type="text"
      placeholder="Search Movie"
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
      defaultValue={searchParams.get("query")?.toString()}
      className={cn("", className)}
      {...props}
    />
  );
}
