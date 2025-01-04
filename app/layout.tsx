import MainLayout from "@/components/layout/main-layout";
import Providers from "@/providers";
import { merriweather } from "@/public/fonts";
import type { Metadata } from "next";
import "../components/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "MovieNest - Where Every Movie Has a Story",
    template: `%s - MovieNest`,
  },
  description:
    "Discover, explore, and dive into the world of movies with MovieNest. From blockbusters to hidden gems, find your next favorite film and uncover the stories behind the screen. Your ultimate destination for all things cinema.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${merriweather.className} antialiased`}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
