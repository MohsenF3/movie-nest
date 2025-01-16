import { formatListType } from "@/lib/formatter";
import { VALID_LIST_TYPES } from "@/lib/placeholder";
import { v4 as uuid } from "uuid";
import MovieSection from "../movie-section";

export default function MovieSections() {
  return (
    <div className="space-y-20 py-20">
      {VALID_LIST_TYPES.map((type) => {
        const listTypeTitle = formatListType(type);

        return (
          <MovieSection key={uuid()} title={listTypeTitle} target={type} />
        );
      })}
    </div>
  );
}
