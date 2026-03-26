import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elixir UI",
  description: "",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <Header />
        {children}
        {/* Tars Widget */}
        <Script id="tars-settings" strategy="afterInteractive">
          {`
            window.tarsSettings = {"convid":"DZHA_H"};
          `}
        </Script>

        <Script
          id="tars-widget"
          src="https://tars-file-upload.s3.amazonaws.com/bulb/js/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
