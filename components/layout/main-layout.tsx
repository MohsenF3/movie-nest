import Header from "@/components/layout/header";
import dynamic from "next/dynamic";
import { headers } from "next/headers";
import React from "react";

const MobileNavbar = dynamic(() => import("./header/mobile-navbar"), {
  ssr: false,
});
const IranAccessNotice = dynamic(() => import("../iran-access-notice"));

const Footer = dynamic(() => import("./footer"));

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const country = headers().get("x-vercel-ip-country");

  return (
    <div vaul-drawer-wrapper="" className="bg-background">
      {/* only shown if user is from Iran */}
      {country === "IR" && <IranAccessNotice />}
      <Header />
      <main className="container">{children}</main>
      <Footer />
      <MobileNavbar />
    </div>
  );
}
