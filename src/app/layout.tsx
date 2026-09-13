import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "SplitVideo.in – Free Guides to Split, Crop & Repurpose Videos for Shorts, Reels & Status",
    template: "%s | SplitVideo.in",
  },
  description:
    "Learn how to split long videos into short clips for YouTube Shorts, Instagram Reels, TikTok, WhatsApp Status and more. Free step-by-step guides, tips and tools for creators.",
  keywords: [
    "split video",
    "video splitter",
    "split video for reels",
    "youtube shorts splitter",
    "crop video 9:16",
    "repurpose long video",
    "whatsapp status video split",
    "free video cutter online",
  ],
  authors: [{ name: "SplitVideo" }],
  openGraph: {
    title: "SplitVideo.in – Split & Repurpose Videos Like a Pro",
    description: "Free guides and tips to turn long videos into viral short-form content.",
    url: "https://splitvideo.in",
    siteName: "SplitVideo.in",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SplitVideo.in – Free Video Split & Repurpose Guides",
    description: "Master short-form video creation with practical, free guides.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://splitvideo.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="orb w-96 h-96 bg-blue-300 top-[-10%] left-[-5%]" />
          <div className="orb w-80 h-80 bg-indigo-200 top-[20%] right-[-10%]" style={{ animationDelay: "2s" }} />
          <div className="orb w-72 h-72 bg-sky-200 bottom-[-10%] left-[20%]" style={{ animationDelay: "4s" }} />
          <div className="orb w-64 h-64 bg-violet-200 bottom-[30%] right-[15%]" style={{ animationDelay: "6s" }} />
        </div>
        {children}
      </body>
    </html>
  );
}
