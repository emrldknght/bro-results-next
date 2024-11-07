import type React from "react";
import {geistMono, geistSans} from "@/app/layout";

export default function ChordsLayout({
    children,
} : { children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}