"use client";

import { motion } from "framer-motion";
import { MovieCarousel } from "./index";

interface MovieContentProps {
  movie: MovieCarousel;
}

export default function MovieContent({ movie }: MovieContentProps) {
  return (
    <>
      <h3>{movie.title}</h3>
      <span className="text-sm text-muted-foreground">
        {movie.release_date}
      </span>
      <motion.h6 className="mt-8 text-popover-foreground/80">
        {movie.overview.split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
              delay: 0.02 * index,
            }}
            className="inline-block"
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h6>
    </>
  );
}
