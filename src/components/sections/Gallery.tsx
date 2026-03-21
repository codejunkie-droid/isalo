"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const gallery = [
  { src: "/images/hero.png", alt: "Luxury salon interior", label: "Interior" },
  { src: "/images/gallery-hairstyling.png", alt: "Professional hair styling", label: "Hair Styling" },
  { src: "/images/gallery-nailart.png", alt: "Premium nail art", label: "Nail Art" },
  { src: "/images/gallery-facial.png", alt: "Korean Glass Facial treatment", label: "Skincare" },
  { src: "/images/about.png", alt: "Salon vanity and products", label: "Ambience" },
  { src: "/images/stylist.png", alt: "Our stylist at work", label: "Our Team" },
];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="section-padding bg-white" ref={ref}>
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label"
            >
              Our World
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="section-heading"
            >
              A Glimpse Inside
              <br />
              <span style={{ color: "var(--color-gold)" }}>iSalon</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="gold-divider mt-4"
            />
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.08,
                }}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                  i === 0 ? "md:row-span-2" : ""
                }`}
                style={{ aspectRatio: i === 0 ? "auto" : "1" }}
                onClick={() => setLightbox(i)}
                data-hover
              >
                <div className={`relative w-full ${i === 0 ? "h-full min-h-[300px] md:min-h-0" : "h-full"}`}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    quality={80}
                  />
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,26,26,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span
                    className="text-sm tracking-widest uppercase"
                    style={{
                      fontFamily: "var(--font-sans)",
                      color: "var(--color-cream)",
                    }}
                  >
                    {img.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[85vw] h-[80vh]"
            >
              <Image
                src={gallery[lightbox].src}
                alt={gallery[lightbox].alt}
                fill
                className="object-contain rounded-lg"
                quality={95}
              />
            </motion.div>
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                <path d="M1 1l14 14M15 1L1 15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
