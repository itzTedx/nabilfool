import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Live Imran Khan",
  description: "The great pakistani tiger on live",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "h-dvh grid place-content-center relative bg-foreground",
          inter.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
