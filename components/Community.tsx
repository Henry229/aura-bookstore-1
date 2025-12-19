import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { ChevronRight } from 'lucide-react';

const IMAGES = [
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de692cd3-6ed5-40da-b589-663e89889a1c_800w.jpg',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42dfe760-aef6-44a2-bff9-70aa005c5961_800w.jpg',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c18d9fac-84d4-4727-95df-38b04c62ac05_800w.jpg',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3e3fffd-33c5-442f-924a-7bc1032b2c0f_800w.jpg',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31996fe3-f9da-42d7-bf65-2cc5d5417271_800w.jpg',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5989c16d-4aa3-4351-bfdb-fac959736459_800w.jpg',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c39c735-18f1-4b74-aa61-180fbb2b4770_800w.jpg',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf90a7bf-fee3-4a9d-887b-c46bfea61ba8_800w.jpg',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6209234e-73ff-4176-bf91-c05fa95cc596_800w.jpg',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f4ec54c-12b4-4eb2-a0c3-1d78cb6c9e02_800w.jpg',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cfa0961-8c53-4d57-b87c-3b8eaffcd08b_800w.jpg',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42f0787e-2f7f-4ae7-9c64-3f1d597bf1b8_800w.jpg',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8701b7a-a3f2-4ad0-95be-f2f027c8e390_800w.jpg',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83ca20c0-64e5-412d-9c79-224a4ae90b74_800w.jpg',
  'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c920d31f-46c8-4f39-957b-9a8d8e511a1a_800w.jpg',
];

export const Community: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
      <div className="text-center max-w-4xl mx-auto">
        <SectionWrapper>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-violet-300 bg-violet-500/15 border border-violet-400/30 rounded-full px-3 py-1.5 mb-6">
            Creative Community
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4">
            Join 50,000+ creative professionals from 180+ countries
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base mb-6">
            Connect with designers, artists, photographers, and creative innovators building exceptional portfolios and growing their careers.
            </p>
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-violet-400 transition-colors">
            Join Our Community
            <ChevronRight size={16} />
            </a>
        </SectionWrapper>
      </div>

      <div className="relative mt-12">
        <div className="mx-auto max-w-6xl overflow-hidden" style={{
            maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)'
        }}>
            <div className="flex w-max animate-marquee">
                {/* Original Items */}
                <div className="flex gap-4 pr-4">
                    {IMAGES.map((src, idx) => (
                        <div key={`g1-${idx}`} className="w-32 h-20 sm:w-48 sm:h-28 lg:w-56 lg:h-36 rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 flex-shrink-0">
                            <img src={src} alt="Member" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
                 {/* Duplicated Items for Loop */}
                <div className="flex gap-4 pr-4">
                    {IMAGES.map((src, idx) => (
                        <div key={`g2-${idx}`} className="w-32 h-20 sm:w-48 sm:h-28 lg:w-56 lg:h-36 rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 flex-shrink-0">
                             <img src={src} alt="Member" className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};