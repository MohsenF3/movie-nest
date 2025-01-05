"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

export default function NavigationButton({
  direction,
  onClick,
}: NavigationButtonProps) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;

  return (
    <Button
      onClick={onClick}
      variant="ghost"
      size="icon"
      className="group rounded-full bg-muted"
      aria-label={`${direction} navigation`}
    >
      <Icon className="size-5 transition-transform duration-300 group-hover:rotate-12" />
    </Button>
  );
}
