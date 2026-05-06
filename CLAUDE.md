# Pueblo Coffee Roastery — Proje Dokümantasyonu

## Proje Genel Bakış

**Marka:** Pueblo Coffee Roastery  
**Instagram:** @pueblocoffee.roastery  
**Alan Adı (hedef):** oandcoffee.com  
**Proje Klasörü:** `/Users/consulant/kahve websitesi/pueblo-web/`  
**Medya Kaynağı:** `/Users/consulant/kahve websitesi/puebloicinresimler/`  
**Referans Site:** https://www.petracoffee.com

---

## Teknik Stack

| Katman | Teknoloji |
|--------|-----------|
| Framework | Next.js 16 (App Router) |
| Stil | Tailwind CSS v3 |
| Animasyon | Framer Motion |
| İkonlar | Lucide React |
| Dil | TypeScript |
| Font | Cormorant Garamond, Inter, Space Grotesk (Google Fonts) |
| Hosting (hedef) | Vercel |
| Veritabanı (ilerleyen aşama) | Supabase (PostgreSQL) |
| Ödeme (ilerleyen aşama) | iyzico |
| Mobil (ilerleyen aşama) | React Native + Expo |

### Geliştirme Ortamı

```bash
# Projeyi başlat
cd "/Users/consulant/kahve websitesi/pueblo-web"
npm run dev
# → http://localhost:3000
```

---

## Renk Paleti

Görsel kimlik, mağaza cephesindeki amber/altın neon tabeladan, ürün ambalajındaki royal mavi ve terracotta renklerden, taş dokusu cepheden ilham alır.

```css
--color-bg:         #0C0A07   /* Espresso siyahı — ana arkaplan */
--color-bg-soft:    #1A1510   /* Koyu kahve — ikincil arkaplan */
--color-bg-surface: #252018   /* Kart/section yüzeyi */
--color-gold:       #E8A020   /* Amber neon — ana vurgu */
--color-gold-light: #F5C455   /* Hover state */
--color-gold-dim:   #A36E10   /* Dim state */
--color-blue:       #1A4DC4   /* Paket mavisi — ikincil */
--color-terra:      #C84B2A   /* Terracotta — üçüncül */
--color-stone:      #E8E4DC   /* Taş beyazı — ana metin */
--color-muted:      #8A8070   /* İkincil metin */
```

---

## Tipografi

| Kullanım | Font | Özellik |
|----------|------|---------|
| Başlıklar / Display | Cormorant Garamond | Zarif serif, heritage his |
| Navigation / Label / Buton | Space Grotesk | Modern, teknik, uppercase |
| Body / Paragraf | Inter | Okunabilir, clean |

Tailwind sınıfları:
- `.heading-display` — büyük hero başlıkları (5xl → 8xl)
- `.heading-section` — bölüm başlıkları (4xl → 5xl)
- `.label-mono` — uppercase etiketler, gold renk
- `.btn-primary` — dolu gold buton
- `.btn-outline` — çerçeveli buton

---

## Proje Yapısı

```
pueblo-web/
├── app/
│   ├── globals.css          # Tailwind + CSS değişkenleri + yardımcı sınıflar
│   ├── layout.tsx           # Font yükleme, metadata, Navbar
│   └── page.tsx             # Ana sayfa (tüm section'ları birleştirir)
├── components/
│   ├── Navbar.tsx           # Sticky, scroll'da opaklaşan, dropdown, mobil menü
│   ├── Footer.tsx           # Linkler, sosyal medya, telif
│   └── sections/
│       ├── HeroBanner.tsx       # 3 videolu sinematik banner, otomatik geçiş
│       ├── FeaturedProducts.tsx # Öne çıkan çekirdekler grid'i
│       ├── AboutStrip.tsx       # Hikaye + istatistik kartları
│       ├── CafeSection.tsx      # Cafe lokasyonları + görseller
│       ├── WholesaleStrip.tsx   # Toptan alım bölümü
│       └── NewsletterSection.tsx # E-posta bülteni formu
├── public/
│   ├── videos/
│   │   ├── banner_video.mp4
│   │   ├── banner_video_2.mp4
│   │   └── banner_video_3.mp4
│   └── images/
│       ├── banner.png
│       ├── magaza_gorseli.jpg
│       ├── magaza_gorseli_2.png
│       └── magaza_gorseli_3.png
├── tailwind.config.ts       # Özel renkler, fontlar, animasyonlar
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Sayfa Tasarım Mantığı

### Hero Banner
- 3 video otomatik döngü (7 saniye aralık)
- Video geçişinde fade animasyonu (600ms)
- Her slide için ayrı başlık, alt başlık ve CTA
- Sol altta slide göstergesi (çizgi formunda)
- Ortada scroll indicator (bounce animasyonu)
- Gradient overlay: alttan yukarı + soldan sağa

### Genel Section Düzeni
- `section-padding`: px-6 → md:px-12 → lg:px-24
- Her section üstte: altın çizgi (`gold-line`) + label + başlık
- Kartlar arası bölücü: `bg-stone/10` arka planlı `gap-px` grid (ince çizgi efekti)

---

## 4 Aşamalı Yol Haritası

### Aşama 1 — Ana Website ✅ (Mevcut)
- Sinematik video banner
- Ürün showcase
- Cafe lokasyonları
- Toptan alım tanıtımı
- Newsletter

### Aşama 2 — Bayi Sipariş Portalı
- **Domain:** bayi.oandcoffee.com
- **Referans:** simpleor.com
- Bayi girişi (auth)
- Sipariş yönetimi
- Sipariş geçmişi
- Supabase backend

### Aşama 3 — E-Ticaret
- Ana domain'e entegre
- Ürün kataloğu + varyant seçimi (gramaj, öğütme tipi)
- Supabase: müşteri, sipariş, stok tabloları
- iyzico ödeme entegrasyonu
- Kullanıcı hesabı / sipariş takibi

### Aşama 4 — Cafe Sadakat Uygulaması
- **Domain:** sadakat.oandcoffee.com
- iOS + Android (React Native + Expo)
- QR kod tabanlı puan sistemi
- Push notification
- Supabase Auth (web ile ortak)

---

## Deployment (Hedef)

```
oandcoffee.com          → Vercel (Next.js)
bayi.oandcoffee.com     → Vercel (ayrı proje veya subdomain)
sadakat.oandcoffee.com  → Vercel / Expo
```

**Vercel deploy adımları:**
1. GitHub reposu oluştur
2. `git push` ile kodu gönder
3. Vercel'de "Import Project" → GitHub repo seç
4. Domain ayarlarından `oandcoffee.com` ekle
5. DNS kayıtlarını domain sağlayıcısında güncelle

---

## Notlar

- Video dosyaları büyük olduğu için production'da Cloudinary veya benzer bir CDN'e taşınması önerilir
- Ürün isimleri (Xanthos, Lycia, Antalya) şimdilik placeholder — gerçek ürün isimleriyle değiştirilecek
- Cafe lokasyon bilgileri (adres, çalışma saatleri) güncellenecek
- `oandcoffee.com` domain durumu: satın alınacak / kayıtlı durumu belirsiz
