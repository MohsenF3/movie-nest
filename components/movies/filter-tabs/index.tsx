import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Filters from "./filters";
import Sort from "./sort";

export default function FilterTabs() {
  return (
    <Tabs defaultValue="filters">
      <TabsList>
        <TabsTrigger value="filters">Filters</TabsTrigger>
        <TabsTrigger value="sort-by">Sort</TabsTrigger>
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
