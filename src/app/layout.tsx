import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vohuman Cafe | Pune's Legendary Irani Cafe Since 1978",
  description:
    "Experience the warmth of Pune's most iconic Irani cafe. Serving legendary cheese omelettes, bun maska, and Irani chai since 1978. Where every cup tells a story.",
  keywords: [
    "Vohuman Cafe",
    "Irani Cafe",
    "Pune",
    "Cheese Omelette",
    "Bun Maska",
    "Irani Chai",
    "Parsee Cafe",
    "Pune Food",
    "Heritage Cafe",
    "Since 1978",
  ],
  authors: [{ name: "Vohuman Cafe" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Vohuman Cafe | Pune's Legendary Irani Cafe Since 1978",
    description:
      "Experience the warmth of Pune's most iconic Irani cafe. Serving legendary cheese omelettes, bun maska, and Irani chai since 1978.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vohuman Cafe | Pune's Legendary Irani Cafe Since 1978",
    description:
      "Experience the warmth of Pune's most iconic Irani cafe since 1978.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${playfair.variable} ${cormorant.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
