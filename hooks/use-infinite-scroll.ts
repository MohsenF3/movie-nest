import React from "react";
import { useInView } from "react-intersection-observer";

interface UseInfiniteScrollProps<T> {
  fetchData: (page: number) => Promise<T[]>;
  initialData?: T[];
}

export function useInfiniteScroll<T>({
  fetchData,
  initialData = [],
}: UseInfiniteScrollProps<T>) {
  const [data, setData] = React.useState<T[]>(initialData);
  const [page, setPage] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(true);
  const [ref, inView] = useInView();

  const loadMoreData = React.useCallback(async () => {
    if (!hasMore) return;

    const nextPage = page + 1;
    try {
      const fetchedData = await fetchData(nextPage);

      if (fetchedData.length) {
        setPage(nextPage);
        setData((prev) => [...prev, ...fetchedData]);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      setHasMore(false);
    }
  }, [fetchData, page, hasMore]);

  React.useEffect(() => {
    if (inView && hasMore) {
      loadMoreData();
    }
  }, [inView, loadMoreData, hasMore]);

  return { data, hasMore, ref };
}
