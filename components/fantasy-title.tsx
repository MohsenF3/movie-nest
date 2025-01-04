import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface FantasyTitleProps {
  title: string;
  href: string;
  linkText?: string;
  hasLine?: boolean;
}

export default function FantasyTitle({
  title,
  href,
  linkText,
  hasLine = true,
}: FantasyTitleProps) {
  return (
    <>
      <div className="absolute left-0 top-0 h-8 w-1 rounded bg-primary lg:h-10" />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="pl-3">{title}</h2>

        <Link
          href={href}
          className={buttonVariants({
            variant: "default",
            className: "group gap-2",
          })}
        >
          {linkText ?? "View All"}
          <ArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
      {hasLine && <hr />}
    </>
  );
}
