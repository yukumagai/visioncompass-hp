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
    "株式会社VisionCompassは「魂の望みで生きられる世界を創る」をミッションに掲げ、AI睡眠ジャーナリングアプリ「ねるぞう」を開発しています。",
  metadataBase: new URL("https://visioncompass.jp"),
  openGraph: {
    title: "株式会社VisionCompass",
    description: "世界を才能の花で満たす。",
    url: "https://visioncompass.jp",
    siteName: "VisionCompass",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VisionCompass",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社VisionCompass",
    description: "世界を才能の花で満たす。",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-mist text-night">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
