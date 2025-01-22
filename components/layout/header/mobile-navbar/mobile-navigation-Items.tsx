import { Accordion } from "@/components/ui/accordion";
import { NAVIGATION_MENU_DATA } from "@/lib/placeholder";
import MobileNavigationItem from "./mobile-navigation-Item";

export default function MobileNavigationItems() {
  return (
    <div className="space-y-4 border-t pt-4">
      <Accordion type="multiple">
        <nav className="flex flex-col space-y-2">
          {NAVIGATION_MENU_DATA.map((item) => {
            return <MobileNavigationItem key={item.href} {...item} />;
          })}
        </nav>
      </Accordion>
    </div>
  );
}
