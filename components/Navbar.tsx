"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Search } from "lucide-react";

const navLinks = [
  { label: "Hikayemiz", href: "/hikayemiz" },
  {
    label: "Çekirdekler",
    href: "/cekirdekler",
    sub: [
      { label: "Single Origin", href: "/cekirdekler/single-origin" },
      { label: "Blend", href: "/cekirdekler/blend" },
      { label: "Cold Brew", href: "/cekirdekler/cold-brew" },
      { label: "Kapsül", href: "/cekirdekler/kapsul" },
    ],
  },
  { label: "Ekipman", href: "/ekipman" },
  { label: "Cafeler", href: "/cafeler" },
  {
    label: "Toptan Alım",
    href: "/toptan",
    sub: [
      { label: "Bayi Girişi", href: "https://bayi.oanddcoffee.com", external: true },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-bg/95 backdrop-blur-md border-b border-stone/10"
            : "bg-transparent"
        }`}
      >
        <div className="section-padding flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className="font-serif text-2xl font-light text-stone tracking-widest group-hover:text-gold transition-colors duration-300"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              PUEBLO
            </span>
            <span
              className="label-mono text-[9px] text-stone/40 leading-tight hidden sm:block"
            >
              COFFEE<br />ROASTERY
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => link.sub && setOpenSub(link.label)}
                onMouseLeave={() => setOpenSub(null)}
              >
                <Link
                  href={link.href}
                  className="label-mono text-[10px] text-stone/70 hover:text-gold transition-colors duration-200 py-2"
                >
                  {link.label}
                </Link>

                {/* Dropdown */}
                {link.sub && openSub === link.label && (
                  <div className="absolute top-full left-0 pt-4 min-w-[180px]">
                    <div className="bg-bg-soft border border-stone/10 py-2">
                      {link.sub.map((s) =>
                        (s as any).external ? (
                          <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-5 py-2.5 label-mono text-[9px] text-stone/60 hover:text-gold hover:bg-bg-surface transition-all duration-150"
                          >
                            {s.label}
                          </a>
                        ) : (
                          <Link
                            key={s.label}
                            href={s.href}
                            className="block px-5 py-2.5 label-mono text-[9px] text-stone/60 hover:text-gold hover:bg-bg-surface transition-all duration-150"
                          >
                            {s.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button
              className="text-stone/60 hover:text-gold transition-colors duration-200 hidden lg:block"
              aria-label="Arama"
            >
              <Search size={18} />
            </button>
            <Link
              href="/sepet"
              className="text-stone/60 hover:text-gold transition-colors duration-200 relative"
              aria-label="Sepet"
            >
              <ShoppingBag size={18} />
            </Link>
            <button
              className="lg:hidden text-stone/60 hover:text-gold transition-colors duration-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menü"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-bg flex flex-col transition-transform duration-500 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-20" />
        <nav className="flex flex-col section-padding pt-12 gap-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block py-4 border-b border-stone/10"
                onClick={() => setMobileOpen(false)}
              >
                <span
                  className="font-serif text-3xl font-light text-stone hover:text-gold transition-colors"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {link.label}
                </span>
              </Link>
              {link.sub && (
                <div className="pl-4 pb-2">
                  {link.sub.map((s) =>
                    (s as any).external ? (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-2 label-mono text-[10px] text-stone/50 hover:text-gold transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {s.label}
                      </a>
                    ) : (
                      <Link
                        key={s.label}
                        href={s.href}
                        className="block py-2 label-mono text-[10px] text-stone/50 hover:text-gold transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {s.label}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="section-padding mt-auto pb-12">
          <Link
            href="/giris"
            className="btn-outline w-full justify-center"
            onClick={() => setMobileOpen(false)}
          >
            Giriş Yap
          </Link>
        </div>
      </div>
    </>
  );
}
