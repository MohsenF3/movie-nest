import { GenresField } from "./genres-field";
import { LanguageField } from "./language-field";
import { ReleaseDateField } from "./release-date-field";
import { VoteAverageField } from "./vote-average-field";
import { VoteCountField } from "./vote-count-field";

export default function Filters() {
  return (
    <div className="relative space-y-4">
      <GenresField />
      <ReleaseDateField />
      <LanguageField />
      <VoteAverageField />
      <VoteCountField />
    </div>
  );
}
