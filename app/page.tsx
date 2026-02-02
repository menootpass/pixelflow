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
  Sparkles,
  Code2,
  Palette,
  Rocket,
  PieChart,
  Layout,
  PenTool,
  Presentation,
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
              'pricing-pitch': true,
              'pricing-landing': true,
              'pricing-visual': true,
              'pricing-presentation': true,
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
              Services
            </a>
            <a href="#process" className="text-sm font-medium hover:text-primary transition-colors">
              Process
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </a>
          </div>

          <Button asChild className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-background font-semibold rounded-full">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
              Book Free Audit
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
              🚀 Launch Your Vision
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-balance leading-tight">
            Transform Your Startup
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Into Market Reality
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed text-balance">
            Complete founder consultation bundle: pitch deck analysis, high-performance web design, and curated branding. Everything you need to impress investors and customers.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <p className="text-muted-foreground">Startups Launched</p>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50">
              <div className="text-3xl font-bold text-secondary mb-2">$2.5B</div>
              <p className="text-muted-foreground">Funding Raised</p>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
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
              We understand the challenges you face when launching your startup.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Problem 1 */}
            <div
              id="problem-1"
              data-animate
              className={`p-8 rounded-2xl bg-card/50 backdrop-blur border border-border/50 transition-all duration-700 transform ${
                isVisible['problem-1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Vendor Chaos</h3>
              <p className="text-muted-foreground">
                Managing multiple agencies and contractors is expensive and inefficient.
              </p>
            </div>

            {/* Problem 2 */}
            <div
              id="problem-2"
              data-animate
              className={`p-8 rounded-2xl bg-card/50 backdrop-blur border border-border/50 transition-all duration-700 transform ${
                isVisible['problem-2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bad Decks</h3>
              <p className="text-muted-foreground">
                Weak pitch decks fail to capture investor attention and miss funding opportunities.
              </p>
            </div>

            {/* Problem 3 */}
            <div
              id="problem-3"
              data-animate
              className={`p-8 rounded-2xl bg-card/50 backdrop-blur border border-border/50 transition-all duration-700 transform ${
                isVisible['problem-3'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Slow Websites</h3>
              <p className="text-muted-foreground">
                Outdated web presence loses customer trust and hurts your conversion rates.
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
              Memkenalkan: The Founder Launchpad <span className="text-2xl">🚀</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive solution that combines three essential services into one powerful package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <div
              id="solution-1"
              data-animate
              className={`group p-8 rounded-2xl border border-border/50 bg-gradient-to-b from-card to-card/50 backdrop-blur hover:border-primary/50 transition-all duration-500 transform ${
                isVisible['solution-1'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Pitch Deck Analyst</h3>
                <p className="text-muted-foreground mb-4">
                  Expert analysis and refinement of your pitch deck to capture investor attention and secure funding.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Investor-ready deck</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Narrative optimization</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Market research</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 2 */}
            <div
              id="solution-2"
              data-animate
              className={`group p-8 rounded-2xl border border-border/50 bg-gradient-to-b from-card to-card/50 backdrop-blur hover:border-secondary/50 transition-all duration-500 transform ${
                isVisible['solution-2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">High-Performance Web</h3>
                <p className="text-muted-foreground mb-4">
                  Lightning-fast, conversion-optimized websites built with cutting-edge technology.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Responsive design</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>SEO optimized</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Analytics setup</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution 3 */}
            <div
              id="solution-3"
              data-animate
              className={`group p-8 rounded-2xl border border-border/50 bg-gradient-to-b from-card to-card/50 backdrop-blur hover:border-cyan-400/50 transition-all duration-500 transform ${
                isVisible['solution-3'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Curated Branding</h3>
                <p className="text-muted-foreground mb-4">
                  Professional brand identity that sets you apart and builds customer trust.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Logo design</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Brand guidelines</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>Marketing collateral</span>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Launch in 2 weeks with our streamlined 5-step process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: 1, title: 'Discovery', desc: 'Understand your vision and goals' },
              { step: 2, title: 'Strategy', desc: 'Create comprehensive launch plan' },
              { step: 3, title: 'Production', desc: 'Build and design all assets' },
              { step: 4, title: 'Review', desc: 'Iterate and optimize with feedback' },
              { step: 5, title: 'Launch', desc: 'Go-to-market execution' },
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
              className={`p-8 md:p-12 rounded-2xl border-2 border-primary/60 bg-gradient-to-b from-card to-card/50 backdrop-blur overflow-hidden transform transition-all duration-700 relative ${
                isVisible['pricing-bundle'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {/* Pitch Deck Card */}
            <div
              id="pricing-pitch"
              data-animate
              className={`p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur overflow-hidden transform transition-all duration-700 hover:border-secondary/50 hover:shadow-lg ${
                isVisible['pricing-pitch'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
              className={`p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur overflow-hidden transform transition-all duration-700 hover:border-primary/50 hover:shadow-lg ${
                isVisible['pricing-landing'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
                    'Clean Code',
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
              className={`p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur overflow-hidden transform transition-all duration-700 hover:border-secondary/50 hover:shadow-lg ${
                isVisible['pricing-visual'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full filter blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PenTool className="w-6 h-6 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/30">
                    <span className="text-xs font-semibold text-purple-300">Best for New Brands</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">VISUAL IDENTITY (LOGO)</h3>
                <div className="text-2xl font-bold text-primary mb-6">Mulai dari Rp 2.000.000</div>

                <div className="space-y-3 mb-8">
                  {[
                    'Filosofi',
                    '3 Konsep Logo',
                    'Mockup Preview',
                    '3 Revisi Mayor & Bebas Revisi Minor',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <Button asChild variant="outline" className="w-full border-border/50 text-foreground hover:bg-secondary/10 rounded-full font-semibold bg-transparent">
                  <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.visualIdentity)} target="_blank" rel="noopener noreferrer">
                    Pilih Paket Ini
                  </a>
                </Button>
              </div>
            </div>

            {/* Presentation Polishing & Design Card */}
            <div
              id="pricing-presentation"
              data-animate
              className={`p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur overflow-hidden transform transition-all duration-700 hover:border-primary/50 hover:shadow-lg ${
                isVisible['pricing-presentation'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-cyan-400/10 rounded-full filter blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Presentation className="w-6 h-6 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-primary/20 rounded-full border border-primary/30">
                    <span className="text-xs font-semibold text-cyan-300">Gratis Konsultasi</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">PRESENTATION POLISHING & DESIGN</h3>
                <div className="text-2xl font-bold text-primary mb-6">Mulai dari Rp 150.000</div>

                <div className="space-y-3 mb-8">
                  {[
                    'Dokumen/paragraf menjadi poin-poin slide',
                    'Menyusun alur presentasi agar lebih jelas dan rapi',
                    'Desain slide profesional',
                    '1x revisi',
                    'File PDF + link Canva',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <Button asChild variant="outline" className="w-full border-border/50 text-foreground hover:bg-primary/10 rounded-full font-semibold bg-transparent">
                  <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.presentationPolishing)} target="_blank" rel="noopener noreferrer">
                    Pilih Paket Ini
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Launch Your Startup?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Join 150+ founders who transformed their vision into reality. Let's build something extraordinary together.
          </p>

          <Button asChild className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-background font-semibold px-8 py-6 rounded-full text-base">
            <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.consultation)} target="_blank" rel="noopener noreferrer">
              Chat Kami di WhatsApp
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
                Transforming founder dreams into market reality.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Pitch Deck</a></li>
                <li><a href="#" className="hover:text-primary">Web Design</a></li>
                <li><a href="#" className="hover:text-primary">Branding</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Blog</a></li>
                <li><a href="#" className="hover:text-primary">Case Studies</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary">Twitter</a></li>
                <li><a href="#" className="hover:text-primary">Instagram</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Toko Desain. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
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
