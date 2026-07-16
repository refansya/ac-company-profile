import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

import { SITE } from "@/config/site";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: SITE.title,
    template: `%s | ${SITE.title}`,
  },

  description: SITE.description,

  keywords: [
    "Service AC",
    "Air Conditioning",
    "HVAC",
    "Electronic Solutions",
    "Project.id Services",
  ],

  openGraph: {
    title: SITE.title,

    description: SITE.description,

    url: SITE.url,

    locale: SITE.locale,

    siteName: SITE.title,

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={geist.className}>
        {children}
      </body>
    </html>
  );
}