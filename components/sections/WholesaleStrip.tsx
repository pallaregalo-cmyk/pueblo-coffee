import Link from "next/link";
import { ArrowRight, Package, Truck, Phone } from "lucide-react";

const features = [
  { icon: Package, label: "Özel Paketleme", desc: "Markanıza özel ambalaj seçenekleri" },
  { icon: Truck, label: "Düzenli Teslimat", desc: "Haftalık veya aylık teslimat programları" },
  { icon: Phone, label: "Dedike Destek", desc: "Size özel hesap yöneticisi" },
];

export default function WholesaleStrip() {
  return (
    <section className="py-28 section-padding bg-bg-soft border-t border-stone/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <span className="gold-line" />
          <span className="label-mono block mb-4">Toptan Alım</span>
          <h2 className="heading-section mb-6">
            İşletmeniz İçin<br />Özel Fiyatlar
          </h2>
          <p className="text-stone/50 font-light leading-relaxed mb-10 max-w-md">
            Cafelere, restoranlara ve butik işletmelere özel toptan kahve
            programımıza katılın. Specialty grade çekirdeklerimizi rekabetçi
            fiyatlarla temin edin.
          </p>
          <Link href="/toptan" className="btn-primary">
            Başvuru Yap <ArrowRight size={14} />
          </Link>
        </div>

        {/* Right — features */}
        <div className="flex flex-col gap-px bg-stone/10">
          {features.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="bg-bg-soft p-8 flex items-start gap-5">
              <div className="mt-0.5 p-2 border border-gold/20 text-gold">
                <Icon size={16} />
              </div>
              <div>
                <p className="label-mono text-[10px] text-stone mb-1">{label}</p>
                <p className="text-stone/40 text-sm font-light">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
