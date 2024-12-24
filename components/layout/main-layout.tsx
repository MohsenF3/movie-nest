import Header from "@/components/layout/header";
import React from "react";
import Footer from "./footer";
import MobileNavbar from "./header/mobile-navbar";

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
