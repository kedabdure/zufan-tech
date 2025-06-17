import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zufan Tech | Innovative Software & Technology Solutions",
  description: "Zufan Tech delivers cutting-edge software development and technology solutions to empower businesses worldwide. Partner with us to drive innovation and achieve your goals.",
  keywords: [
    "software development",
    "technology solutions",
    "digital transformation",
    "web development",
    "mobile apps",
    "cloud solutions",
    "tech consulting",
    "Zufan Tech",
  ],
  authors: [{ name: "Zufan Tech Team", url: "https://zufantech.com" }],
  creator: "Zufan Tech",
  publisher: "Zufan Tech",
  alternates: {
    canonical: "https://zufantech.com",
    languages: {
      "en-US": "https://zufantech.com/en",
    },
  },
  openGraph: {
    title: "Zufan Tech | Innovative Software & Technology Solutions",
    description: "Discover Zufan Tech's expertise in software development and technology solutions designed to accelerate your business growth and innovation.",
    url: "https://zufantech.com",
    siteName: "Zufan Tech",
    images: [
      {
        url: "https://zufantech.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zufan Tech - Empowering Businesses with Innovative Tech Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zufan Tech | Innovative Software & Technology Solutions",
    description: "Transform your business with Zufan Tech's expert software development and technology solutions. Let's build the future together.",
    images: ["https://zufantech.com/og-image.png"],
    creator: "@ZufanTech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
