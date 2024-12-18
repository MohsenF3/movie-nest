"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <Button onClick={handleChangeTheme} variant="outline" size="icon">
      <Sun className="hidden h-5 w-5 animate-fade_in dark:inline" />
      <Moon className="inline h-5 w-5 animate-fade_in dark:hidden" />
    </Button>
  );
}
