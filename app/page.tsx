'use client';

import { use, useState, useEffect } from 'react';

const WHATSAPP_NUMBER = '6285179726257';

const WHATSAPP_MESSAGES = {
  founderLaunchpad: `Halo, saya tertarik untuk memesan paket Founder Launchpad.

Nama brand/startup:
Jenis bisnis:
Tujuan (launch / pitching / validasi ide):

Mohon info detail proses pengerjaan, timeline, dan hal yang perlu saya siapkan.
Terima kasih.`,
  landingPage: `Halo, saya tertarik untuk memesan paket Landing Page.

Nama brand/usaha:
Produk/jasa yang ditawarkan:
Tujuan landing page (jualan, lead, waitlist, company profile, dll):

Mohon info alur pengerjaan, estimasi waktu, dan kebutuhan materi dari saya.
Terima kasih.`,
  visualIdentity: `Halo, saya tertarik untuk memesan paket Visual Identity.

Nama brand:
Bidang usaha:
Target market utama:
Apakah brand sudah memiliki logo / belum:

Mohon info ruang lingkup pengerjaan dan timeline pengerjaan paket ini.
Terima kasih.`,
  pitchDeck: `Halo, saya tertarik untuk memesan paket Investor Ready Pitch Deck.

Nama startup:
Stage bisnis (ide / MVP / sudah jalan):
Tujuan pitch deck (investor, kompetisi, partner, dll):

Mohon info proses pengerjaan, kebutuhan data yang harus saya siapkan, serta estimasi waktu pengerjaan.
Terima kasih.`,
  presentationPolishing: `Halo, saya tertarik untuk memesan paket Presentation Polishing & Design.

Nama brand/usaha:
Jenis presentasi:
Tujuan presentasi (investor, klien, internal, dll):

Mohon info proses pengerjaan, estimasi waktu, dan materi yang perlu saya siapkan.
Terima kasih.`,
  consultation: `Nama:
Nama brand / usaha / startup:
Jenis kebutuhan (konsultasi presentasi, pitch deck, landing page, visual identity, dll):
Tujuan utama (pitching, proposal, presentasi klien, launch, dll):

Mohon info ketersediaan jadwal konsultasi terdekat dan mekanisme booking slot.
Terima kasih.`,
  starterBundle: `Halo, saya tertarik untuk memesan paket Starter Bundle: Lite Landing & Personal Website.

Nama:
Nama brand / usaha:
Jenis website yang diinginkan (personal, portfolio, landing page sederhana):

Mohon info detail proses pengerjaan, timeline, dan hal yang perlu saya siapkan.
Terima kasih.`,
};

function getWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
import { Button } from '@/components/ui/button';
import {
  BarChart3,
  Zap,
  TrendingUp,
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Code2,
  Palette,
  Rocket,
  PieChart,
  Layout,
  PenTool,
  Presentation,
  Globe,
} from 'lucide-react';

