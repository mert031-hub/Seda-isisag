import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seda İşisağ | Psikolojik Danışmanlık Merkezi – Afyonkarahisar",
  description:
    "Afyonkarahisar'da aile danışmanlığı, evlilik danışmanlığı, çift danışmanlığı, çocuk ve ergen danışmanlığı, bireysel psikolojik danışmanlık ve online görüşme hizmetleri. Uzm. Psikolojik Danışman Seda İşisağ.",
  keywords: [
    "Seda İşisağ",
    "Afyon psikolog",
    "Afyon psikolojik danışmanlık",
    "Afyon aile danışmanlığı",
    "Afyon evlilik danışmanlığı",
    "Afyon çift danışmanlığı",
    "Afyon çocuk ergen danışmanlığı",
    "online psikolojik danışmanlık",
    "Afyonkarahisar psikolog",
    "psikolojik danışman Afyon",
  ],
  authors: [{ name: "Seda İşisağ" }],
  openGraph: {
    title: "Seda İşisağ | Psikolojik Danışmanlık Merkezi",
    description:
      "Afyonkarahisar'da aile, evlilik, çift, çocuk ve ergen danışmanlığında güvenli, etik ve profesyonel destek.",
    locale: "tr_TR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
