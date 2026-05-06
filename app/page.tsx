import HeroBanner from "@/components/sections/HeroBanner";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import AboutStrip from "@/components/sections/AboutStrip";
import CafeSection from "@/components/sections/CafeSection";
import WholesaleStrip from "@/components/sections/WholesaleStrip";
import NewsletterSection from "@/components/sections/NewsletterSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <HeroBanner />
      <FeaturedProducts />
      <AboutStrip />
      <CafeSection />
      <WholesaleStrip />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
