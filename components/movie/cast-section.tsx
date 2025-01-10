import { CastMember } from "@/types/movie";
import { Film, UserCircle } from "lucide-react";
import Link from "next/link";
import CustomImage from "../ui/custom-image";

interface CastSectionProps {
  casts: CastMember[];
}

export default function CastSection({ casts }: CastSectionProps) {
  const castsData = casts.map(({ id, name, character, profile_path }) => ({
    id: id,
    name: name,
    character,
    profile_path: profile_path ?? null,
  }));

  return (
    <section className="card-section">
      <h3>Cast</h3>

      <div className="movie-grid-list">
        {castsData.map((cast) => (
          <CastCard key={cast.id} {...cast} />
        ))}
      </div>
    </section>
  );
}

type CastCardProps = Pick<
  CastMember,
  "id" | "name" | "profile_path" | "character"
>;

function CastCard({ id, name, profile_path, character }: CastCardProps) {
  return (
    <Link
      href={`/cast/${id}`}
      className="group space-y-4 rounded-lg border border-transparent transition-all duration-300 hover:border-primary"
    >
      <CustomImage
        src={profile_path ?? "/user.webp"}
        alt={name}
        containerClassName="w-full h-[400px] rounded-lg"
        className="saturate-100 transition-all duration-300 hover:object-top group-hover:saturate-100 md:saturate-0"
        fallbackPath="/user.webp"
        sizes="(max-width: 300px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      <div className="space-y-2 px-2 pb-5 pt-1">
        <CastCardDetails title="Character :" Icon={Film}>
          {character}
        </CastCardDetails>
        <CastCardDetails title="Name :" Icon={UserCircle}>
          {name}
        </CastCardDetails>
      </div>
    </Link>
  );
}

interface CastCardDetailsProps extends React.PropsWithChildren {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

function CastCardDetails({ Icon, title, children }: CastCardDetailsProps) {
  return (
    <p className="flex flex-wrap items-center gap-2 text-sm">
      <Icon className="h-5 w-5 transition-all duration-300 group-hover:text-primary" />
      {title}
      <span className="font-normal text-muted-foreground">{children}</span>
    </p>
  );
}
