"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { focusRing } from "@/lib/styles";

const navLinks = [
  { href: "/about", label: "会社概要" },
  { href: "/product", label: "プロダクト" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-paper border-b transition-colors duration-300 ${
        scrolled || menuOpen ? "border-rule" : "border-transparent"
      }`}
    >
      <nav
        aria-label="メインナビゲーション"
        className="max-w-6xl mx-auto px-6 lg:px-10"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className={`text-[15px] tracking-[0.12em] font-medium text-ink rounded-sm ${focusRing}`}
          >
            VisionCompass
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const current = pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={current ? "page" : undefined}
                    className={`text-sm tracking-wide transition-colors duration-200 rounded-sm ${
                      current
                        ? "text-ink underline decoration-ink/40 underline-offset-[10px]"
                        : "text-ink-soft hover:text-ink"
                    } ${focusRing}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden -mr-2 p-2 rounded-sm text-ink ${focusRing}`}
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className="block w-5 h-3.5 relative" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-200 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-full bg-current transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-px w-full bg-current transition-transform duration-200 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div id="mobile-menu" className="md:hidden bg-paper border-t border-rule">
          <ul className="px-6 py-4">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="border-b border-rule last:border-b-0"
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={
                    pathname.startsWith(link.href) ? "page" : undefined
                  }
                  className={`block py-4 text-base text-ink rounded-sm ${focusRing}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
