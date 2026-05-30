import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Wessel Elektrotechnik | Meisterbetrieb aus Greven",
  description:
    "Ihr Ansprechpartner für Elektroinstallation, Smart Home, Photovoltaik, E-Mobilität und E-Check in Greven und Umgebung.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-screen overflow-x-hidden">
  <img src="/bg.jpg" className="bg-image" />

  <main className="relative z-10">
    {children}
  </main>
</body>
    </html>
  );
}