"use client";

import { useSidebar } from "@/providers/sidebar-provider";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";

import Logo from "@/components/logo";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import MobileNavigationItems from "./mobile-navigation-Items";

export default function MobileNavbar() {
  const { isSidebarOpen, setValue } = useSidebar();

  return (
    <Drawer
      defaultOpen={isSidebarOpen}
      onOpenChange={setValue}
      open={isSidebarOpen}
    >
      <DrawerContent className="block min-h-[70%] space-y-2 overflow-y-auto p-0 md:hidden">
        <VisuallyHidden asChild>
          <DrawerTitle>Navbar links</DrawerTitle>
        </VisuallyHidden>

        <VisuallyHidden asChild>
          <DrawerDescription>This is navbar links</DrawerDescription>
        </VisuallyHidden>

        <DrawerClose asChild>
          <Logo className="mx-4" />
        </DrawerClose>

        <MobileNavigationItems />
      </DrawerContent>
    </Drawer>
  );
}
