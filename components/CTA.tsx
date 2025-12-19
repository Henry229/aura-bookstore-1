import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { BorderGradient } from './ui/BorderGradient';
import { ChevronRight, ExternalLink } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <SectionWrapper>
        <BorderGradient className="relative rounded-3xl bg-neutral-900/60 p-8 sm:p-16 ring-1 ring-white/10 overflow-hidden text-center"
        style={{ background: 'radial-gradient(900px 400px at 50% 50%, rgba(168,85,247,0.2), transparent)' }}>
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
             {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-6">
                    Ready to showcase your work?
                </h2>
                <p className="text-base sm:text-lg text-neutral-300 mb-10">
                    Join thousands of creative professionals who trust our platform to present their best work. Start building your portfolio today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="group relative h-12 inline-flex items-center justify-center gap-2 rounded-full px-8 outline outline-1 outline-white/10 hover:outline-white/20 hover:-translate-y-0.5 transition-all duration-500 w-full sm:w-auto">
                        <span className="absolute inset-0 rounded-full overflow-hidden">
                            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-900 via-[#1e1e21] to-[#2d2d32]"></span>
                            <span className="absolute -top-[52px] right-1 size-20 bg-blue-400 opacity-15 blur-[35px]"></span>
                            <span className="absolute -bottom-[42px] -left-[19px] size-20 bg-purple-400 opacity-10 blur-[40px]"></span>
                        </span>
                        <span className="relative z-10 text-white font-medium text-[15px] flex items-center gap-2">
                            Start for Free <ChevronRight size={16} />
                        </span>
                    </button>

                    <a href="#" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-neutral-300 ring-1 ring-white/10 hover:bg-white/5 transition w-full sm:w-auto justify-center">
                        View Live Examples <ExternalLink size={16} />
                    </a>
                </div>

                <p className="text-xs text-neutral-400 mt-6">
                    No credit card required • Free forever • Upgrade anytime
                </p>
            </div>
        </BorderGradient>
      </SectionWrapper>
    </section>
  );
};