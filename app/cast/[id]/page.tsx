import Error from "@/components/error";
import Image from "@/components/Image";
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

export async function generateMetadata({ params }: CastPageProps) {
  const id = params.id;
  const { status, cast } = await getCastById(id);
  if (status === 404 || !cast) {
    return {
      title: "Cast not found",
    };
  }
  return {
    title: cast.name,
    description: cast.biography,
    openGraph: {
      images: [
        {
          url: `${imageURL}${cast.profile_path}`,
          width: 1200,
          height: 630,
          alt: cast.name,
        },
      ],
    },
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
      <div
        className="relative flex flex-col gap-8 overflow-hidden rounded-lg border bg-cover bg-center bg-no-repeat p-5 md:flex-row md:px-10 md:pb-48"
        style={{
          backgroundImage: `url(${imagePath})`,
        }}
      >
        <div className="absolute inset-0 h-full w-full bg-popover/80" />

        <Image
          src={imagePath}
          alt={cast.name}
          className={cn("z-10 h-full w-80 rounded-lg object-cover")}
          fallbackPath="/user.webp"
        />

        <div className="z-10 flex-1 space-y-5">
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
