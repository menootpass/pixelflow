'use client';

import { useState, useEffect } from 'react';
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
} from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
        }
      });
    }, observerOptions);

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
              PixelFlow
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

          <Button
            className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-background font-semibold rounded-full"
          >
            Book Free Audit
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
            <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-background font-semibold px-8 py-6 rounded-full text-base">
              Amankan Slot Konsultasi
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 px-8 py-6 rounded-full text-base bg-transparent"
            >
              Lihat Paket Launchpad
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
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Founder Launchpad Bundle</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to launch successfully, in one package.
            </p>
          </div>

          <div
            id="pricing-card"
            data-animate
            className={`p-8 md:p-12 rounded-2xl border border-primary/30 bg-gradient-to-b from-card to-card/50 backdrop-blur overflow-hidden transform transition-all duration-700 ${
              isVisible['pricing-card'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-purple-600/20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-3xl text-muted-foreground line-through">Rp 8.5M</span>
                  <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Rp 6.5M
                  </span>
                </div>
                <p className="text-muted-foreground mt-2">One-time investment</p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  'Pitch Deck Analysis & Optimization',
                  'High-Performance Website Development',
                  'Complete Brand Identity Design',
                  ' 2-Week Turnaround Guarantee',
                  'Investor Presentation Coaching',
                  '3 Months Post-Launch Support',
                  'Marketing Collateral Package',
                  'SEO & Analytics Setup',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-background font-semibold py-6 rounded-full text-base">
                Book Your Launchpad Session
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
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

          <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-background font-semibold px-8 py-6 rounded-full text-base">
            Chat Kami di WhatsApp
            <MessageCircle className="w-4 h-4 ml-2" />
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
                <span className="font-bold">PixelFlow</span>
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
            <p>&copy; 2024 PixelFlow. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all hover:scale-110 z-40">
        <MessageCircle className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
