"use client";

import { cn } from "@/lib/utils";
import Image, { ImageProps, ImageLoaderProps } from "next/image";
import React from "react";

const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";

const POSTER_WIDTHS = [92, 154, 185, 342, 500, 780];
const PROFILE_WIDTHS = [45, 185];

function tmdbLoader(type: "poster" | "profile") {
  return function loader({ src, width }: ImageLoaderProps) {
    if (type === "profile") {
      const bucket = PROFILE_WIDTHS.find((w) => w >= width);
      const size = bucket ? `w${bucket}` : width <= 632 ? "h632" : "original";
      return `${TMDB_IMAGE_BASE}/${size}${src}`;
    }

    const bucket = POSTER_WIDTHS.find((w) => w >= width);
    const size = bucket ? `w${bucket}` : "original";
    return `${TMDB_IMAGE_BASE}/${size}${src}`;
  };
}

interface CustomImageProps extends ImageProps {
  fallbackPath: string;
  containerClassName?: string;
  type?: "poster" | "profile";
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#27272a" offset="20%" />
      <stop stop-color="#3f3f46" offset="50%" />
      <stop stop-color="#27272a" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#27272a" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.2s" repeatCount="indefinite" />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const shimmerDataURL = `data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`;

export default function CustomImage({
  className,
  containerClassName,
  fallbackPath,
  type = "poster",
  src,
  alt = "",
  ...props
}: CustomImageProps) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {hasError ? (
        <Image
          src={fallbackPath}
          alt={alt}
          fill
          className={cn("object-cover", className)}
          {...props}
        />
      ) : (
        <Image
          loader={tmdbLoader(type)}
          src={src ?? ""}
          alt={alt}
          fill
          placeholder="blur"
          blurDataURL={shimmerDataURL}
          className={cn("object-cover", className)}
          onError={() => setHasError(true)}
          {...props}
        />
      )}
    </div>
  );
}
