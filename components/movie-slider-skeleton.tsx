import { v4 as uuid } from "uuid";
import { Skeleton } from "./ui/skeleton";

export default function MovieSliderSkeleton() {
  return (
    <div className="flex gap-6 overflow-x-auto">
      {Array.from({ length: 4 }).map((_, index) => (
        <Skeleton
          key={uuid()}
          className="h-[500px] w-full min-w-[300px] rounded-2xl bg-secondary max-xs:min-w-full"
        />
      ))}
    </div>
  );
}
