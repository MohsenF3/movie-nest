import { cn } from "@/lib/utils";
import errorImage from "@/public/error.webp";
import Image from "next/image";
import React from "react";

interface ErrorProps extends React.ComponentProps<"div"> {
  message?: string;
}

export default function Error({ message, className, ...props }: ErrorProps) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-2",
        className,
      )}
      {...props}
    >
      <div className="h-[150px] w-[200px]">
        <Image src={errorImage} alt="error image" />
      </div>

      <p className="text-muted-foreground">
        {message || "Something went wrong. Please try again later."}
      </p>
    </div>
  );
}
