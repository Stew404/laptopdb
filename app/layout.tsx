import type { Metadata } from "next";
import "./globals.css";

import {Lato} from "next/font/google"
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Laptop DB",
  description: "Database of laptops",
};

const lato = Lato({
  weight: "400"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html className="w-full" lang="en">
          <body className={`${lato.className} w-full max-w-[1300px] m-auto mb-[7rem] h-full flex flex-col`}>
            <Header />
            {children}
          </body>
      </html>
  );
}
