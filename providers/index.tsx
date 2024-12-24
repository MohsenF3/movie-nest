import { SidebarProvider } from "./sidebar-provider";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  );
}
