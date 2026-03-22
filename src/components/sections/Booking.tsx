"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const serviceOptions = [
  "Hair Styling",
  "Hair Treatments",
  "Nail Art",
  "Spa & Skincare",
  "Korean Glass Facial",
  "Bridal Package",
];

export default function Booking() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, phone, service, date, time } = formData;
    
    // Construct WhatsApp Message
    const message = `Hello iSalon! I would like to book an appointment.%0A%0A*Booking Details:*%0AName: ${name}%0APhone: ${phone}%0AService: ${service}%0ADate: ${date}%0ATime: ${time}%0A%0AThank you!`;
    
    // Redirect to WhatsApp
    window.open(`https://wa.me/919902508399?text=${message}`, "_blank");
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", service: "", date: "", time: "" });
    }, 4000);
  };

  const inputStyles =
    "w-full px-5 py-4 rounded-xl text-sm border border-[var(--color-nude)] bg-white focus:border-[var(--color-gold)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/20 transition-all duration-300 placeholder:text-[var(--color-warm-gray-light)]";

  return (
    <section id="booking" className="section-padding relative overflow-hidden">
      {/* Subtle Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, var(--color-nude) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Reserve Your Spot</span>
            <h2 className="section-heading">
              Book Your
              <br />
              <span style={{ color: "var(--color-gold)" }}>Luxury Experience</span>
            </h2>
            <div className="gold-divider !mx-0 mb-8" />
            <p className="section-subtext mb-10">
              Treat yourself to the ultimate pampering experience. Reserve your
              preferred service and time, and let us craft your perfect salon visit.
            </p>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919902508399?text=Hello%20iSalon!%20I%20would%20like%20to%20book%20an%20appointment."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                background: "#25D366",
                color: "white",
              }}
              data-hover
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="text-sm font-medium tracking-wide">
                Book via WhatsApp
              </span>
            </a>

            {/* Info */}
            <div className="mt-10 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span className="text-sm" style={{ color: "var(--color-warm-gray)" }}>
                  Open Daily: 10:00 AM – 10:00 PM
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4" fill="none" stroke="var(--color-gold)" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                </svg>
                <span className="text-sm" style={{ color: "var(--color-warm-gray)" }}>
                  +91 99025 08399
                </span>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="text-5xl mb-4">✨</div>
                  <h3
                    className="text-xl mb-3"
                    style={{
                      fontFamily: "var(--font-serif)",
                      color: "var(--color-charcoal)",
                    }}
                  >
                    Booking Confirmed!
                  </h3>
                  <p className="text-sm" style={{ color: "var(--color-warm-gray)" }}>
                    We&apos;ll connect with you shortly to confirm your appointment.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      className={inputStyles}
                      style={{ fontFamily: "var(--font-sans)" }}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className={inputStyles}
                      style={{ fontFamily: "var(--font-sans)" }}
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <select
                      required
                      className={inputStyles}
                      style={{
                        fontFamily: "var(--font-sans)",
                        color: formData.service
                          ? "var(--color-charcoal)"
                          : "var(--color-warm-gray-light)",
                      }}
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                    >
                      <option value="" disabled>
                        Select Service
                      </option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="date"
                      required
                      className={inputStyles}
                      style={{ fontFamily: "var(--font-sans)" }}
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                    />
                    <input
                      type="time"
                      required
                      className={inputStyles}
                      style={{ fontFamily: "var(--font-sans)" }}
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    className="magnetic-btn magnetic-btn-gold w-full py-4 rounded-xl"
                  >
                    Book Your Luxury Experience
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
