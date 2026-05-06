"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const videos = [
  "/videos/banner_video.mp4",
  "/videos/banner_video_2.mp4",
  "/videos/banner_video_3.mp4",
];

const slides = [
  {
    label: "Specialty Roastery",
    title: "Çekirdekten\nFincan'a",
    sub: "Her kavurma, bir kökenin hikayesi.",
    cta: { text: "Keşfet", href: "/cekirdekler" },
  },
  {
    label: "Single Origin",
    title: "Toprağın\nRuhu",
    sub: "Dünyanın dört bir yanından özenle seçilmiş çekirdekler.",
    cta: { text: "Çekirdekleri Gör", href: "/cekirdekler/single-origin" },
  },
  {
    label: "Pueblo Cafe",
    title: "Deneyimin\nMekânı",
    sub: "Kavurma atölyemiz ve cafelerimizdeyiz.",
    cta: { text: "Cafelerimiz", href: "/cafeler" },
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      goNext();
    }, 7000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  // Play active video
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === current) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [current]);

  const goNext = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurrent((c) => (c + 1) % videos.length);
      setTransitioning(false);
    }, 600);
  };

  const goTo = (i: number) => {
    if (i === current || transitioning) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTransitioning(true);
    setTimeout(() => {
      setCurrent(i);
      setTransitioning(false);
    }, 600);
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-bg">
      {/* Videos */}
      {videos.map((src, i) => (
        <video
          key={src}
          ref={(el) => { videoRefs.current[i] = el; }}
          src={src}
          muted
          loop
          playsInline
          preload={i === 0 ? "auto" : "none"}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current && !transitioning ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/60 via-transparent to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end section-padding pb-24">
        <div
          className={`transition-all duration-600 ${
            transitioning
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          <span className="gold-line" />
          <span className="label-mono block mb-4">
            {slides[current].label}
          </span>
          <h1 className="heading-display whitespace-pre-line mb-6 leading-none">
            {slides[current].title}
          </h1>
          <p className="text-stone/60 text-lg mb-10 max-w-md font-light">
            {slides[current].sub}
          </p>
          <div className="flex items-center gap-4">
            <Link href={slides[current].cta.href} className="btn-primary">
              {slides[current].cta.text}
              <ArrowRight size={14} />
            </Link>
            <div className="relative group">
              <button className="btn-outline flex items-center gap-1">
                Toptan Alım
                <ChevronDown size={13} className="transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full mt-2 min-w-[160px] bg-bg-soft border border-stone/20 rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-30">
                <a
                  href="https://bayi.oanddcoffee.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 text-sm text-stone/70 hover:text-gold hover:bg-stone/5 transition-colors"
                >
                  Bayi Girişi →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-10 right-6 md:right-12 lg:right-24 flex items-center gap-3 z-20">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slayt ${i + 1}`}
              className={`transition-all duration-300 ${
                i === current
                  ? "w-8 h-px bg-gold"
                  : "w-4 h-px bg-stone/30 hover:bg-stone/60"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-scroll-indicator">
        <span className="label-mono text-[9px] text-stone/40">Scroll</span>
        <ChevronDown size={14} className="text-stone/40" />
      </div>
    </section>
  );
}
