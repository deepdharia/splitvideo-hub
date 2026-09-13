import Link from "next/link";
import { Scissors, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Video Tools",
  description: "Free tools and resources for splitting and repurposing videos.",
};

export default function ToolsPage() {
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
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Free Tools</h1>
        <p className="text-slate-600 mb-10">Simple free utilities and recommended workflows. More interactive tools coming soon.</p>
        <div className="glass rounded-3xl p-8">
          <p className="text-slate-700 mb-4">Recommended free workflows include browser-based local video splitters and CapCut for mobile.</p>
          <p className="text-slate-600">Prefer guides? <Link href="/guides" className="text-blue-600 font-medium hover:underline">Browse all guides</Link>.</p>
        </div>
      </section>
    </main>
  );
}