type HomeProps = {
  params?: Promise<Record<string, string | string[]>>
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

export default function Home({ params, searchParams }: HomeProps) {
  if (params) use(params)
  if (searchParams) use(searchParams)
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -80px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = (entry.target as HTMLElement).id
          if (id === 'pricing-cards') {
            setIsVisible((prev) => ({
              ...prev,
              'pricing-starter': true,
              'pricing-pitch': true,
              'pricing-landing': true,
              'pricing-visual': true,
              'testimonials': true,
            }))
          } else if (id) {
            setIsVisible((prev) => ({ ...prev, [id]: true }))
          }
        }
      })
    }, observerOptions)

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Toko Desain
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              Layanan
            </a>
            <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">
              Proses
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Paket
            </a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
              Portofolio
            </a>
          </div>

          <Button asChild className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-background font-semibold rounded-full">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
              Audit Gratis Sekarang
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-700"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <div className="mb-8 inline-block">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
              🚀 Wujudkan Visi Anda
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-balance leading-tight">
            Ubah Startup Anda
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Menjadi Realitas Pasar
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-balance">
            Bundel konsultasi lengkap untuk founder: analisis pitch deck, desain web berperforma tinggi, dan branding pilihan. Semua yang Anda butuhkan untuk menarik hati investor serta pelanggan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button asChild className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-background font-semibold px-8 py-6 rounded-full text-base">
              <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.consultation)} target="_blank" rel="noopener noreferrer">
                Amankan Slot Konsultasi
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 rounded-full text-base bg-transparent">
              <a href="#pricing">
                Lihat Paket Launchpad
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center">
            {/* <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <p className="text-muted-foreground">Startup Diluncurkan</p>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50">
              <div className="text-3xl font-bold text-secondary mb-2">$2.5M+</div>
              <p className="text-muted-foreground">Pendanaan Terkumpul</p>
            </div> */}
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Kepuasan Klien</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Masalah Founder Saat Ini</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kami memahami tantangan berat yang Anda hadapi saat meluncurkan startup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Problem 1 */}
            <div
              id="problem-1"
              data-animate
              className={`p-8 rounded-2xl bg-card/50 backdrop-blur border border-border/50 transition-all duration-700 transform ${isVisible['problem-1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Kekacauan Vendor</h3>
              <p className="text-muted-foreground">
                Mengelola banyak agensi dan kontraktor itu mahal dan tidak efisien.
              </p>
            </div>

            {/* Problem 2 */}
            <div
              id="problem-2"
              data-animate
              className={`p-8 rounded-2xl bg-card/50 backdrop-blur border border-border/50 transition-all duration-700 transform ${isVisible['problem-2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Deck yang Lemah</h3>
              <p className="text-muted-foreground">
                Pitch deck yang kurang menarik gagal memikat investor dan melewatkan peluang pendanaan.
              </p>
            </div>

            {/* Problem 3 */}
            <div
              id="problem-3"
              data-animate
              className={`p-8 rounded-2xl bg-card/50 backdrop-blur border border-border/50 transition-all duration-700 transform ${isVisible['problem-3'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Website Lambat</h3>
              <p className="text-muted-foreground">
                Kehadiran web yang usang menghilangkan kepercayaan pelanggan dan merusak tingkat konversi Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Memperkenalkan: The Founder Launchpad <span className="text-2xl">🚀</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Solusi komprehensif yang menggabungkan tiga layanan esensial dalam satu paket yang kuat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <div
              id="solution-1"
              data-animate
              className={`group p-8 rounded-2xl border border-border/50 bg-gradient-to-b from-card to-card/50 backdrop-blur hover:border-primary/50 transition-all duration-500 transform ${isVisible['solution-1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Pitch Deck Analyst</h3>
                <p className="text-muted-foreground mb-4">
                  Analisis ahli dan penyempurnaan pitch deck Anda untuk memikat perhatian investor dan mengamankan pendanaan.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Deck siap presentasi investor</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Optimasi narasi</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Riset pasar mendalam</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 2 */}
            <div
              id="solution-2"
              data-animate
              className={`group p-8 rounded-2xl border border-border/50 bg-gradient-to-b from-card to-card/50 backdrop-blur hover:border-secondary/50 transition-all duration-500 transform ${isVisible['solution-2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Desain Web Berperforma</h3>
                <p className="text-muted-foreground mb-4">
                  Website secepat kilat dan dioptimalkan untuk konversi, dibangun dengan teknologi terkini.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Desain responsif</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Optimasi SEO</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Pengaturan analitik</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 3 */}
            <div
              id="solution-3"
              data-animate
              className={`group p-8 rounded-2xl border border-border/50 bg-gradient-to-b from-card to-card/50 backdrop-blur hover:border-cyan-400/50 transition-all duration-500 transform ${isVisible['solution-3'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Branding Pilihan</h3>
                <p className="text-muted-foreground mb-4">
                  Identitas merek profesional yang membedakan Anda dari kompetitor dan membangun kepercayaan.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Desain logo</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Panduan merek (guidelines)</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Agunan pemasaran</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Proses Kerja Kami</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Luncurkan startup dalam 2 minggu dengan 5 langkah proses yang efisien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: 1, title: 'Discovery', desc: 'Memahami visi dan tujuan Anda' },
              { step: 2, title: 'Strategi', desc: 'Menyusun rencana peluncuran lengkap' },
              { step: 3, title: 'Produksi', desc: 'Membangun dan mendesain semua aset' },
              { step: 4, title: 'Review', desc: 'Iterasi dan optimasi berdasarkan feedback' },
              { step: 5, title: 'Launch', desc: 'Eksekusi go-to-market' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50 text-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                {item.step < 5 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Paket Layanan Kami</h2>
            <p className="text-muted-foreground text-lg">
              Pilih paket yang sesuai dengan kebutuhan startup Anda
            </p>
          </div>

          {/* Featured Bundle Card */}
          <div className="mb-12">
            <div
              id="pricing-bundle"
              data-animate
              className={`p-8 md:p-12 rounded-2xl border-2 border-primary/60 bg-gradient-to-b from-card to-card/50 backdrop-blur overflow-hidden transform transition-all duration-700 relative ${isVisible['pricing-bundle'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
            >
              <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

              {/* Best Value Badge */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <div className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full">
                  <span className="text-sm font-bold text-background">Best Value</span>
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold">FOUNDER LAUNCHPAD</h3>
                    <p className="text-muted-foreground">Pitch Deck + Landing Page + Logo</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-3xl font-bold text-primary bg-primary/10 px-6 py-3 rounded-lg">
                      Hemat Rp 1.500.000
                    </span>
                  </div>
                  <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    Rp 6.500.000
                  </div>
                  <p className="text-muted-foreground">One-time investment</p>
                </div>

                <div className="space-y-3 mb-8">
                  {['Brand Identity', 'Investor Pitch Deck', 'Landing Page'].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <Button asChild className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-background font-semibold py-6 rounded-full text-base">
                  <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.founderLaunchpad)} target="_blank" rel="noopener noreferrer">
                    Pilih Paket Ini
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Individual Service Cards */}
          <div
            id="pricing-cards"
            data-animate
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >

            {/* Pitch Deck Card */}
            <div
              id="pricing-pitch"
              data-animate
              className={`p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur overflow-hidden transform transition-all duration-700 hover:border-secondary/50 hover:shadow-lg ${isVisible['pricing-pitch'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full filter blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PieChart className="w-6 h-6 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/30">
                    <span className="text-xs font-semibold text-purple-300">Gratis Konsultasi</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">INVESTOR READY PITCH DECK</h3>
                <div className="text-2xl font-bold text-primary mb-6">Mulai dari Rp 2.500.000</div>

                <div className="space-y-3 mb-8">
                  {[
                    'Story Arc Audit',
                    'High Impact Slides',
                    'Data Visualization Makeover',
                    'Revisi 2x Mayor, Unlimited Minor',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <Button asChild variant="outline" className="w-full border-border/50 text-foreground hover:bg-secondary/10 rounded-full font-semibold bg-transparent">
                  <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.pitchDeck)} target="_blank" rel="noopener noreferrer">
                    Pilih Paket Ini
                  </a>
                </Button>
              </div>
            </div>

            {/* Landing Page Card */}
            <div
              id="pricing-landing"
              data-animate
              className={`p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur overflow-hidden transform transition-all duration-700 hover:border-primary/50 hover:shadow-lg ${isVisible['pricing-landing'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/10 rounded-full filter blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Layout className="w-6 h-6 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-primary/20 rounded-full border border-primary/30">
                    <span className="text-xs font-semibold text-cyan-300">Gratis Hosting & Domain 1 Tahun</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">HIGH PERFORMANCE LANDING PAGE</h3>
                <div className="text-2xl font-bold text-primary mb-6">Mulai dari Rp 3.500.000</div>

                <div className="space-y-3 mb-8">
                  {[
                    'Mobile First Approach',
                    'Copywriting & CTA',
                    'Basic SEO Setup',
                    'Clean Code (React/Next.js)',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <Button asChild variant="outline" className="w-full border-border/50 text-foreground hover:bg-primary/10 rounded-full font-semibold bg-transparent">
                  <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.landingPage)} target="_blank" rel="noopener noreferrer">
                    Pilih Paket Ini
                  </a>
                </Button>
              </div>
            </div>

            {/* Visual Identity Card */}
            <div
              id="pricing-visual"
              data-animate
              className={`p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur overflow-hidden transform transition-all duration-700 hover:border-cyan-400/50 hover:shadow-lg ${isVisible['pricing-visual'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/10 rounded-full filter blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-cyan-400/20 rounded-full border border-cyan-400/30">
                    <span className="text-xs font-semibold text-cyan-300">Full Brand Kit</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">CURATED VISUAL IDENTITY</h3>
                <div className="text-2xl font-bold text-primary mb-6">Mulai dari Rp 2.000.000</div>

                <div className="space-y-3 mb-8">
                  {[
                    'Professional Logo Design',
                    'Color Palette System',
                    'Typography Guidelines',
                    'Social Media Assets',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <Button asChild variant="outline" className="w-full border-border/50 text-foreground hover:bg-primary/10 rounded-full font-semibold bg-transparent">
                  <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.visualIdentity)} target="_blank" rel="noopener noreferrer">
                    Pilih Paket Ini
                  </a>
                </Button>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Portofolio Kami</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Beberapa project terbaik yang telah kami kerjakan untuk klien kami.
            </p>
          </div>

          <div className="flex items-center justify-center">
            {/* Portfolio Item - Gemitra */}
            <a
              href="https://gemitra.com"
              target="_blank"
              rel="noopener noreferrer"
              id="portfolio-gemitra"
              data-animate
              className={`group block rounded-2xl border border-border/50 bg-card/50 backdrop-blur overflow-hidden transition-all duration-700 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transform ${isVisible['portfolio-gemitra'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              {/* Website Preview */}
              <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-card to-background">
                <img
                  src="https://image.thum.io/get/width/600/crop/400/https://gemitra.com"
                  alt="Gemitra.com - Hidden Gems Tourism Website"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full text-background font-semibold">
                    <span>Lihat Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Gemitra Jogja</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Hidden Gems Tourism — Platform wisata lokal Yogyakarta
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'Responsive', 'SEO', 'Interactive Map'].map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Apa Kata Mereka</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Kepercayaan klien adalah prioritas utama kami. Berikut adalah testimoni dari mereka yang telah bekerjasama dengan kami.
            </p>
          </div>

          <div
            id="testimonials-grid"
            data-animate
            className="flex items-center justify-center"
          >
            {[
              {
                name: "Farrel",
                rating: 5,
                comment: "Dengan harga 3,5 jt dibuatkan website sesuai yang didiskusikan alhasil mengarahkan calon client ke whatsapp dan SEO-nya langsung nomor 1 di pencarian"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-md transition-all duration-700 hover:border-primary/50 ${isVisible['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`}
                    />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{testimonial.comment}"</p>
                <div className="font-bold text-primary">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Siap Meluncurkan Startup Anda?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan 150+ founder yang telah mengubah visi mereka menjadi realitas. Mari ciptakan sesuatu yang luar biasa bersama.
          </p>

          <Button asChild className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-background font-semibold px-8 py-6 rounded-full text-base">
            <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.consultation)} target="_blank" rel="noopener noreferrer">
              Hubungi Kami di WhatsApp
              <MessageCircle className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="font-bold">Toko Desain</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Mengubah mimpi founder menjadi realitas pasar.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Pitch Deck</a></li>
                <li><a href="#" className="hover:text-primary">Desain Web</a></li>
                <li><a href="#" className="hover:text-primary">Branding</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Sumber Daya</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Blog</a></li>
                <li><a href="#" className="hover:text-primary">Studi Kasus</a></li>
                <li><a href="#" className="hover:text-primary">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Terhubung</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary">Twitter</a></li>
                <li><a href="#" className="hover:text-primary">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Toko Desain. Seluruh hak cipta dilindungi.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary">Kebijakan Privasi</a>
              <a href="#" className="hover:text-primary">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={getWhatsAppUrl(WHATSAPP_MESSAGES.consultation)}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-110 z-40"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
