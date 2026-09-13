import Link from "next/link";
import { 
  Scissors, 
  Smartphone, 
  Film, 
  Zap, 
  BookOpen, 
  ArrowRight,
  Play,
  Crop,
  Clock
} from "lucide-react";

const guides = [
  {
    title: "How to Split Long Videos for WhatsApp Status (30-Second Guide)",
    slug: "split-videos-for-whatsapp-status",
    description: "Turn any long video into perfect 30-second WhatsApp Status clips with clear steps.",
    icon: <Smartphone className="w-6 h-6" />,
    tag: "WhatsApp"
  },
  {
    title: "Split Video into Equal Parts for YouTube Shorts & Reels",
    slug: "split-video-equal-parts-shorts",
    description: "Best methods to divide long recordings into equal short clips ready for Shorts and Reels.",
    icon: <Film className="w-6 h-6" />,
    tag: "Shorts"
  },
  {
    title: "How to Crop Landscape Video to 9:16 Vertical Without Quality Loss",
    slug: "crop-video-to-9-16",
    description: "Practical guide to reframe horizontal footage for Instagram Reels and TikTok.",
    icon: <Crop className="w-6 h-6" />,
    tag: "Crop"
  },
  {
    title: "Repurpose Podcasts into Viral Clips in 3 Easy Steps",
    slug: "repurpose-podcasts-into-clips",
    description: "Simple workflow to extract the best moments from long podcasts and turn them into short-form gold.",
    icon: <Zap className="w-6 h-6" />,
    tag: "Repurpose"
  },
];

export default function HomePage() {
  return (
    <main className="flex-1">
      <nav className="sticky top-0 z-50 glass-strong border-b border-white/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
              <Scissors className="w-5 h-5" />
            </div>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              SplitVideo.in
            </span>
          </Link>
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-slate-700">
            <Link href="/guides" className="hover:text-blue-600 transition">Guides</Link>
            <Link href="/tools" className="hover:text-blue-600 transition">Free Tools</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          </div>
        </div>
      </nav>

      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium text-blue-700 mb-6">
            <BookOpen className="w-4 h-4" />
            Free Creator Resource Hub
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Split. Crop.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Repurpose.
            </span>
            <br />
            Turn Long Videos into Short-Form Gold
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Practical, step-by-step guides that show you exactly how to cut, split and reframe videos for YouTube Shorts, Instagram Reels, TikTok, WhatsApp Status and more — all free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/guides"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:-translate-y-0.5"
            >
              Browse All Guides
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/tools"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl glass-strong font-semibold text-slate-800 hover:bg-white/80 transition-all"
            >
              <Play className="w-5 h-5" />
              Free Tools
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Latest Guides</h2>
            <p className="text-slate-600">Actionable tutorials ranked for real search intent</p>
          </div>
          <Link href="/guides" className="hidden sm:inline-flex items-center gap-1 text-blue-600 font-medium hover:gap-2 transition-all">
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`}>
              <article className="group glass rounded-3xl p-6 h-full float-3d hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    {guide.icon}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                    {guide.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                  {guide.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {guide.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Read guide <ArrowRight className="w-4 h-4" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="glass-strong rounded-3xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-12">
            Built for Creators Who Want Results
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: <Clock className="w-7 h-7" />, title: "Fast & Practical", desc: "No fluff. Every guide is designed to get you from long video to publishable clips in minutes." },
              { icon: <Scissors className="w-7 h-7" />, title: "Platform Ready", desc: "Specific instructions for Shorts, Reels, TikTok, Status and more." },
              { icon: <BookOpen className="w-7 h-7" />, title: "Always Free", desc: "All guides and tips are free forever. Supported by ads." }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-lg">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-24 text-center">
        <div className="glass rounded-3xl p-10 sm:p-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Ready to turn long videos into short-form content?
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Start with our most popular guides and publish your first set of clips today.
          </p>
          <Link 
            href="/guides"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Explore Guides
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/30 glass-strong">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 font-bold">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                <Scissors className="w-4 h-4" />
              </div>
              SplitVideo.in
            </div>
            <div className="flex gap-6 text-sm text-slate-600">
              <Link href="/privacy" className="hover:text-blue-600">Privacy</Link>
              <Link href="/terms" className="hover:text-blue-600">Terms</Link>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
            </div>
          </div>
          <p className="text-center text-sm text-slate-500 mt-6">
            © {new Date().getFullYear()} SplitVideo.in — Free guides for video creators.
          </p>
        </div>
      </footer>
    </main>
  );
}
