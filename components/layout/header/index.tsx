import Logo from "@/components/logo";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { MobileMenuToggle } from "./mobile-menu-toggle";
import SearchBox from "./search-box";
import { ThemeToggle } from "./theme-toggle";

const Navbar = dynamic(() => import("./navbar"));

export default function Header() {
  return (
    <header className="mb-5 space-y-3 border-b py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <MobileMenuToggle />
          <Logo className="mr-8" />
        </div>
        <div className="hidden flex-1 md:block">
          <Navbar />
        </div>
        <div className="flex items-center gap-2 md:flex-[0.5]">
          <Suspense>
            <div className="hidden w-full sm:block">
              <SearchBox />
            </div>
          </Suspense>
          <ThemeToggle />
        </div>
      </nav>

      <Suspense>
        <div className="container block sm:hidden">
          <SearchBox />
        </div>
      </Suspense>
    </header>
  );
}
