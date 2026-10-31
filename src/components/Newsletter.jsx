import React, { useState } from 'react';
import { Mail, Check, Sparkles } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const Newsletter = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please provide a valid email address.', 'error');
      return;
    }

    setIsSubmitted(true);
    showToast('Welcome to The Sunday Sprout community!', 'success');
    setEmail('');
  };

  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#153D2B] text-[#F6F4EA] p-8 sm:p-12 lg:p-16 border border-[#A8B99A]/30 shadow-2xl">
      {/* Decorative nature glow circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#A8B99A]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#92765A]/15 blur-3xl pointer-events-none" />

      <div className="relative max-w-2xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-[#A8B99A] uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Sunday Sprout</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Slow, thoughtful words for a rushed world.
        </h2>

        <p className="text-sm sm:text-base text-white/75 leading-relaxed">
          Every Sunday morning, join 32,000+ mindful citizens receiving our quiet dispatch on low-waste living, seasonal whole-food cooking, and regenerative breakthroughs. Zero advertising spam.
        </p>

        {isSubmitted ? (
          <div className="p-4 rounded-2xl bg-white/15 border border-[#A8B99A]/40 flex items-center justify-center gap-3 text-sm font-medium text-[#A8B99A]">
            <Check className="w-5 h-5 text-white" />
            <span>You're on the list! Check your inbox for our welcome guide: "12 Simple Swaps for a Low-Waste Home".</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your personal email"
                required
                className="w-full bg-white/10 border border-white/20 rounded-full pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#A8B99A] focus:ring-2 focus:ring-[#A8B99A]/40 transition-all"
              />
            </div>
            <button
              type="submit"
              className="px-7 py-3.5 rounded-full bg-[#A8B99A] hover:bg-white text-[#153D2B] font-bold text-sm tracking-wide transition-all shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
        )}

        <div className="flex items-center justify-center gap-6 text-[11px] text-white/50 pt-2">
          <span>✓ Published weekly on Sundays</span>
          <span>✓ 1-click unsubscribe anytime</span>
          <span>✓ Carbon-neutral email servers</span>
        </div>
      </div>
    </section>
  );
};

