import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface NavbarLinksProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
}

const NavbarLinks = ({ className, children, ...props }: NavbarLinksProps) => {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
};

const NavbarLink = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, href, children, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      href={href || "/"}
      className={cn(
        "block w-full select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
      {...props}
    >
      <p className="text-sm font-medium leading-none">{children}</p>
    </Link>
  );
});

NavbarLink.displayName = "NavbarLink";

NavbarLinks.Link = NavbarLink;

export default NavbarLinks;
