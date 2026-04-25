import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import { Lato } from "next/font/google";
import Header from "./modules/Header";
import Footer from "./modules/Footer";
import { themeInitScript } from "./lib/theme-script";

export const metadata: Metadata = {
  title: "Laptop DB",
  description: "Database of laptops",
};

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="w-full" lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
      </head>
      <body
        className={`${lato.className} w-full max-w-[1534px] px-[1.2rem] m-auto min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}