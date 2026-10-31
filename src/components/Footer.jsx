import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, ShieldCheck, Truck, RotateCcw, Heart, Check, Globe, Share2 } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const Footer = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }
    setSubscribed(true);
    showToast('Thank you for subscribing to The Sunday Sprout!', 'success');
    setEmail('');
  };

  return (
    <footer className="bg-[#153D2B] text-[#F6F4EA] pt-16 pb-12 border-t border-[#A8B99A]/20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-14 border-b border-white/10 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#A8B99A]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-white">5-Pillar Audited</p>
              <p className="text-white/60 text-xs">Zero toxic chemicals or greenwashing</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#A8B99A]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-white">Zero-Plastic Delivery</p>
              <p className="text-white/60 text-xs">100% compostable paper & paper tape</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#A8B99A]">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-white">Circular Design</p>
              <p className="text-white/60 text-xs">Repairable & naturally biodegradable</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[#A8B99A]">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-white">2% Planet Pledge</p>
              <p className="text-white/60 text-xs">Directly funding native rewilding</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-14">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#A8B99A] flex items-center justify-center text-[#153D2B]">
                <Leaf className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                VERDANT
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              The digital destination for mindful everyday living. We curate audited, zero-plastic alternatives, provide actionable ecological footprint telemetry, and connect citizens building a cleaner tomorrow.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#A8B99A] hover:text-[#153D2B] transition-colors flex items-center justify-center text-white/80"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Twitter/X SVG */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#A8B99A] hover:text-[#153D2B] transition-colors flex items-center justify-center text-white/80"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn SVG */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#A8B99A] hover:text-[#153D2B] transition-colors flex items-center justify-center text-white/80"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column: Discover */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide">
              Discover
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link to="/marketplace" className="hover:text-[#A8B99A] transition-colors">
                  Eco Marketplace
                </Link>
              </li>
              <li>
                <Link to="/impact" className="hover:text-[#A8B99A] transition-colors">
                  Impact Calculator
                </Link>
              </li>
              <li>
                <Link to="/journal" className="hover:text-[#A8B99A] transition-colors">
                  Green Journal
                </Link>
              </li>
              <li>
                <Link to="/community" className="hover:text-[#A8B99A] transition-colors">
                  Weekly Green Challenges
                </Link>
              </li>
              <li>
                <Link to="/marketplace?category=Sustainable Fashion" className="hover:text-[#A8B99A] transition-colors">
                  Organic Khadi & Linen
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Company */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link to="/about" className="hover:text-[#A8B99A] transition-colors">
                  Our Mission & Values
                </Link>
              </li>
              <li>
                <Link to="/about#philosophy" className="hover:text-[#A8B99A] transition-colors">
                  The VERDANT Philosophy
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#A8B99A] transition-colors">
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link to="/contact#faq" className="hover:text-[#A8B99A] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#A8B99A] transition-colors">
                  Artisan Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Column: Newsletter Signup */}
          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold text-white tracking-wide">
              The Sunday Sprout
            </h4>
            <p className="text-xs text-white/70 leading-relaxed">
              Join 32,000+ mindful readers receiving our weekly curation of low-waste habits, seasonal recipes, and climate breakthroughs.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#A8B99A] focus:ring-1 focus:ring-[#A8B99A]"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-[#A8B99A] text-[#153D2B] hover:bg-white transition-colors flex items-center justify-center font-semibold text-xs cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
              <p className="text-[10px] text-white/50">
                Zero spam. Strictly unsubscribe anytime with 1-click.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© 2026 VERDANT Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Charter</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Stewardship</span>
            <span className="hover:text-white cursor-pointer transition-colors">Life Cycle Audit Reports</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
