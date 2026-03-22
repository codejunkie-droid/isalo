"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import SignatureExperience from "@/components/sections/SignatureExperience";
import Testimonials from "@/components/sections/Testimonials";
import Team from "@/components/sections/Team";
import Gallery from "@/components/sections/Gallery";
import PromoOffer from "@/components/sections/PromoOffer";
import Booking from "@/components/sections/Booking";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen />
      <CustomCursor />

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <SignatureExperience />
          <Testimonials />
          <Team />
          <Gallery />
          <PromoOffer />
          <Booking />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
