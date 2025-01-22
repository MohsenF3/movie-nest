"use client";

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { NavigationMenuDataType } from "@/types/placeholder";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SubMenu from "./sub-menu";

interface MenuItemProps {
  menu: NavigationMenuDataType;
  children: React.ReactNode;
}

export default function MenuItem({ menu, children }: MenuItemProps) {
  const pathname = usePathname();
  const isActive = React.useMemo(
    () => pathname.includes(menu.href),
    [pathname, menu.href],
  );

  // Render submenu
  const renderDropdown = () => (
    <NavigationMenuItem>
      <NavigationMenuTrigger className={cn("gap-2", isActive && "bg-muted")}>
        <menu.icon width={12} height={12} />
        {menu.label}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="flex gap-4 p-4 md:w-[500px] lg:w-[700px]">
        {children}
        <SubMenu items={menu.items!} />
      </NavigationMenuContent>
    </NavigationMenuItem>
  );

  // Render simple link
  const renderLink = () => (
    <NavigationMenuItem asChild>
      <Link
        href={menu.href}
        className={cn(
          "flex items-center gap-2",
          navigationMenuTriggerStyle(),
          isActive && "bg-muted",
        )}
      >
        <menu.icon width={12} height={12} />
        {menu.label}
      </Link>
    </NavigationMenuItem>
  );

  return menu.items && menu.items?.length ? renderDropdown() : renderLink();
}
