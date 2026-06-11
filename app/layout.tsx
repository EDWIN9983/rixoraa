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
  metadataBase: new URL("https://rixoraa.com"),

  title: {
    default: "RIXORAA | Website Design, Branding & Digital Marketing",
    template: "%s | RIXORAA",
  },

  description:
    "RIXORAA helps businesses grow online with professional websites, branding, social media setup and digital marketing solutions.",

  keywords: [
    "RIXORAA",
    "RIXORAA.COM",
    "Website Design",
    "Web Development",
    "Digital Marketing",
    "Branding",
    "Logo Design",
    "Social Media Setup",
    "Facebook Page Creation",
    "Instagram Business Setup",
    "Business Website",
    "Landing Page Design",
  ],

  authors: [{ name: "RIXORAA", url: "https://rixoraa.com" }],
  creator: "RIXORAA",
  publisher: "RIXORAA",

  alternates: {
    canonical: "https://rixoraa.com",
  },

  openGraph: {
    title: "RIXORAA | Build. Brand. Grow.",
    description:
      "Professional websites, branding, social media setup and digital marketing solutions for modern businesses.",
    url: "https://rixoraa.com",
    siteName: "RIXORAA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RIXORAA - Build. Brand. Grow.",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "RIXORAA | Website Design & Digital Marketing",
    description:
      "Build your online presence with RIXORAA websites, branding and digital marketing solutions.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/Rixoraalogo.png",
    shortcut: "/Rixoraalogo.png",
    apple: "/Rixoraalogo.png",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RIXORAA",
    alternateName: "RIXORAA.COM",
    url: "https://rixoraa.com",
    logo: "https://rixoraa.com/Rixoraalogo.png",
    email: "info@rixoraa.com",
    slogan: "Build. Brand. Grow.",
    sameAs: [
      "https://www.facebook.com/share/1aQJv484PB/?mibextid=wwXIfr",
      "https://t.me/info_rixoraa",
    ],
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <GoogleAnalytics />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {children}
      </body>
    </html>
  );
}