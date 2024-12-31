import Header from "@/components/layout/header";
import dynamic from "next/dynamic";
import React from "react";
import Footer from "./footer";

const MobileNavbar = dynamic(() => import("./header/mobile-navbar"), {
  ssr: false,
});

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
