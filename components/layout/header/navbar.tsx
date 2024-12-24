"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { allGenres } from "@/lib/placeholder";
import { v4 as uuid } from "uuid";
import NavbarLinks from "./navbar-links";

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/movies" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Movies
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Genres</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavbarLinks className="grid w-[320px] gap-3 p-4 md:w-[320px] md:grid-cols-2">
              {allGenres.map((genre) => (
                <NavigationMenuLink key={uuid()} asChild>
                  <NavbarLinks.Link href={genre.href}>
                    {genre.title}
                  </NavbarLinks.Link>
                </NavigationMenuLink>
              ))}
            </NavbarLinks>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
