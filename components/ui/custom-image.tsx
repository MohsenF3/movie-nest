"use client";

import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React from "react";

interface CustomImageProps extends ImageProps {
  fallbackPath: string;
  containerClassName?: string;
}

function CustomLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  width = 780;
  return `https://image.tmdb.org/t/p/w${width}${src}`;
}

export default function CustomImage({
  className,
  containerClassName,
  fallbackPath,
  src,
  alt = "",
  ...props
}: CustomImageProps) {
  const [isLoading, setLoading] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <Image
        loader={CustomLoader}
        src={src}
        alt={alt}
        fill
        className={cn(
          "object-cover",
          isLoading ? "scale-110 blur-xl" : "scale-100 blur-0",
          className,
        )}
        onError={(e) => {
          if (!hasError) {
            setHasError(true);
            e.currentTarget.src = fallbackPath;
          }
        }}
        onLoad={() => setLoading(false)}
        {...props}
      />
    </div>
  );
}
