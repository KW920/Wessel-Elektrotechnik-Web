import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/geist-latin.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = localFont({
  src: "./fonts/geist-mono-latin.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Wessel Elektrotechnik | Service für TEWE- & TELL-Fütterungsanlagen",
  description:
    "Eigenständiger Anlagenservice aus Greven: Fehlersuche, Wartung, Komponententausch und Wiederinbetriebnahme nach Reparatur an bestehenden TEWE- und TELL-Fütterungsanlagen.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-screen overflow-x-hidden">


  <div className="relative z-10">
    {children}
  </div>
</body>
    </html>
  );
}