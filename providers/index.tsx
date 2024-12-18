import { SidebarProvider } from "./sidebar-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <SidebarProvider>{children}</SidebarProvider>;
}
