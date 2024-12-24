"use client";

import { useSidebar } from "@/providers/sidebar-provider";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";

import Logo from "@/components/logo";
import { genres } from "@/lib/placeholder";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import NavbarLinks from "./navbar-links";

export default function MobileNavbar() {
  const { isSidebarOpen, setValue } = useSidebar();

  return (
    <Sheet
      defaultOpen={isSidebarOpen}
      onOpenChange={setValue}
      open={isSidebarOpen}
    >
      <SheetContent className="space-y-2 overflow-y-auto p-0" side="left">
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
        <AccordionMenu />
      </SheetContent>
    </Sheet>
  );
}

function AccordionMenu() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="genres">
        <AccordionTrigger className="mb-2 rounded-lg px-4 py-3 text-base hover:bg-secondary hover:no-underline data-[state=open]:bg-secondary">
          Genres
        </AccordionTrigger>
        <AccordionContent className="px-6">
          <NavbarLinks className="space-y-2">
            {genres.map((genre) => (
              <SheetClose key={genre.id} asChild>
                <NavbarLinks.Link>{genre.title}</NavbarLinks.Link>
              </SheetClose>
            ))}
          </NavbarLinks>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
