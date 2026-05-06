import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pueblo Coffee Roastery",
  description:
    "Specialty kahve kavurma atölyesi. Çiftlikten fincana, her yudumda bir hikaye.",
  openGraph: {
    title: "Pueblo Coffee Roastery",
    description: "Specialty kahve kavurma atölyesi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${cormorant.variable} ${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
