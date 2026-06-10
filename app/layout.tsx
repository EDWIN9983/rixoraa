import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RIXORAA | Website Design, Branding & Digital Marketing",
  description:
    "RIXORAA creates professional websites, branding, social media setup and digital marketing solutions for growing businesses.",

  keywords: [
    "Website Design",
    "Web Development",
    "Digital Marketing",
    "Branding",
    "Social Media Setup",
    "Business Website",
    "RIXORAA",
  ],

  openGraph: {
    title: "RIXORAA | Build. Brand. Grow.",
    description:
      "Professional websites, branding and digital solutions for modern businesses.",
    url: "https://rixoraa.com",
    siteName: "RIXORAA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RIXORAA",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/Rixoraalogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <GoogleAnalytics />

        {children}
      </body>
    </html>
  );
}