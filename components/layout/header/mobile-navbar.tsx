"use client";

import { useSidebar } from "@/providers/sidebar-provider";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";

import Logo from "@/components/logo";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";

export default function MobileNavbar() {
  const { isSidebarOpen, setValue } = useSidebar();

  return (
    <Sheet
      defaultOpen={isSidebarOpen}
      onOpenChange={setValue}
      open={isSidebarOpen}
    >
      <SheetContent
        className="block space-y-2 overflow-y-auto p-0 md:hidden"
        side="left"
      >
        <VisuallyHidden asChild>
          <SheetTitle>Navbar links</SheetTitle>
        </VisuallyHidden>

        <VisuallyHidden asChild>
          <SheetDescription>This is navbar links</SheetDescription>
        </VisuallyHidden>

        <SheetClose asChild>
          <Logo className="mx-4" />
        </SheetClose>

        <SheetClose asChild>
          <Link
            href="/movies"
            className="block cursor-pointer rounded-lg px-4 py-3 hover:bg-secondary"
          >
            Movies
          </Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
