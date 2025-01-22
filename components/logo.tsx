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
        className: cn("group flex items-center gap-3 !p-0", className),
      })}
      {...props}
    >
      <MonitorPlay className="scale-150 text-primary transition-transform duration-300 group-hover:-rotate-12" />
      <h5 className="font-extrabold transition-colors duration-300 group-hover:text-primary">
        MovieNest
      </h5>
    </Link>
  );
}
