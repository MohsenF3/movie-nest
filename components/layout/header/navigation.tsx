"use client";

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NAVIGATION_MENU_DATA } from "@/lib/placeholder";
import MenuItem from "./menu-item";

interface NavigationProps {
  children: React.ReactNode;
}

export default function Navigation({ children }: NavigationProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {NAVIGATION_MENU_DATA.map((menu) => (
          <MenuItem key={menu.label} menu={menu} children={children} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
