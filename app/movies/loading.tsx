import { Skeleton } from "@/components/ui/skeleton";
import { v4 as uuid } from "uuid";

export default function MoviesPageLoadingSkeleton() {
  return (
    <div className="xs:grid-cols-2 my-7 grid grid-cols-1 gap-8 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({ length: 20 }).map(() => (
        <Skeleton
          key={uuid()}
          className="max-xs:min-w-full h-[500px] w-full min-w-[300px] rounded-2xl bg-secondary"
        />
      ))}
    </div>
  );
}
