import Link from "next/link";
import { Scissors } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SplitVideo.in",
  description: "About the free video split and repurpose resource hub.",
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <nav className="sticky top-0 z-50 glass-strong border-b border-white/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
              <Scissors className="w-5 h-5" />
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">SplitVideo.in</span>
          </Link>
        </div>
      </nav>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="glass rounded-3xl p-8 sm:p-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-6">About SplitVideo.in</h1>
          <div className="space-y-5 text-slate-700 leading-relaxed">
            <p>SplitVideo.in is a free resource hub for creators who need to turn long videos into short-form content quickly.</p>
            <p>We publish practical guides focused on real search intent: splitting for WhatsApp Status, YouTube Shorts, Instagram Reels, TikTok, and cropping/repurposing footage.</p>
            <p>All guides remain free. The site is supported by advertising.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
