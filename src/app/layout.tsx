import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Sidebar } from "@/components/layout/Sidebar";

import { Instrument_Sans } from "next/font/google";

const instrumentSans = Instrument_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muninn Tech UI",
  description: "A modern UI component library for building web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.className} antialiased min-h-screen grid grid-rows-[auto,1fr,auto]`}
      >
        <Header />
        <main className="w-full">
          <div className="flex min-h-[calc(100vh-128px)]">
            {/* Sidebar + Content */}
            <Sidebar />
            <div className="flex-1 p-6">{children}</div>
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
