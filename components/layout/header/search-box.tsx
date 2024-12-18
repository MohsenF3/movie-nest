import { Input } from "@/components/ui/input";

export function SearchBox() {
  return (
    <Input
      type="text"
      placeholder="Search Movie"
      className="flex flex-1 items-center"
    />
  );
}
