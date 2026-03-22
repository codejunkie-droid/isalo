"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="iSalon luxury interior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[var(--color-cream)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
        {/* Main SEO Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="section-label mb-6 !text-white/90 drop-shadow-sm font-bold"
        >
          Best Salon in Bangalore
        </motion.h1>

        {/* Aesthetic Subheading (previously h1) */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 drop-shadow-md text-white"
          style={{
            fontFamily: "var(--font-serif)",
          }}
        >
          Luxury Redefined.
          <br />
          <span style={{ color: "var(--color-gold)" }}>Beauty</span> Perfected.
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.1 }}
          className="text-base md:text-lg mb-10 max-w-xl mx-auto !text-white/80 drop-shadow-sm font-medium"
          style={{
            fontFamily: "var(--font-sans)",
            lineHeight: 1.7,
          }}
        >
          Indiranagar&apos;s most loved premium salon experience — where artistry,
          elegance, and self-care converge.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#booking" className="magnetic-btn magnetic-btn-primary">
            Book Appointment
          </a>
          <a href="#services" className="magnetic-btn magnetic-btn-outline">
            Explore Services
          </a>
        </motion.div>

        {/* Floating Rating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 3.7 }}
          className="mt-14 inline-flex items-center gap-3 glass px-6 py-3 rounded-full"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-3.5 h-3.5"
                fill="var(--color-gold)"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span
            className="text-sm font-semibold"
            style={{ color: "var(--color-charcoal)" }}
          >
            4.9
          </span>
          <span
            className="text-xs"
            style={{ color: "var(--color-warm-gray)" }}
          >
            (49 Reviews)
          </span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-[0.6rem] tracking-[0.3em] uppercase"
          style={{ color: "var(--color-warm-gray)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-8"
          style={{ background: "var(--color-beige)" }}
        />
      </motion.div>
    </section>
  );
}
