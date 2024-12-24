import { Skeleton } from "@/components/ui/skeleton";
import { v4 as uuid } from "uuid";

export default function MoviesPageLoadingSkeleton() {
  return (
    <div className="my-7 grid grid-cols-1 gap-8 xs:grid-cols-2 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 20 }).map((_, index) => (
        <Skeleton
          key={uuid()}
          className="h-[500px] w-full min-w-[300px] rounded-2xl bg-secondary max-xs:min-w-full"
        />
      ))}
    </div>
  );
}
