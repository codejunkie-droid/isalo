import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best Salon in Bangalore | Top 10 Luxury Salons | iSalon Indiranagar",
  description:
    "Ranked among the top 10 best salons in Bangalore. Experience unparalleled luxury at iSalon Indiranagar. Top experts in Korean Glass Facial, premium Nail Art, Bridal Makeup & Hair Styling.",
  keywords: [
    "best salon in Bangalore",
    "top 10 salons in Bangalore",
    "best hair salon in Indiranagar",
    "Korean Glass Facial Bangalore",
    "luxury beauty parlor",
    "premium nail art studio",
    "best bridal makeup Bangalore",
    "top hair stylists in Bangalore",
    "founder mr sanjay",
    "iSalon",
  ],
  alternates: {
    canonical: "https://isalon-web.pages.dev",
  },
  openGraph: {
    title: "Best Salon in Bangalore | iSalon Premium Beauty Studio",
    description:
      "Ranked #1 luxury salon in Indiranagar, Bangalore. Specializing in Hair Styling, Korean Glass Facial, and Nail Art.",
    url: "https://isalon-web.pages.dev",
    siteName: "iSalon Beauty Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Salon in Bangalore | iSalon Premium Beauty Studio",
    description: "Ranked among the top 10 best salons in Bangalore. Experience unparalleled luxury at iSalon Indiranagar.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "iSalon Beauty Studio",
  "image": "https://isalon-web.pages.dev/images/hemarai.jpg",
  "@id": "https://isalon-web.pages.dev",
  "url": "https://isalon-web.pages.dev",
  "sameAs": [
    "https://www.facebook.com/profile.php?id=100087047628991",
    "https://www.instagram.com/isalonindiranagar"
  ],
  "telephone": "+919902508399",
  "priceRange": "$$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No. 2011, 3rd Floor, 100 Feet Road, HAL II Stage",
    "addressLocality": "Indiranagar, Bangalore",
    "postalCode": "560038",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9715987,
    "longitude": 77.6411545
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "10:00",
    "closes": "22:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "49"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
