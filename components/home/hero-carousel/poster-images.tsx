"use client";

import Image from "@/components/Image";
import { AnimatePresence, motion } from "framer-motion";
import { MovieCarousel } from "./index";

interface PosterImagesProps {
  movies: MovieCarousel[];
  active: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function PosterImages({
  movies,
  active,
  onPrev,
  onNext,
}: PosterImagesProps) {
  const isActive = (index: number) => index === active;
  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <AnimatePresence>
      {movies.map((movie, index) => (
        <motion.div
          key={movie.id}
          initial={{
            opacity: 0,
            scale: 0.9,
            z: -100,
            rotate: randomRotateY(),
          }}
          animate={{
            opacity: isActive(index) ? 1 : 0.7,
            scale: isActive(index) ? 1 : 0.95,
            z: isActive(index) ? 0 : -100,
            rotate: isActive(index) ? 0 : randomRotateY(),
            zIndex: isActive(index) ? 999 : movies.length + 2 - index,
            y: isActive(index) ? [0, -80, 0] : 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            z: 100,
            rotate: randomRotateY(),
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          drag={isActive(index) ? "x" : false}
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          onDragEnd={(event, info) => {
            if (info.offset.x > 100) {
              onPrev();
            } else if (info.offset.x < -100) {
              onNext();
            }
          }}
          className="absolute inset-0 origin-bottom cursor-grab"
        >
          <Image
            src={movie.poster_path!}
            alt={movie.title}
            draggable={false}
            className="h-full w-full rounded-xl object-cover object-top"
            fallbackPath="/camera.webp"
          />
        </motion.div>
      ))}
    </AnimatePresence>
  );
}
