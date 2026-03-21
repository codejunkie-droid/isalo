"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    name: "Akrathi Shetty",
    review:
      "Beautiful place, friendly staff, excellent service. iSalon has become my go-to for every occasion. The attention to detail is unmatched.",
    rating: 5,
    service: "Hair Styling",
  },
  {
    name: "Esther Abraham",
    review:
      "Great place for haircut, incredible experience everytime. The ambience is so calming, and the stylists really listen to what you want.",
    rating: 5,
    service: "Hair Treatments",
  },
  {
    name: "Pavithra R",
    review:
      "Absolutely loved the Korean Glass Facial at iSalon! My skin has never looked better. The whole experience was so luxurious and relaxing.",
    rating: 5,
    service: "Korean Glass Facial",
  },
  {
    name: "Sneha Murthy",
    review:
      "The nail art here is truly artistic. I always get compliments! The team is incredibly talented and the salon is gorgeous.",
    rating: 5,
    service: "Nail Art",
  },
  {
    name: "Divya Rao",
    review:
      "From the moment I walked in, I felt like royalty. The premium experience at iSalon is worth every penny. Highly recommend!",
    rating: 5,
    service: "Spa & Skincare",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
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
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      className="section-padding bg-white"
      ref={ref}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            Client Love
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-heading"
          >
            Words That Warm
            <br />
            <span style={{ color: "var(--color-gold)" }}>Our Hearts</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="gold-divider mt-4"
          />
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="glass rounded-2xl p-10 md:p-14 max-w-2xl mx-auto text-center"
                >
                  <StarRating rating={t.rating} />
                  <p
                    className="text-lg md:text-xl leading-relaxed mt-6 mb-8"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: "var(--color-charcoal)",
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{t.review}&rdquo;
                  </p>
                  <div>
                    <p
                      className="font-semibold text-sm tracking-wide"
                      style={{ color: "var(--color-charcoal)" }}
                    >
                      {t.name}
                    </p>
                    <p
                      className="text-xs mt-1 tracking-wider uppercase"
                      style={{ color: "var(--color-gold)" }}
                    >
                      {t.service}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === i
                    ? "bg-[var(--color-gold)] w-8"
                    : "bg-[var(--color-beige)]"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
