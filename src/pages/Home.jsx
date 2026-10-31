import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles, ShieldCheck, HeartHandshake, RotateCcw, Truck, Compass, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { PLATFORM_STATS, SUSTAINABILITY_PILLARS } from '../data/stats';
import { CHALLENGES, COMMUNITY_STORIES } from '../data/challenges';
import { ProductCard } from '../components/ProductCard';
import { StatisticsCard } from '../components/StatisticsCard';
import { ChallengeCard } from '../components/ChallengeCard';
import { Newsletter } from '../components/Newsletter';

export const Home = () => {
  const featuredProducts = PRODUCTS.filter((p) => p.featured).slice(0, 4);
  const featuredChallenges = CHALLENGES.slice(0, 2);

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Copy (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#153D2B]/10 border border-[#A8B99A]/40 text-xs font-semibold text-[#153D2B] tracking-wide">
                <Leaf className="w-3.5 h-3.5 text-[#153D2B]" />
                <span>Small Choices. Lasting Impact.</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#153D2B] tracking-tight leading-[1.08]">
                Live Better. <br />
                <span className="italic font-normal text-[#92765A]">Leave a Lighter</span> Footprint.
              </h1>

              <p className="text-base sm:text-lg text-[#5D6B60] leading-relaxed max-w-xl">
                Discover thoughtful products, smarter habits, and a community building a greener tomorrow. Verified plastic-free alternatives that bring tranquility to your home and healing to our planet.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/marketplace"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#153D2B] text-[#F6F4EA] font-semibold text-sm hover:bg-[#1D543B] transition-all shadow-md active:scale-98"
                >
                  <span>Explore Marketplace</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/impact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#153D2B] border border-[#A8B99A]/50 font-semibold text-sm hover:bg-[#ECE8D7] transition-all shadow-xs"
                >
                  <Compass className="w-4 h-4 text-[#92765A]" />
                  <span>Calculate Your Impact</span>
                </Link>
              </div>

              {/* Verified Trust Badges */}
              <div className="pt-4 border-t border-[#A8B99A]/30 flex flex-wrap items-center gap-6 text-xs text-[#5D6B60]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#153D2B]" />
                  <span>100% Plastic-Free Logistics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#153D2B]" />
                  <span>Fair Trade Certified Artisans</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#153D2B]" />
                  <span>Carbon-Neutral Packaging</span>
                </div>
              </div>
            </div>

            {/* Right Visual (5 cols) - Asymmetric Editorial Collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Image */}
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative bg-[#ECE8D7]">
                  <img
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80"
                    alt="Sustainable living botanical home"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#153D2B]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-2xl bg-black/20 backdrop-blur-md border border-white/20">
                    <p className="text-xs uppercase tracking-widest text-[#A8B99A] font-semibold">Editorial Feature</p>
                    <p className="font-serif text-lg font-bold">Cradle to Cradle Design</p>
                    <p className="text-xs text-white/80 mt-0.5">Every element engineered to return harmlessly to earth.</p>
                  </div>
                </div>

                {/* Floating Impact Card */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-[#A8B99A]/30 flex items-center gap-3.5 max-w-[240px]">
                  <div className="w-10 h-10 rounded-full bg-[#153D2B] flex items-center justify-center text-[#A8B99A] shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-lg font-bold text-[#153D2B] leading-none block">142 Tonnes</span>
                    <span className="text-[11px] text-[#5D6B60] leading-tight block mt-0.5">Plastic landfill waste averted to date</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUSTAINABILITY STATISTICS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#92765A]">
            Measurable Change
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#153D2B]">
            Collective action, tangible results.
          </h2>
          <p className="text-xs text-[#92765A]">
            *Illustrative platform analytics updated through verified community member swap audits.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLATFORM_STATS.map((stat) => (
            <StatisticsCard key={stat.id} stat={stat} />
          ))}
        </div>
      </section>

      {/* 3. FEATURED PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#92765A]">
              Curated Circular Goods
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#153D2B] mt-1">
              Featured Eco-Essentials
            </h2>
            <p className="text-sm text-[#5D6B60] mt-1 max-w-lg">
              Every item passes our rigorous 5-Pillar Environmental Audit before reaching our shelves.
            </p>
          </div>
          <Link
            to="/marketplace"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#153D2B] hover:text-[#92765A] transition-colors"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. WHY SUSTAINABLE LIVING MATTERS (PILLARS) */}
      <section className="bg-[#153D2B] text-[#F6F4EA] py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 px-6 sm:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl text-left space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A8B99A]">
              Our Guiding Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Why sustainable living is the future of good living.
            </h2>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed">
              We reject the false compromise between refined lifestyle aesthetics and planetary boundaries. True quality is timeless, circular, and respectful of the hands that make it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SUSTAINABILITY_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#A8B99A] text-[#153D2B] flex items-center justify-center font-bold">
                  {pillar.id === 'pillar-1' && <ShieldCheck className="w-5 h-5" />}
                  {pillar.id === 'pillar-2' && <RotateCcw className="w-5 h-5" />}
                  {pillar.id === 'pillar-3' && <Truck className="w-5 h-5" />}
                  {pillar.id === 'pillar-4' && <HeartHandshake className="w-5 h-5" />}
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE SUSTAINABILITY CHALLENGES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#92765A]">
              Build Green Habits
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#153D2B] mt-1">
              Active Community Challenges
            </h2>
            <p className="text-sm text-[#5D6B60] mt-1 max-w-lg">
              Join thousands of conscious citizens taking bite-sized weekly actions. Earn Eco-Points and unlock achievements.
            </p>
          </div>
          <Link
            to="/community"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#153D2B] hover:text-[#92765A] transition-colors"
          >
            <span>Explore All Challenges</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </section>

      {/* 6. COMMUNITY STORIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#92765A]">
            Real Impact Voices
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#153D2B]">
            Stories from the VERDANT Community
          </h2>
          <p className="text-sm text-[#5D6B60]">
            Hear how citizens across India are turning small daily rituals into lasting environmental change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMMUNITY_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl p-7 border border-[#A8B99A]/30 shadow-xs flex flex-col justify-between space-y-6"
            >
              <p className="font-serif text-sm sm:text-base italic text-[#252B26] leading-relaxed">
                "{story.story}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-[#A8B99A]/20">
                <div className="flex items-center gap-3">
                  <img
                    src={story.avatar}
                    alt={story.author}
                    className="w-10 h-10 rounded-full object-cover border border-[#A8B99A]/40"
                  />
                  <div>
                    <h4 className="font-bold text-xs text-[#153D2B]">{story.author}</h4>
                    <span className="text-[11px] text-[#92765A]">{story.location}</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#153D2B]/10 text-[#153D2B] text-[10px] font-bold">
                  {story.stat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. NEWSLETTER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Newsletter />
      </section>
    </div>
  );
};

