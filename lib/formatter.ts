import { MovieListType } from "@/types/movie";

export function formatBirthDate(birthDateString: string): string {
  const birthDate = new Date(birthDateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return birthDate.toLocaleDateString("en-US", options);
}

export const formatListType = (listType: MovieListType): string => {
  return listType.replace("_", " ");
};
