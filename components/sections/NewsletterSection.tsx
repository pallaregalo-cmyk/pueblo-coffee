"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-28 section-padding bg-bg border-t border-stone/10">
      <div className="max-w-2xl mx-auto text-center">
        <span className="gold-line mx-auto" />
        <span className="label-mono block mb-4">Haberdar Ol</span>
        <h2
          className="text-4xl md:text-5xl font-light text-stone mb-6"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Yeni Hasat Geldiğinde<br />İlk Sen Öğren
        </h2>
        <p className="text-stone/40 font-light mb-10">
          Yeni çekirdekler, özel kavurma partileri ve etkinlikler için bültenimize katıl.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 text-gold label-mono text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Kaydın alındı. Yakında görüşürüz.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-px max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresin"
              required
              className="flex-1 bg-bg-soft border border-stone/10 px-5 py-3.5 text-stone text-sm font-light placeholder-stone/30 focus:outline-none focus:border-gold/40 transition-colors"
            />
            <button type="submit" className="btn-primary">
              Katıl <ArrowRight size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
