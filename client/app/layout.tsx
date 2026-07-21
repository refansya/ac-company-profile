import type { Metadata } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

import { SITE } from "@/config/site";
import { COMPANY } from "@/constants/company";

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
  keywords: COMPANY.seo.keywords,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: SITE.title,

    description: SITE.description,

    url: SITE.url,

    locale: SITE.locale,

    siteName: SITE.title,

    type: "website",
  },
  twitter: {
    card: "summary",
    title: SITE.title,
    description: SITE.description,
  },
  icons: { icon: "/favicon.ico" },
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
