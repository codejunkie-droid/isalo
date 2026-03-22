"use client";

import { motion } from "framer-motion";

export default function PromoOffer() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-24">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/images/salon-video-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass p-10 md:p-16 rounded-2xl md:rounded-3xl border border-[var(--color-gold)]/20 shadow-2xl"
        >
          <span className="block text-xs tracking-[0.3em] uppercase mb-4 text-[var(--color-gold)]">
            Exclusive
          </span>
          <h2
            className="text-3xl md:text-5xl lg:text-6xl mb-6"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-cream)",
            }}
          >
            A Special Offer
          </h2>
          <p
            className="text-sm md:text-base leading-relaxed mb-10 max-w-lg mx-auto"
            style={{ color: "var(--color-cream)" }}
          >
            Experience luxury redefined. Book your appointment now and enjoy an exclusive discount on your very first visit at our Indiranagar studio.
          </p>
          <a
            href="#booking"
            className="inline-flex magnetic-btn magnetic-btn-gold px-12 py-4 text-xs font-semibold tracking-[0.2em] uppercase transition-transform"
          >
            Book Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
