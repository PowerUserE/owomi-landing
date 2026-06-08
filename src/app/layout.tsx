import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "OWOMI — Protect your Wealth",
  description:
    "Receive, hold, and spend in US dollars from anywhere. Multi-currency accounts, instant cross-border transfers, and up to 7% yield on your savings.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "OWOMI — Protect your Wealth",
    description:
      "Receive, hold, and spend in US dollars from anywhere. Multi-currency accounts, instant cross-border transfers, and up to 7% yield on your savings.",
    url: "https://owomi.co",
    siteName: "OWOMI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OWOMI — Protect your Wealth",
    description:
      "Receive, hold, and spend in US dollars from anywhere. Multi-currency accounts, instant cross-border transfers, and up to 7% yield on your savings.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0C0F0F]">{children}</body>
    </html>
  );
}
