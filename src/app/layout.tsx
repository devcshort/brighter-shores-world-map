import type { Metadata } from "next";
import "./globals.css";
import { APP_DESCRIPTION, APP_TITLE, BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: APP_TITLE,
  description: APP_DESCRIPTION,
  openGraph: {
    title: APP_TITLE,
    siteName: APP_TITLE,
    description: APP_DESCRIPTION,
    url: BASE_URL,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/ogworldmap.png`,
        width: 1200,
        height: 630,
      },
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
