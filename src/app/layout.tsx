import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iSalon — Premium Hair & Beauty Salon | Indiranagar, Bangalore",
  description:
    "Luxury redefined. Beauty perfected. Experience Indiranagar's most loved premium salon — Korean Glass Facial, Nail Art, Hair Styling & more. Book your appointment today.",
  keywords: [
    "premium salon Bangalore",
    "luxury hair salon Indiranagar",
    "Korean Glass Facial",
    "best salon Bangalore",
    "nail art Indiranagar",
    "iSalon",
  ],
  openGraph: {
    title: "iSalon — Where Beauty Meets Perfection",
    description:
      "Indiranagar's most loved premium salon experience. Hair Styling, Korean Glass Facial, Nail Art & more.",
    type: "website",
  },
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
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
