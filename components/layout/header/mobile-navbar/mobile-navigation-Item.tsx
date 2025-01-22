"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { activeNavigationLink, cn } from "@/lib/utils";
import { useSidebar } from "@/providers/sidebar-provider";
import { NavigationMenuDataType } from "@/types/placeholder";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavigationItem({
  href,
  icon: Icon,
  label,
  items,
}: NavigationMenuDataType) {
  const { setValue } = useSidebar();
  const pathname = usePathname();

  const isActive = activeNavigationLink(pathname, href);

  // Render accordion
  const renderAccordion = () => (
    <div>
      <AccordionItem value={href} className="border-b-0">
        <AccordionTrigger className="rounded-lg px-3 py-2">
          <div className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
            <Icon width={16} height={16} />
            {label}
          </div>
        </AccordionTrigger>

        <AccordionContent
          className="ml-3 space-y-1 px-3 pb-0"
          data-state={"open"}
        >
          {items?.map((item) => (
            <MobileNavigationItem {...item} key={item.label} />
          ))}
        </AccordionContent>
      </AccordionItem>
    </div>
  );

  // Render simple link
  const renderLink = () => (
    <Link
      href={href}
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm",
        isActive
          ? "bg-muted font-bold"
          : "font-normal text-muted-foreground hover:bg-muted",
      )}
      key={href}
      onClick={() => setValue(false)}
    >
      <Icon width={16} height={16} />
      {label}
    </Link>
  );

  return items && items?.length ? renderAccordion() : renderLink();
}
