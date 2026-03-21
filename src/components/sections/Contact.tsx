"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: "var(--color-charcoal)" }}
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
            Find Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="section-heading !text-white"
          >
            Visit
            <span style={{ color: "var(--color-gold)" }}> iSalon</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="gold-divider mt-4"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden h-[350px] lg:h-full"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1!2d77.6408!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzgnMjkuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="iSalon Location"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col justify-center"
          >
            {/* Address */}
            <div className="mb-10">
              <h3
                className="text-lg mb-4"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--color-cream)",
                }}
              >
                Address
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-warm-gray-light)" }}
              >
                No. 2011, 3rd Floor, 100 Feet Road,
                <br />
                HAL II Stage, Indiranagar,
                <br />
                Bangalore - 560038
              </p>
            </div>

            {/* Contact Details */}
            <div className="mb-10">
              <h3
                className="text-lg mb-4"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--color-cream)",
                }}
              >
                Get in Touch
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+919902508399"
                  className="flex items-center gap-3 group"
                  data-hover
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="var(--color-gold)"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <span
                    className="text-sm group-hover:text-[var(--color-gold)] transition-colors"
                    style={{ color: "var(--color-warm-gray-light)" }}
                  >
                    +91 99025 08399
                  </span>
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="mb-10">
              <h3
                className="text-lg mb-4"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--color-cream)",
                }}
              >
                Hours
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between max-w-xs">
                  <span
                    className="text-sm"
                    style={{ color: "var(--color-warm-gray-light)" }}
                  >
                    Monday – Sunday
                  </span>
                  <span className="text-sm" style={{ color: "var(--color-gold)" }}>
                    10 AM – 10 PM
                  </span>
                </div>
              </div>
              <p
                className="text-xs mt-3"
                style={{ color: "var(--color-warm-gray)" }}
              >
                Open all days, including holidays
              </p>
            </div>

            {/* CTA */}
            <a
              href="#booking"
              className="magnetic-btn magnetic-btn-gold self-start"
            >
              Book Your Visit
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
