import type React from "react";
import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: {
    default: "Rashmika Rupasinghe - Data Scientist | AI/ML | Portfolio",
    template: "%s | Rashmika Portfolio",
  },
  description:
    "Data Science student specializing in machine learning, computer vision, and predictive modeling. Passionate about turning data into actionable insights.",
  keywords: [
    "Rashmika Rupasinghe",
    "Data Science",
    "Machine Learning",
    "AI",
    "Python",
    "Computer Vision",
    "Portfolio",
    "Data Analytics",
  ],
  authors: [{ name: "Rashmika Rupasinghe", url: "https://rashmika-portfolio.com" }],
  creator: "Rashmika Rupasinghe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rashmika-portfolio.com",
    siteName: "Rashmika Portfolio",
    title: "Rashmika Rupasinghe - Data Scientist & AI Enthusiast",
    description:
      "Data Science student at SLIIT with expertise in machine learning, computer vision, and AI-powered solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rashmika Rupasinghe - Data Scientist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rashmika Rupasinghe - Data Scientist & AI Specialist",
    description:
      "Data Science student at SLIIT specializing in machine learning, computer vision, and AI solutions.",
    images: ["/og-image.jpg"],
    creator: "@rashmika_data",
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
        <meta name="description" content="Data Science student and AI/ML enthusiast portfolio by Rashmika Rupasinghe." />
        <meta name="keywords" content="Rashmika Rupasinghe, Data Science, Machine Learning, AI, Python, Portfolio" />
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