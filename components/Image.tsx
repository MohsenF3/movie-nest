"use client";

import React from "react";

interface ImageProps extends React.ComponentProps<"img"> {
  fallbackPath: string;
}

export default function Image({
  className,
  fallbackPath,
  ...props
}: ImageProps) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <img
      {...props}
      loading="lazy"
      className={className}
      onError={(e) => {
        if (!hasError) {
          setHasError(true);
          e.currentTarget.src = fallbackPath;
        }
      }}
    />
  );
}
