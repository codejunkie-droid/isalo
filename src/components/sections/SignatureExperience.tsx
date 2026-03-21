"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    number: "01",
    title: "Luxury",
    description:
      "Every detail is meticulously curated — from our marble interiors to our premium product selection — to create an atmosphere of pure indulgence.",
  },
  {
    number: "02",
    title: "Personalization",
    description:
      "No two clients are alike. We take time to understand your unique needs, crafting bespoke treatments that honor your individual beauty.",
  },
  {
    number: "03",
    title: "Excellence",
    description:
      "Our team of skilled artisans brings years of expertise and a relentless pursuit of perfection to every service, every time.",
  },
];

export default function SignatureExperience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--color-charcoal)" }}
      ref={ref}
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(197,164,126,0.5) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            The iSalon Difference
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="section-heading !text-white"
          >
            A Signature Experience
            <br />
            <span style={{ color: "var(--color-gold)" }}>Beyond Compare</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="gold-divider mt-4"
          />
        </div>

        {/* Large Quote */}
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <p
            className="text-2xl md:text-3xl lg:text-4xl leading-snug italic"
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--color-cream-dark)",
            }}
          >
            &ldquo;We don&apos;t just style — we transform. Every visit is a
            journey of self-discovery and renewal.&rdquo;
          </p>
        </motion.blockquote>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.5 + i * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="text-center group"
            >
              <span
                className="text-5xl md:text-6xl font-light block mb-4 transition-colors duration-300 group-hover:text-[var(--color-gold)]"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--color-charcoal-light)",
                  WebkitTextStroke: "1px var(--color-gold)",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {pillar.number}
              </span>
              <h3
                className="text-xl mb-4"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--color-cream)",
                }}
              >
                {pillar.title}
              </h3>
              <div className="gold-divider mb-5" />
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-warm-gray-light)" }}
              >
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
