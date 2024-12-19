export function formatBirthDate(birthDateString: string): string {
  const birthDate = new Date(birthDateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return birthDate.toLocaleDateString("en-US", options);
}
