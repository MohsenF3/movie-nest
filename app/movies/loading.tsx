import { Skeleton } from "@/components/ui/skeleton";
import { v4 as uuid } from "uuid";

export default function MoviesPageLoadingSkeleton() {
  return (
    <div className="movie-grid-list mb-6 w-full">
      {Array.from({ length: 20 }).map(() => (
        <Skeleton
          key={uuid()}
          className="h-[300px] w-full rounded-2xl bg-secondary max-xs:min-w-full md:h-[500px]"
        />
      ))}
    </div>
  );
}
