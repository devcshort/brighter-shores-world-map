import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brighter Shores World Map",
  description: "An interactible map for the world of Brighter Shores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
