import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const gId = process.env.NEXT_PUBLIC_GA_ID ?? "";
if (gId === undefined) {
  throw new Error("Google Analytics ID is not defined.");
}

export const metadata: Metadata = {
  title: "Northern Whisper",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      {/* Font Style for logo */}
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      </head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId={gId} />
    </html>
  );
}
