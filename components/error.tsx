"use client";

import { cn } from "@/lib/utils";
import errorImage from "@/public/error.webp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

interface ErrorProps extends React.ComponentProps<"div"> {
  message?: string;
}

export default function Error({ message, className, ...props }: ErrorProps) {
  const { refresh } = useRouter();

  return (
    <div
      className={cn(
        "flex min-h-[calc(100vh-11.5rem)] w-full flex-col items-center justify-center gap-2",
        className,
      )}
      {...props}
    >
      <div className="h-[150px] w-[200px]">
        <Image src={errorImage} alt="error image" placeholder="blur" />
      </div>

      <p className="text-muted-foreground">
        {message || "Something went wrong. Please try again later."}
      </p>

      <Button className="" onClick={() => refresh()}>
        Try again
      </Button>
    </div>
  );
}
