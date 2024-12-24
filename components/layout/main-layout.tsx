import Header from "@/components/layout/header";
import dynamic from "next/dynamic";
import React from "react";

const MobileNavbar = dynamic(
  () => import("@/components/layout/header/mobile-navbar")
);

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <MobileNavbar />
    </>
  );
}