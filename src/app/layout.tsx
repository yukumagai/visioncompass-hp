import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "株式会社VisionCompass | 魂の望みで生きられる世界を創る",
    template: "%s | VisionCompass",
  },
  description:
    "株式会社VisionCompassは「魂の望みで生きられる世界を創る」をミッションに掲げ、眠る前に今日のことを話せるAIパートナー「ねるぞう」を開発しています。",
  metadataBase: new URL("https://visioncompass.jp"),
  openGraph: {
    title: "株式会社VisionCompass",
    description: "世界を才能の花で満たす。",
    url: "https://visioncompass.jp",
    siteName: "VisionCompass",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "株式会社VisionCompass",
    description: "世界を才能の花で満たす。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-paper text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:text-ink focus:outline-2 focus:outline-ink"
        >
          本文へスキップ
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
