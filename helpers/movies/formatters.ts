import { MoviesListFiltersFormValues } from "@/components/movies/schema";
import { format } from "date-fns";

// Formats a Date object into a string with the format "yyyy-MM-dd"
export const formatDateToURL = (rawDate: Date) => {
  return format(rawDate, "yyyy-MM-dd");
};

// Encodes key-value pairs for a query string, supporting both strings and dates
export const formatValueForQueryString = (
  key: string,
  value: Date | string,
): string => {
  if (value instanceof Date) {
    return `${encodeURIComponent(key)}=${encodeURIComponent(
      formatDateToURL(value),
    )}`;
  }

  return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
};

export const buildQueryStringFromValues = (
  values: MoviesListFiltersFormValues,
): string => {
  const parts: string[] = [];

  Object.entries(values).forEach(([key, value]) => {
    if (typeof value === "object" && value !== null) {
      if (Array.isArray(value)) {
        // Handle arrays by joining them with a pipe separator
        if (value.length > 0) return parts.push(`${key}=${value.join("|")}`);
      }

      // Handle nested objects by recursively formatting each key-value pair
      Object.entries(value).forEach(([subKey, subValue]) => {
        if (subValue) {
          parts.push(formatValueForQueryString(`${key}.${subKey}`, subValue));
        }
      });

      return;
    }

    // Handle simple key-value pairs
    if (value) {
      parts.push(formatValueForQueryString(key, value));
    }
  });

  // Join all query string parts into a single string
  return parts.join("&");
};
