import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function useActiveNavigation(href: string): boolean {
  const pathname = usePathname();

  const isActive = useMemo(() => {
    if (pathname === href) {
      return true;
    }
    return pathname.startsWith(href) && pathname[href.length] !== "/";
  }, [pathname, href]);

  return isActive;
}
