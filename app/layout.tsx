import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContactModalProvider } from "../components/ContactModalContext";
import ContactModal from "../components/ContactModal";
import Favicon from "../components/Favicon";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Klarecode - Building Intelligent Web & Decentralized Future",
  description: "Engineering studio by ex-Big Tech experts. We deliver scalable Web3 solutions, AI automation, and Telegram Mini Apps focused on your business metrics.",
  icons: {
    icon: "/favIcoLightTheme.svg",
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
        className={`${inter.variable} font-sans antialiased`}
      >
        <Favicon />
        <ContactModalProvider>
          {children}
          <ContactModal />
        </ContactModalProvider>
      </body>
    </html>
  );
}
