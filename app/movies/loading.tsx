import { Skeleton } from "@/components/ui/skeleton";
import { v4 as uuid } from "uuid";

export default function MoviesPageLoadingSkeleton() {
  return (
    <div className="movie-grid-list">
      {Array.from({ length: 20 }).map(() => (
        <Skeleton
          key={uuid()}
          className="h-[500px] w-full min-w-[300px] rounded-2xl bg-secondary max-xs:min-w-full"
        />
      ))}
    </div>
  );
}
