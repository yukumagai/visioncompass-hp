"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "会社概要" },
  { href: "/product", label: "プロダクト" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-night/90 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="text-white/90 text-sm tracking-[0.15em] font-medium"
          >
            Vision Compass
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/35 hover:text-white/70 transition-colors duration-300 text-sm tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/50 p-2"
            aria-label="メニュー"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-px w-full bg-current transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[7.5px]" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-current transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-current transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-night/95 backdrop-blur-lg"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-white/40 hover:text-white/70 transition-colors duration-300 text-sm tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
