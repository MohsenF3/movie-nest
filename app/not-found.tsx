import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import NotFoundImage from "../public/not-found.webp";

export default function NotFound() {
  return (
    <div className="flex h-full min-h-[calc(100vh-11.5rem)] w-full flex-col items-center justify-center gap-5">
      <Image
        src={NotFoundImage}
        alt="not-found image"
        width={350}
        height={350}
        priority
      />

      <h2>404 Not Found</h2>
      <p className="text-center text-xl font-extrabold md:text-3xl">
        Whoops! That page doesn’t exist.
      </p>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "default", className: "font-semibold" }),
        )}
      >
        Return Home
      </Link>
    </div>
  );
}
