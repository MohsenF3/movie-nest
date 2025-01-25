import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Filters from "./filters";
import Sort from "./sort";

export default function FilterTabs() {
  return (
    <Tabs defaultValue="filters">
      <TabsList className="w-full">
        <TabsTrigger className="flex-1" value="filters">
          Filters
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="sort-by">
          Sort
        </TabsTrigger>
      </TabsList>

      <TabsContent value="filters">
        <Filters />
      </TabsContent>

      <TabsContent value="sort-by">
        <Sort />
      </TabsContent>
    </Tabs>
  );
}
