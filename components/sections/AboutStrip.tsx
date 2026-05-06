import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutStrip() {
  return (
    <section className="py-28 section-padding bg-bg-soft">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        {/* Text */}
        <div>
          <span className="gold-line" />
          <span className="label-mono block mb-4">Hikayemiz</span>
          <h2 className="heading-section mb-8">
            Kavurmak<br />Bir Sanattır
          </h2>
          <p className="text-stone/50 font-light leading-relaxed mb-6 max-w-md">
            Pueblo Coffee Roastery olarak her çekirdeğin kendi hikayesi
            olduğuna inanıyoruz. Dünyanın en iyi kahve bölgelerinden özenle
            seçtiğimiz çekirdekleri, küçük partiler halinde kavurarak
            özgün tatlarını ortaya çıkarıyoruz.
          </p>
          <p className="text-stone/50 font-light leading-relaxed mb-10 max-w-md">
            Kavurma atölyemiz ve cafelerimizde sizi bekliyoruz — bir fincan
            kahvenin ardındaki yolculuğu birlikte keşfedelim.
          </p>
          <Link href="/hikayemiz" className="btn-outline">
            Daha Fazla <ArrowRight size={14} />
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-px bg-stone/10">
          {[
            { value: "12+", label: "Köken Ülke" },
            { value: "48h", label: "Taze Kavurma" },
            { value: "3", label: "Cafe Lokasyonu" },
            { value: "100%", label: "Specialty Grade" },
          ].map((s) => (
            <div key={s.label} className="bg-bg-soft p-10 flex flex-col gap-2">
              <span
                className="text-5xl font-light text-gold"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {s.value}
              </span>
              <span className="label-mono text-[9px] text-stone/40">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
