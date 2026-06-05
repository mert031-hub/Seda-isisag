"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Ana Sayfa", href: "#hero" },
  { label: "Hakkında", href: "#hakkinda" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Yetkinlikler", href: "#yetkinlikler" },
  { label: "Yayınlar", href: "#yayinlar" },
  { label: "Yorumlar", href: "#yorumlar" },
  { label: "İletişim", href: "#iletisim" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(23,59,63,0.10)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="#hero"
            onClick={handleLinkClick}
            className="flex flex-col leading-tight group"
          >
            <span className="text-petrol font-serif text-xl lg:text-2xl font-semibold tracking-tight group-hover:text-clay transition-colors duration-200">
              Seda İşisağ
            </span>
            <span className="text-sage text-[10px] lg:text-xs font-medium tracking-widest uppercase">
              Psikolojik Danışmanlık
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-charcoal/80 hover:text-petrol font-medium tracking-wide transition-colors duration-150 rounded-lg hover:bg-petrol/5"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="tel:05079126220"
              className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Randevu Al
            </Link>

            <button
              className="lg:hidden flex flex-col justify-center gap-[5px] w-10 h-10 p-2 rounded-lg hover:bg-petrol/10 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menüyü aç/kapat"
            >
              <span className={`block h-0.5 w-6 bg-petrol transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-0.5 bg-petrol transition-all duration-200 ${menuOpen ? "opacity-0 w-0" : "w-6"}`} />
              <span className={`block h-0.5 w-6 bg-petrol transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-card mb-3 p-3 border border-stone/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 text-charcoal hover:text-petrol hover:bg-ivory rounded-xl font-medium transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-stone/30">
              <Link
                href="tel:05079126220"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 btn-primary w-full text-sm py-3"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Randevu Al – 0507 912 62 20
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
