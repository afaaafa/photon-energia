import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Photon Energia",
  description: "Photon Energia - Soluções em Energia Solar e Sustentabilidade",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${sourceSans.variable}`}>
      <body className="bg-background text-text-primary antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
