import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { BorderGradient } from './ui/BorderGradient';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <SectionWrapper className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center rounded-full bg-neutral-900/70 ring-1 ring-white/10 px-3 py-1 text-xs text-neutral-300 border border-white/5 mb-6">
          Simple Pricing
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4">
          Choose Your Perfect Plan
        </h2>
        <p className="text-neutral-300">
          Start free and scale as you grow. All plans include our core features.
        </p>
      </SectionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter */}
        <SectionWrapper delay={100}>
            <BorderGradient className="bg-neutral-900/60 rounded-2xl p-6 sm:p-8 h-full ring-1 ring-white/10 flex flex-col">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <h3 className="text-xl font-semibold">Starter</h3>
                <p className="text-sm text-neutral-400 mt-2">Perfect for getting started</p>
                <div className="mt-6 mb-8">
                    <span className="text-5xl font-semibold tracking-tight">$0</span>
                    <span className="text-neutral-400 text-base">/month</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                    {['5 projects', 'Basic templates', 'Community support', '1GB storage'].map(f => (
                        <li key={f} className="flex items-center gap-3 text-sm text-neutral-300">
                            <Check size={20} className="text-emerald-400" /> {f}
                        </li>
                    ))}
                </ul>
                <BorderGradient as="button" className="w-full py-3 rounded-full bg-neutral-800/60 text-sm font-medium text-neutral-100 hover:bg-neutral-800 transition ring-1 ring-white/10">
                    Get Started
                </BorderGradient>
            </BorderGradient>
        </SectionWrapper>

        {/* Pro */}
        <SectionWrapper delay={200}>
            <BorderGradient className="bg-neutral-900/60 rounded-2xl p-6 sm:p-8 h-full ring-1 ring-violet-400/30 flex flex-col relative md:scale-105 shadow-2xl shadow-violet-500/20" 
            style={{ background: 'radial-gradient(900px 220px at 50% 50%, rgba(168,85,247,0.22), transparent)' }}>
                 <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent"></div>
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-violet-500 px-3 py-1 text-xs font-medium text-white">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold">Pro</h3>
                <p className="text-sm text-neutral-400 mt-2">For serious creatives</p>
                <div className="mt-6 mb-8">
                    <span className="text-5xl font-semibold tracking-tight">$19</span>
                    <span className="text-neutral-400 text-base">/month</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                    {['Unlimited projects', 'Premium templates', 'Priority support', '100GB storage', 'Custom domain', 'Analytics dashboard'].map(f => (
                        <li key={f} className="flex items-center gap-3 text-sm text-neutral-300">
                            <Check size={20} className="text-emerald-400" /> {f}
                        </li>
                    ))}
                </ul>
                <button className="w-full py-3 rounded-full bg-violet-500 text-sm font-semibold text-white hover:bg-violet-400 transition shadow-lg shadow-violet-500/30">
                    Start Pro Trial
                </button>
            </BorderGradient>
        </SectionWrapper>

        {/* Enterprise */}
        <SectionWrapper delay={300}>
            <BorderGradient className="bg-neutral-900/60 rounded-2xl p-6 sm:p-8 h-full ring-1 ring-white/10 flex flex-col">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                <h3 className="text-xl font-semibold">Enterprise</h3>
                <p className="text-sm text-neutral-400 mt-2">For teams and agencies</p>
                <div className="mt-6 mb-8">
                    <span className="text-5xl font-semibold tracking-tight">$49</span>
                    <span className="text-neutral-400 text-base">/month</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                    {['Everything in Pro', 'Team collaboration', 'White-label options', '1TB storage', 'Dedicated account manager', 'API access'].map(f => (
                        <li key={f} className="flex items-center gap-3 text-sm text-neutral-300">
                            <Check size={20} className="text-emerald-400" /> {f}
                        </li>
                    ))}
                </ul>
                <BorderGradient as="button" className="w-full py-3 rounded-full bg-neutral-800/60 text-sm font-medium text-neutral-100 hover:bg-neutral-800 transition ring-1 ring-white/10">
                    Contact Sales
                </BorderGradient>
            </BorderGradient>
        </SectionWrapper>
      </div>
    </section>
  );
};