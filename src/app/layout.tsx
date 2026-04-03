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
    default: "株式会社Vision Compass | 一人ひとりが持っている才能の花を開花させる",
    template: "%s | Vision Compass",
  },
  description:
    "株式会社Vision Compassは「一人ひとりが持っている才能の花を開花させる」をビジョンに掲げ、AI睡眠ジャーナリングアプリ「ねるぞう」を開発しています。",
  metadataBase: new URL("https://visioncompass.jp"),
  openGraph: {
    title: "株式会社Vision Compass",
    description: "一人ひとりが持っている才能の花を開花させる",
    url: "https://visioncompass.jp",
    siteName: "Vision Compass",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vision Compass",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社Vision Compass",
    description: "一人ひとりが持っている才能の花を開花させる",
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
