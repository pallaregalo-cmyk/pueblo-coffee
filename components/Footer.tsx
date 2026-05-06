import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

const links = {
  Keşfet: [
    { label: "Hikayemiz", href: "/hikayemiz" },
    { label: "Çekirdekler", href: "/cekirdekler" },
    { label: "Ekipman", href: "/ekipman" },
    { label: "Cafeler", href: "/cafeler" },
  ],
  Kurumsal: [
    { label: "Toptan Alım", href: "/toptan" },
    { label: "Bayi Girişi", href: "https://bayi.pueblocoffee.com.tr" },
    { label: "Kariyer", href: "/kariyer" },
    { label: "İletişim", href: "/iletisim" },
  ],
  Yardım: [
    { label: "Demleme Rehberi", href: "/rehber" },
    { label: "SSS", href: "/sss" },
    { label: "İade & Teslimat", href: "/iade" },
    { label: "KVKK", href: "/kvkk" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-bg-soft border-t border-stone/10">
      <div className="section-padding py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <span
                className="text-3xl font-light text-stone tracking-widest"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                PUEBLO
              </span>
            </Link>
            <p className="text-stone/40 text-sm font-light leading-relaxed mb-6 max-w-xs">
              Specialty kahve kavurma atölyesi. Çiftlikten fincana,
              her yudumda bir hikaye.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/pueblocoffee.roastery"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone/40 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="text-stone/40 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="label-mono text-[9px] text-stone/30 mb-5">{group}</p>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-stone/50 hover:text-gold text-sm font-light transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="label-mono text-[9px] text-stone/30">
            © {new Date().getFullYear()} Pueblo Coffee Roastery. Tüm hakları saklıdır.
          </p>
          <p className="label-mono text-[9px] text-stone/20">
            Türkiye
          </p>
        </div>
      </div>
    </footer>
  );
}
