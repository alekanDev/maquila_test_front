import { MobileProvider } from "@/context/MobileContext";
import Banner from "@/modules/Banner";
import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tienda de Ropa Online para Hombre y Mujer | Movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <MobileProvider>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <main style={{ marginTop: 90 }}>{children}</main>
        </body>
      </MobileProvider>
    </html>
  );
}
