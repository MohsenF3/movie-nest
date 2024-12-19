import { imageURL } from "@/lib/consts";
import { CastMember } from "@/types/movie";
import { FocusCards } from "../ui/focus-cards";

interface CastSectionProps {
  casts: CastMember[];
}

export default function CastSection({ casts }: CastSectionProps) {
  const cards = casts.map((cast) => ({
    id: cast.id,
    name: cast.name,
    imagePath: cast.profile_path ? `${imageURL}${cast.profile_path}` : null,
  }));

  return (
    <section className="card-section">
      <h3>Cast</h3>
      <FocusCards cards={cards} />
    </section>
  );
}
