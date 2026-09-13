import Link from "next/link";
import { Scissors } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for SplitVideo.in",
};

export default function PrivacyPage() {
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
          <h1 className="text-3xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
          <p className="text-slate-600 mb-4">Last updated: September 2026</p>
          <div className="space-y-6 text-slate-700">
            <p>SplitVideo.in operates the website splitvideo.in. This Privacy Policy explains how we collect, use, and protect information when you visit our site.</p>
            <p>We do not require accounts. We may collect standard analytics data through Google Analytics and advertising partners (including Google AdSense).</p>
            <p>We use cookies for analytics and to display relevant advertisements via Google AdSense. You can opt out of personalized advertising in Google Ads Settings.</p>
            <p>We do not sell personal information. Data is used to improve the site and monetize through advertising so guides remain free.</p>
            <p>For privacy questions, contact us via the Contact page.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
