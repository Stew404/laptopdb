import type { Metadata } from "next";
import "@/app/globals.css";

import { Lato } from "next/font/google";

export const metadata: Metadata = {
    title: "Laptop DB",
    description: "Database of laptops",
};

const lato = Lato({
    weight: "400",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className="w-full" lang="en">
            <body
                className={`${lato.className} w-screen h-screen`}
            >
                {children}
            </body>
        </html>
    );
}
