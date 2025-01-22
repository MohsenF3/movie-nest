import { LucideProps } from "lucide-react";
import React from "react";

export type NavigationMenuDataType = {
  label: string;
  href: string;
  icon: React.ComponentType<LucideProps>;
  items?: {
    label: string;
    description: string;
    href: string;
    icon: React.ComponentType<LucideProps>;
  }[];
};
