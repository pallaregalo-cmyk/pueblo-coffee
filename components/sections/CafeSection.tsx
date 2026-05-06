import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";

const cafes = [
  {
    name: "Pueblo Roastery",
    district: "Merkez",
    hours: "08:00 — 22:00",
    tag: "Kavurma Atölyesi",
    image: "/images/magaza_gorseli_2.png",
    href: "/cafeler/roastery",
  },
  {
    name: "Pueblo Cafe",
    district: "Şehir Merkezi",
    hours: "07:30 — 21:00",
    tag: "Cafe",
    image: "/images/magaza_gorseli_3.png",
    href: "/cafeler/merkez",
  },
];

export default function CafeSection() {
  return (
    <section className="py-28 section-padding bg-bg">
      <div className="flex items-end justify-between mb-16">
        <div>
          <span className="gold-line" />
          <span className="label-mono block mb-4">Mekânlarımız</span>
          <h2 className="heading-section">
            Bizi<br />Bulun
          </h2>
        </div>
        <Link
          href="/cafeler"
          className="hidden md:flex items-center gap-2 label-mono text-[10px] text-stone/50 hover:text-gold transition-colors"
        >
          Tüm Cafeler <ArrowRight size={12} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-stone/10">
        {cafes.map((cafe) => (
          <Link
            key={cafe.name}
            href={cafe.href}
            className="group relative bg-bg overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden">
              <Image
                src={cafe.image}
                alt={cafe.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
            </div>

            {/* Info */}
            <div className="p-8 bg-bg-soft border-t border-stone/10">
              <span className="label-mono text-[9px] text-gold mb-3 block">
                {cafe.tag}
              </span>
              <h3
                className="text-2xl font-light text-stone group-hover:text-gold transition-colors mb-3"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {cafe.name}
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-stone/40 text-xs">
                  <MapPin size={11} />
                  <span>{cafe.district}</span>
                </div>
                <span className="label-mono text-[9px] text-stone/40">
                  {cafe.hours}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
