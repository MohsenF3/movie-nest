"use client";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { activeNavigationLink, cn } from "@/lib/utils";
import { NavigationMenuDataType } from "@/types/placeholder";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SubMenuProps {
  items: NavigationMenuDataType["items"];
}

export default function SubMenu({ items }: SubMenuProps) {
  const pathname = usePathname();

  return (
    <ul className="grid w-2/3 gap-3 lg:grid-cols-2">
      {items?.map(({ href, icon: SubIcon, label, description }) => {
        const isActive = activeNavigationLink(pathname, href);
        return (
          <li key={label}>
            <NavigationMenuLink asChild>
              <Link
                href={href}
                className={cn(
                  "block h-full cursor-pointer select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                  isActive && "bg-muted",
                )}
              >
                <div className="flex items-center gap-2">
                  <SubIcon width={12} height={12} />
                  <span className="text-sm font-medium leading-none">
                    {label}
                  </span>
                </div>
                <p className="line-clamp-3 text-xs leading-snug text-muted-foreground">
                  {description}
                </p>
              </Link>
            </NavigationMenuLink>
          </li>
        );
      })}
    </ul>
  );
}
