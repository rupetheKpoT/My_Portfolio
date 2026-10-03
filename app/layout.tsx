import type React from "react";
import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rashmika.maximumeffortlk.site"),
  title: {
    default: "Rashmika Rupasinghe - Software Testing | Data Science | Portfolio",
    template: "%s | Rashmika Portfolio",
  },
  description:
    "IT graduate specializing in Data Science at SLIIT, with experience in software quality testing, data analytics, AI projects, and project management.",
  keywords: [
    "Rashmika Rupasinghe",
    "Software Quality Assurance",
    "Software Testing",
    "Manual Testing",
    "Selenium",
    "Data Science",
    "Machine Learning",
    "AI",
    "Python",
    "Computer Vision",
    "Portfolio",
    "Data Analytics",
  ],
  authors: [{ name: "Rashmika Rupasinghe", url: "https://rashmika.maximumeffortlk.site" }],
  creator: "Rashmika Rupasinghe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rashmika.maximumeffortlk.site",
    siteName: "Rashmika Portfolio",
    title: "Rashmika Rupasinghe - Software Testing & Data Science",
    description:
      "SLIIT IT graduate with skills in manual testing, test case writing, bug reporting, Selenium, data analytics, and machine learning.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rashmika Rupasinghe - Software Testing & Data Science",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rashmika Rupasinghe - Software Testing & Data Science",
    description:
      "IT graduate specializing in Data Science, with software testing experience, analytics projects, and AI solutions.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  generator: "Next.js & AI Data Science Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1A202C" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="description" content="Software quality testing and Data Science portfolio by Rashmika Rupasinghe, an IT graduate from SLIIT." />
        <meta name="keywords" content="Rashmika Rupasinghe, Software Testing, Quality Assurance, Selenium, Data Science, Machine Learning, Python, Portfolio" />
        <meta name="author" content="Rashmika Rupasinghe" />

      </head>
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased bg-gray-900 text-gray-100 overflow-x-hidden`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
