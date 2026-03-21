"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 4C18 4 14 10 14 18c0 6 3 10 6 12v10h8V30c3-2 6-6 6-12C34 10 30 4 24 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 44h8M24 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Hair Styling",
    description:
      "From classic cuts to contemporary styles — precision artistry that celebrates your individuality.",
    featured: false,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M24 8v6M24 34v6M8 24h6M34 24h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Hair Treatments",
    description:
      "Deep conditioning, keratin, and restorative therapies for hair that radiates health and vitality.",
    featured: false,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M16 40c-2-6-4-12-4-18C12 12 17 6 24 6s12 6 12 16c0 6-2 12-4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 26c2-2 4-3 6-3s4 1 6 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="18" r="2" fill="currentColor"/>
      </svg>
    ),
    title: "Nail Art",
    description:
      "Intricate designs and premium finishes — from minimalist elegance to bold statement nails.",
    featured: false,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M12 18c0-6 5-12 12-12s12 6 12 12c0 8-6 14-12 24C18 32 12 26 12 18z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="24" cy="18" r="5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Spa & Skincare",
    description:
      "Rejuvenating facials, body treatments, and holistic spa rituals for total relaxation.",
    featured: false,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 6 L30 18 L42 18 L32 26 L36 38 L24 30 L12 38 L16 26 L6 18 L18 18 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="24" cy="22" r="5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Korean Glass Facial",
    description:
      "Our signature treatment — achieve the coveted glass-skin glow with our premium Korean skincare ritual.",
    featured: true,
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-heading"
          >
            Curated Experiences for
            <br />
            <span style={{ color: "var(--color-gold)" }}>Every Desire</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="gold-divider mt-4"
          />
        </div>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`group relative p-8 rounded-2xl transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 ${
                service.featured
                  ? "bg-[var(--color-charcoal)] lg:col-span-1 sm:col-span-2 lg:row-span-1"
                  : "bg-white"
              }`}
              data-hover
            >
              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute top-5 right-5">
                  <span
                    className="text-[0.55rem] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full"
                    style={{
                      background: "var(--color-gold)",
                      color: "white",
                    }}
                  >
                    ✦ Signature
                  </span>
                </div>
              )}

              {/* Icon */}
              <div
                className="mb-6 transition-colors duration-300"
                style={{
                  color: service.featured
                    ? "var(--color-gold)"
                    : "var(--color-warm-gray)",
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-lg mb-3 transition-colors duration-300"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: service.featured ? "white" : "var(--color-charcoal)",
                }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: service.featured
                    ? "var(--color-warm-gray-light)"
                    : "var(--color-warm-gray)",
                }}
              >
                {service.description}
              </p>

              {/* Hover Gold Border Animation */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 transition-all duration-500 rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
