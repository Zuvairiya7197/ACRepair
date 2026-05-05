import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "AirSwift AC Repair | 24/7 Same Day AC Service",
  description:
    "Premium 24/7 AC repair, installation, gas refill, and maintenance with certified technicians and same-day doorstep service.",
  keywords: [
    "AC repair",
    "same day AC service",
    "AC gas refill",
    "AC installation",
    "24/7 AC technician"
  ],
  openGraph: {
    title: "Fast AC Repair at Your Doorstep",
    description: "24/7 Service | Expert Technicians | Same Day Repair",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: "AirSwift AC Repair",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    telephone: "+1-555-014-2487",
    priceRange: "$$",
    openingHours: "Mo-Su 00:00-23:59",
    areaServed: "Local service area",
    serviceType: [
      "AC Repair",
      "AC Installation",
      "AC Gas Refill",
      "AC Maintenance"
    ],
    url: "https://airswift.example.com"
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
