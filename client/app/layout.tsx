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

    images: [
      {
        url: COMPANY.ogImage,
        width: 1200,
        height: 630,
        alt: `${COMPANY.legalName} - Service AC Makassar`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [COMPANY.ogImage],
  },
  icons: {
    icon: "/logo/logomain.svg",
    shortcut: "/logo/logomain.svg",
    apple: "/logo/logomain.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={geist.className}>{children}</body>
    </html>
  );
}
