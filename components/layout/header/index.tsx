import Logo from "@/components/logo";
import dynamic from "next/dynamic";
import { MobileMenuToggle } from "./mobile-menu-toggle";
import { SearchBox } from "./search-box";

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
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <SearchBox />
          </div>
        </div>
      </nav>

      <div className="container block sm:hidden">
        <SearchBox />
      </div>
    </header>
  );
}
