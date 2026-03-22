"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            Meet Our Expert
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-heading"
          >
            The Artisan Behind
            <br />
            <span style={{ color: "var(--color-gold)" }}>The Magic</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="gold-divider mt-4"
          />
        </div>

        {/* Team Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
            {/* Image */}
            <div className="relative aspect-square md:aspect-auto group overflow-hidden">
              <Image
                src="/images/hemarai.jpg"
                alt="Hema Rai — Lead Stylist at iSalon"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,26,0.3)] to-transparent" />
            </div>

            {/* Content */}
            <div className="p-10 md:p-12 flex flex-col justify-center">
              <span
                className="text-[0.6rem] font-semibold tracking-[0.25em] uppercase mb-4"
                style={{ color: "var(--color-gold)" }}
              >
                Lead Stylist
              </span>
              <h3
                className="text-2xl md:text-3xl mb-4"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--color-charcoal)",
                }}
              >
                Hema Rai
              </h3>
              <div className="gold-divider !mx-0 mb-6" />
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "var(--color-warm-gray)" }}
              >
                With over a decade of experience in luxury hair styling and beauty
                treatments, Hema brings an unparalleled eye for detail and a deep
                understanding of diverse hair types and textures. Trained in both
                classic European techniques and modern Korean beauty trends.
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Precision Cuts",
                  "Korean Skincare",
                  "Bridal Styling",
                  "Color Expert",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-[0.6rem] tracking-[0.1em] uppercase px-3 py-1.5 rounded-full"
                    style={{
                      background: "var(--color-cream)",
                      color: "var(--color-warm-gray)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
