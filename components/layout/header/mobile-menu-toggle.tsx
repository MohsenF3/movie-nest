"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/providers/sidebar-provider";
import { MenuIcon } from "lucide-react";

export function MobileMenuToggle() {
  const { setValue } = useSidebar();

  return (
    <Button
      onClick={() => setValue(true)}
      variant="ghost"
      size="icon"
      className="inline-flex md:hidden"
      aria-label="Toggle menu"
    >
      <MenuIcon className="h-4 w-4" />
    </Button>
  );
}
