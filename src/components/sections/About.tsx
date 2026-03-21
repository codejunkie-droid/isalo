"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/about.png"
                alt="iSalon interior ambiance"
                fill
                className="object-cover"
                quality={85}
              />
            </div>
            {/* Decorative Element */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl -z-10"
              style={{ background: "var(--color-nude)" }}
            />
            {/* Women-Owned Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-4 left-8 glass px-5 py-3 rounded-xl shadow-lg"
            >
              <p
                className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase"
                style={{ color: "var(--color-gold)" }}
              >
                ♀ Women-Owned Business
              </p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <span className="section-label">Our Story</span>
            <h2 className="section-heading">
              Crafting Beauty,
              <br />
              <span style={{ color: "var(--color-gold)" }}>One Client at a Time</span>
            </h2>
            <div className="gold-divider !mx-0 mb-8" />
            <p className="section-subtext mb-6">
              Born from a deep passion for beauty and self-care, iSalon represents
              a new standard of luxury in Indiranagar. As a proudly women-owned salon,
              we bring feminine intuition, warmth, and meticulous attention to detail
              to every service we offer.
            </p>
            <p className="section-subtext mb-10">
              From signature Korean Glass Facials to precision hair artistry, every
              experience at iSalon is designed to transform not just how you look,
              but how you feel. We believe beauty is deeply personal — and our
              approach reflects that.
            </p>

            {/* Stats */}
            <div className="flex gap-12">
              {[
                { number: "4.9", label: "Star Rating" },
                { number: "49+", label: "Happy Clients" },
                { number: "5+", label: "Years of Excellence" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.15 }}
                >
                  <p
                    className="text-3xl md:text-4xl font-light mb-1"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: "var(--color-charcoal)",
                    }}
                  >
                    {stat.number}
                  </p>
                  <p
                    className="text-[0.65rem] tracking-[0.15em] uppercase"
                    style={{ color: "var(--color-warm-gray)" }}
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
