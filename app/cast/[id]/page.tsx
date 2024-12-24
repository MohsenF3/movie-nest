import Error from "@/components/error";
import { imageURL } from "@/lib/consts";
import { getCastById } from "@/lib/data";
import { formatBirthDate } from "@/lib/formatter";
import { calculateAge, cn } from "@/lib/utils";
import { Cake, User } from "lucide-react";
import { notFound } from "next/navigation";

interface CastPageProps {
  params: {
    id: number;
  };
}

export default async function CastPage({ params }: CastPageProps) {
  const id = params.id;
  const { status, message, type, cast } = await getCastById(id);

  // check if cast exists
  if (status === 404 || !cast) {
    notFound();
  }

  // show message if request failed
  if (type === "error" && status === 500) {
    return <Error message={message} />;
  }

  const hasImage = cast.profile_path !== null;
  const imagePath = hasImage ? `${imageURL}${cast.profile_path}` : "/user.webp";
  const birthDate = formatBirthDate(cast.birthday);
  const age = calculateAge(cast.birthday);

  return (
    <div className="mx-auto my-10 min-h-[80dvh] max-w-screen-md space-y-9">
      <div className="flex flex-col gap-8 md:flex-row">
        <img
          src={imagePath}
          alt={cast.name}
          className={cn(
            "w-80 rounded-lg object-cover",
            hasImage ? "h-full" : "h-auto dark:invert",
          )}
        />

        <div className="flex-1 space-y-5">
          <h2>{cast.name}</h2>

          <Details Icon={Cake} title="Birthday:">
            {birthDate} ({age} age now)
          </Details>
          <Details Icon={User} title="Gender:">
            {cast.gender === 1 ? "Woman" : "Male"}
          </Details>
          <Details Icon={Cake} title="Place of Birth:">
            {cast.place_of_birth ? cast.place_of_birth : "No information"}
          </Details>
        </div>
      </div>

      <CastBiography biography={cast.biography} />
    </div>
  );
}

function CastBiography({ biography }: { biography: string | undefined }) {
  return (
    <div className="card-section">
      <h3>Biography</h3>

      <p className="text-sm leading-relaxed tracking-wide text-muted-foreground md:text-base">
        {biography ? biography : "No biography available."}
      </p>
    </div>
  );
}

interface DetailsProps extends React.PropsWithChildren {
  title: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

function Details({ Icon, title, children }: DetailsProps) {
  return (
    <p className="flex flex-wrap items-center gap-3 text-sm">
      <Icon className="h-5 w-5" />
      {title}
      <span className="font-normal text-muted-foreground">{children}</span>
    </p>
  );
}
