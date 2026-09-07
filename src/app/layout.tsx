import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { publicEnv } from "@config/env.public";
import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(publicEnv.NEXT_PUBLIC_SITE_URL),
  title: {
    default: "HRX", // TODO: replace with the real property/site name
    template: "%s | HRX",
  },
  description: "TODO: replace with the real site description",
  openGraph: {
    title: "HRX",
    description: "TODO: replace with the real site description",
    siteName: "HRX",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
