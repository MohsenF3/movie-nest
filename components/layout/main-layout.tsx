import Header from "@/components/layout/header";
import dynamic from "next/dynamic";
import React from "react";

const MobileNavbar = dynamic(() => import("./header/mobile-navbar"), {
  ssr: false,
});

const Footer = dynamic(() => import("./footer"));

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
      <Footer />
      <MobileNavbar />
    </>
  );
}
