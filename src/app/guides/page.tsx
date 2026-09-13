import Link from "next/link";
import { Scissors, ArrowRight, Smartphone, Film, Crop, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Guides – How to Split, Crop & Repurpose Videos",
  description: "Complete list of free practical guides for splitting videos for Shorts, Reels, Status and more.",
};

const guides = [
  { title: "How to Split Long Videos for WhatsApp Status (30-Second Guide)", slug: "split-videos-for-whatsapp-status", description: "Turn any long video into perfect 30-second WhatsApp Status clips.", icon: <Smartphone className="w-6 h-6" />, tag: "WhatsApp" },
  { title: "Split Video into Equal Parts for YouTube Shorts & Reels", slug: "split-video-equal-parts-shorts", description: "Divide long recordings into equal short clips for Shorts and Reels.", icon: <Film className="w-6 h-6" />, tag: "Shorts" },
  { title: "How to Crop Landscape Video to 9:16 Vertical", slug: "crop-video-to-9-16", description: "Reframe horizontal footage for Reels, Shorts and TikTok.", icon: <Crop className="w-6 h-6" />, tag: "Crop" },
];

export default function GuidesPage() {
  return (
    <main className="flex-1">
      <nav className="sticky top-0 z-50 glass-strong border-b border-white/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
              <Scissors className="w-5 h-5" />
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">SplitVideo.in</span>
          </Link>
        </div>
      </nav>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">All Guides</h1>
        <p className="text-slate-600 mb-12">Practical tutorials for short-form video creation.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`}>
              <article className="group glass rounded-3xl p-6 h-full float-3d hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-blue-600">{guide.icon}</div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700">{guide.tag}</span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700">{guide.title}</h2>
                <p className="text-slate-600 text-sm mb-4">{guide.description}</p>
                <div className="flex items-center gap-1 text-blue-600 text-sm font-medium">Read guide <ArrowRight className="w-4 h-4" /></div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
