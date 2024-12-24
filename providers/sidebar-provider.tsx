"use client";

import React from "react";

interface SidebarContext {
  isSidebarOpen: boolean;
  setValue: (value: boolean) => void;
}

const SidebarContext = React.createContext<SidebarContext | undefined>(
  undefined,
);

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider.");
  }
  return context;
}

interface SidebarProviderProps {
  children: React.ReactNode;
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isSidebarOpen, setSidebarOpen] = React.useState(false);

  const setValue = (value: boolean) => setSidebarOpen(value);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setValue }}>
      {children}
    </SidebarContext.Provider>
  );
}
