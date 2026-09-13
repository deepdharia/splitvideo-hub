import Link from "next/link";
import { Scissors } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact SplitVideo.in",
};

export default function ContactPage() {
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
        <div className="glass rounded-3xl p-8 sm:p-12 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Contact</h1>
          <p className="text-slate-600 mb-8">For questions or feedback, email us.</p>
          <p className="text-lg font-medium text-blue-600">hello@splitvideo.in</p>
        </div>
      </article>
    </main>
  );
}
