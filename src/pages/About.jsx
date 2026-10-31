import React from 'react';
import { Leaf, ShieldCheck, HeartHandshake, RotateCcw, Target, Sparkles, Award } from 'lucide-react';
import { VERDANT_MISSION, CORE_VALUES, TEAM_MEMBERS, MILESTONES } from '../data/team';

export const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-20 sm:space-y-28 text-left">
      {/* 1. Hero Mission Statement */}
      <section className="space-y-6 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#153D2B]/10 text-xs font-semibold text-[#153D2B]">
          <Leaf className="w-3.5 h-3.5" />
          <span>About VERDANT</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#153D2B] tracking-tight leading-[1.12]">
          We believe small daily choices create lasting planetary balance.
        </h1>
        <p className="text-base sm:text-lg text-[#5D6B60] leading-relaxed">
          {VERDANT_MISSION.headline}
        </p>
      </section>

      {/* 2. Visual Story Collage */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 aspect-[16/10] rounded-3xl overflow-hidden bg-[#ECE8D7] border border-[#A8B99A]/30 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80"
            alt="Artisan handloom weaving in village workshop"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:col-span-5 space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#A8B99A]/30 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-[#92765A]">
            Our Vision
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#153D2B] leading-snug">
            {VERDANT_MISSION.vision}
          </h2>
          <p className="text-xs sm:text-sm text-[#5D6B60] leading-relaxed">
            {VERDANT_MISSION.subtext}
          </p>
        </div>
      </section>

      {/* 3. The VERDANT Philosophy (Core Values) */}
      <section id="philosophy" className="space-y-10">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#92765A]">
            Ethical Framework
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#153D2B]">
            Our Core Sustainability Pillars
          </h2>
          <p className="text-sm text-[#5D6B60]">
            Every product stocked, challenge designed, and partnership formed is evaluated against four non-negotiable standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-white border border-[#A8B99A]/30 shadow-xs hover:border-[#153D2B]/40 hover:shadow-md transition-all space-y-4"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#153D2B] text-[#A8B99A] flex items-center justify-center font-bold">
                {idx === 0 && <Leaf className="w-5 h-5" />}
                {idx === 1 && <ShieldCheck className="w-5 h-5" />}
                {idx === 2 && <HeartHandshake className="w-5 h-5" />}
                {idx === 3 && <RotateCcw className="w-5 h-5" />}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#153D2B]">
                {val.title}
              </h3>
              <p className="text-xs text-[#5D6B60] leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Leadership & Auditing Team */}
      <section className="space-y-10">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#92765A]">
            People Behind the Purpose
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#153D2B]">
            Meet the Stewards
          </h2>
          <p className="text-sm text-[#5D6B60]">
            A multidisciplinary team of material scientists, environmental economists, agroforesters, and circular designers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-[#A8B99A]/30 shadow-xs hover:shadow-lg transition-all space-y-4 p-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden bg-[#ECE8D7]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#153D2B]">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#92765A] font-semibold mt-0.5">
                    {member.role}
                  </p>
                </div>
                <p className="text-xs text-[#5D6B60] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Company Milestones Timeline */}
      <section className="bg-white p-8 sm:p-12 rounded-3xl border border-[#A8B99A]/30 shadow-xs space-y-10">
        <div className="max-w-xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#92765A]">
            Our Journey
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#153D2B]">
            Key Milestones in Circular Progress
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {MILESTONES.map((m, idx) => (
            <div key={idx} className="space-y-3 relative">
              <span className="font-serif text-3xl font-extrabold text-[#153D2B]/30 block">
                {m.year}
              </span>
              <h3 className="font-serif text-lg font-bold text-[#153D2B]">
                {m.title}
              </h3>
              <p className="text-xs text-[#5D6B60] leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

