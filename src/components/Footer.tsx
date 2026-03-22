"use client";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{ background: "var(--color-charcoal)", borderTop: "1px solid rgba(197,164,126,0.15)" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <img
              src="/images/logo2.jpeg"
              alt="iSalon Logo"
              className="h-16 md:h-20 w-auto object-contain"
              style={{ mixBlendMode: 'screen' }}
            />
            <p
              className="text-[0.55rem] tracking-[0.2em] uppercase mb-4"
              style={{ color: "var(--color-gold)" }}
            >
              ಇಸಲೋನ್ — Where Beauty Meets Perfection
            </p>
            <p
              className="text-xs leading-relaxed max-w-xs"
              style={{ color: "var(--color-warm-gray)" }}
            >
              Indiranagar&apos;s premier luxury salon experience. Proudly women-owned.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-5"
              style={{ color: "var(--color-cream)" }}
            >
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {["About", "Services", "Gallery", "Testimonials", "Contact"].map(
                (l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase()}`}
                    className="text-xs hover:text-[var(--color-gold)] transition-colors"
                    style={{ color: "var(--color-warm-gray)" }}
                  >
                    {l}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs tracking-[0.2em] uppercase mb-5"
              style={{ color: "var(--color-cream)" }}
            >
              Contact
            </h4>
            <div className="space-y-3">
              <p className="text-xs" style={{ color: "var(--color-warm-gray)" }}>
                No. 2011, 3rd Floor, 100 Feet Road,
                <br />
                Indiranagar, Bangalore - 560038
              </p>
              <a
                href="tel:+919902508399"
                className="text-xs block hover:text-[var(--color-gold)] transition-colors"
                style={{ color: "var(--color-warm-gray)" }}
              >
                +91 99025 08399
              </a>
              <p className="text-xs" style={{ color: "var(--color-warm-gray)" }}>
                Open daily: 10 AM – 10 PM
              </p>
            </div>
          </div>
        </div>

        {/* Gold Divider */}
        <div
          className="h-[1px] mb-8"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
            opacity: 0.3,
          }}
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.65rem]" style={{ color: "var(--color-warm-gray)" }}>
            © {new Date().getFullYear()} iSalon. All rights reserved.
          </p>
          <div className="flex gap-5">
            {/* Social Icons - Instagram */}
            <a
              href="https://www.instagram.com/isalonindiranagar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[var(--color-gold)]"
              style={{ border: "1px solid var(--color-warm-gray)" }}
              aria-label="Instagram"
              data-hover
            >
              <svg className="w-3.5 h-3.5" fill="var(--color-warm-gray)" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100087047628991"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[var(--color-gold)]"
              style={{ border: "1px solid var(--color-warm-gray)" }}
              aria-label="Facebook"
              data-hover
            >
              <svg className="w-3.5 h-3.5" fill="var(--color-warm-gray)" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
