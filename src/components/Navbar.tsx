"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
          scrolled
            ? "glass shadow-[0_4px_30px_rgba(0,0,0,0.06)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border border-[var(--color-gold)] bg-[var(--color-charcoal)]">
              <img
                src={scrolled ? "/images/logo3.jpeg" : "/images/logo2.jpeg"}
                alt="iSalon Logo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                style={{ mixBlendMode: scrolled ? 'multiply' : 'screen' }}
              />
            </div>
            <div className="flex flex-col">
              <span
                className="text-lg md:text-xl tracking-[0.15em] leading-none"
                style={{
                  fontFamily: "var(--font-serif)",
                  color: "var(--color-charcoal)",
                }}
              >
                iSalon
              </span>
              <span
                className="text-[0.45rem] tracking-[0.2em] uppercase mt-1"
                style={{
                  fontFamily: "var(--font-sans)",
                  color: "var(--color-gold)",
                }}
              >
                ಇಸಲೋನ್
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[0.75rem] font-medium tracking-[0.15em] uppercase transition-colors duration-300 hover:text-[var(--color-gold)]"
                style={{ color: "var(--color-warm-gray)" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Book Now Button (Desktop) */}
          <a
            href="#booking"
            className="hidden lg:inline-flex magnetic-btn magnetic-btn-primary text-[0.7rem] py-3 px-6"
          >
            Book Now
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-[5px] p-2 z-[10001]"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-[var(--color-charcoal)] transition-colors"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[1.5px] bg-[var(--color-charcoal)]"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-[var(--color-charcoal)] transition-colors"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9998] bg-[var(--color-cream)] flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="text-2xl tracking-[0.12em] uppercase"
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--color-charcoal)",
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#booking"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="magnetic-btn magnetic-btn-gold mt-4"
              >
                Book Appointment
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
