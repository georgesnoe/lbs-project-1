import type { Metadata } from "next";
import "./globals.css";
import { googleSansText } from "./lib/fonts";

export const metadata: Metadata = {
  title: "EventSpace",
  description: "Une application web pour réserver des places pour des événements",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${googleSansText.className} font-medium antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
