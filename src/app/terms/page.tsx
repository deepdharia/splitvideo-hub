import Link from "next/link";
import { Scissors } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for SplitVideo.in",
};

export default function TermsPage() {
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
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Terms of Use</h1>
          <p className="text-slate-600 mb-4">Last updated: September 2026</p>
          <div className="space-y-6 text-slate-700">
            <p>By accessing splitvideo.in you agree to these Terms of Use.</p>
            <p>All guides are provided for informational purposes. We make no warranties. You are responsible for how you use the information.</p>
            <p>Content is owned by SplitVideo.in. You may not copy for commercial purposes without permission.</p>
            <p>The site displays advertisements. We are not responsible for third-party ad content.</p>
            <p>SplitVideo.in is not liable for any damages arising from use of this website.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
