
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Layout/header";
import Footer from "./components/Layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "pranta's portfolio",
  description: "Responsive portfolio website",
  openGraph: {
    url: "https://protfolio-ivory-iota.vercel.app",
    type: "website",
    title: "pranta's portfolio",
    description: "Responsive portfolio website",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/582cadc9-5017-4786-907f-e6729f98a5e4.png?token=TB-ZdFFbDzseQCS1eYu2FGCjDWuXuKD8KafATgsciQ0&height=887&width=937&expires=33278421839",
        width: 937,
        height: 887,
        alt: "Pranta's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "pranta's portfolio",
    description: "Responsive portfolio website",
    images: [
      "https://opengraph.b-cdn.net/production/images/582cadc9-5017-4786-907f-e6729f98a5e4.png?token=TB-ZdFFbDzseQCS1eYu2FGCjDWuXuKD8KafATgsciQ0&height=887&width=937&expires=33278421839",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
