"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Xanthos",
    subtitle: "Specialty Roast — Blend",
    origin: "Etiyopya & Kolombiya",
    notes: ["Karamel", "Çikolata", "Fındık"],
    weight: "250g / 500g",
    price: "₺320",
    color: "#1A4DC4",
    href: "/cekirdekler/xanthos",
  },
  {
    id: 2,
    name: "Lycia",
    subtitle: "Single Origin",
    origin: "Etiyopya — Yirgacheffe",
    notes: ["Bergamot", "Jasmen", "Şeftali"],
    weight: "250g / 500g",
    price: "₺290",
    color: "#C84B2A",
    href: "/cekirdekler/lycia",
  },
  {
    id: 3,
    name: "Antalya",
    subtitle: "House Blend",
    origin: "Brezilya & Guatemala",
    notes: ["Bitter Çikolata", "Ceviz", "Vanilya"],
    weight: "250g / 500g",
    price: "₺270",
    color: "#4A3520",
    href: "/cekirdekler/antalya",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-28 section-padding bg-bg">
      <div className="flex items-end justify-between mb-16">
        <div>
          <span className="gold-line" />
          <span className="label-mono block mb-4">Öne Çıkanlar</span>
          <h2 className="heading-section">
            Sezonun<br />Çekirdekleri
          </h2>
        </div>
        <Link
          href="/cekirdekler"
          className="hidden md:flex items-center gap-2 label-mono text-[10px] text-stone/50 hover:text-gold transition-colors"
        >
          Tümünü Gör <ArrowRight size={12} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone/10">
        {products.map((p) => (
          <Link
            key={p.id}
            href={p.href}
            className="group bg-bg hover:bg-bg-soft transition-colors duration-300 p-8 flex flex-col gap-6"
          >
            {/* Color swatch / visual */}
            <div
              className="w-full h-48 flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: p.color + "15" }}
            >
              <div
                className="w-20 h-20 rounded-full opacity-80 group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundColor: p.color }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-3">
              <span className="label-mono text-[9px] text-stone/40">
                {p.subtitle}
              </span>
              <h3
                className="text-3xl font-light text-stone group-hover:text-gold transition-colors duration-300"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {p.name}
              </h3>
              <p className="text-stone/50 text-sm font-light">{p.origin}</p>

              {/* Tasting notes */}
              <div className="flex gap-2 flex-wrap">
                {p.notes.map((n) => (
                  <span
                    key={n}
                    className="px-2 py-1 border border-stone/10 text-stone/50 text-[10px] font-mono"
                  >
                    {n}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-2 pt-4 border-t border-stone/10">
                <span className="text-stone/40 text-xs font-mono">{p.weight}</span>
                <span className="text-gold font-mono text-sm">{p.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 md:hidden">
        <Link href="/cekirdekler" className="btn-outline w-full justify-center">
          Tüm Çekirdekler <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
