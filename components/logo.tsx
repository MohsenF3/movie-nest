import { cn } from "@/lib/utils";
import { MonitorPlay } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

export default function Logo({
  className,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <Link
      href={"/"}
      className={buttonVariants({
        variant: "linkHover",
        className: cn(
          "group flex flex-1 items-center gap-3 !p-0 sm:grow-0",
          className
        ),
      })}
      {...props}
    >
      <MonitorPlay className="scale-150 text-primary" />
      <h5 className="font-extrabold transition-colors duration-200 group-hover:text-primary">
        MovieNest
      </h5>
    </Link>
  );
}
