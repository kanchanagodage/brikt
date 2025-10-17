import type { Metadata } from "next";
import "./globals.css";
import { NavigationMenuDemo } from "@/components/menu";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FooterCTA from "@/components/footerCTA";

export const metadata: Metadata = {
  title: "Brikt — Design. Technology. Growth.",
  description: "Your partner in design, technology, and digital growth.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    viewportFit: "cover", // ✅ removes white bars on mobile
  },
  themeColor: "#000000", // ✅ makes browser bars black
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        {/* ✅ App-like fullscreen on mobile */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <header>
        <Navbar/>
        </header>      
        <body className="min-h-screen w-full bg-black text-white antialiased">
        {children}
      </body>
      <FooterCTA/>
      <Footer/>
    </html>
  );
}
