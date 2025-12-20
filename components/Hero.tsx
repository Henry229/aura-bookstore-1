import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { BorderGradient } from './ui/BorderGradient';

// Declare UnicornStudio type for TypeScript
declare global {
  interface Window {
    UnicornStudio?: {
      init: () => Promise<unknown[]>;
      destroy: () => void;
    };
  }
}

const CARDS = [
  { id: 0, src: '/book-pink.png', rotate: 'rotate-[-6deg]', translate: 'translate-y-4', alt: '생활영어 영작연습 핑크 시리즈' },
  { id: 1, src: '/book-purple.png', rotate: 'rotate-[-2deg]', translate: '-translate-y-2', alt: '생활영어 영작연습 퍼플 시리즈' },
  { id: 2, src: '/book-black.png', rotate: 'rotate-[3deg]', translate: 'translate-y-3', alt: '생활영어 영작연습 블랙 시리즈' },
  { id: 3, src: '/english-expression.png', rotate: 'rotate-0', translate: '-translate-y-1', alt: 'English Expression' },
  { id: 4, src: '/english-pattern-40.png', rotate: 'rotate-[-3deg]', translate: 'translate-y-4', alt: 'English Pattern 40' },
  { id: 5, src: '/master-phraseverbal.png', rotate: 'rotate-[5deg]', translate: 'translate-y-2', alt: 'Master Phrase Verbal' },
];

export const Hero: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setActiveCard(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Initialize Unicorn Studio
  useEffect(() => {
    if (window.UnicornStudio) {
      window.UnicornStudio.init().then((scenes) => {
        console.log('Unicorn Studio initialized:', scenes);
      }).catch((err) => {
        console.error('Unicorn Studio error:', err);
      });
    }

    return () => {
      if (window.UnicornStudio) {
        window.UnicornStudio.destroy();
      }
    };
  }, []);

  const handleCardClick = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <section className="relative pt-36 pb-28 sm:pt-48 sm:pb-32 overflow-hidden">
        {/* Background Aurora - Unicorn Studio WebGL */}
        <div
          data-us-project="ILgOO23w4wEyPQOKyLO4"
          className="pointer-events-none absolute inset-0 z-0"
          style={{ width: '100%', height: '100%' }}
        ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Headline */}
        <div className="mx-auto max-w-4xl text-center animate-fade-slide-in">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-[1.06] tracking-tighter font-semibold">
            Showcase your work to
            <span className="block bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              the world.
            </span>
          </h1>
        </div>

        {/* Card Rail */}
        <div className="mt-12 sm:mt-20 relative max-w-5xl mx-auto animate-fade-slide-in" style={{ animationDelay: '0.3s' }}>
          
          {/* Creator Tags */}
          <div className="absolute -top-5 sm:-top-7 left-[12%] sm:left-[16%] z-40">
            <BorderGradient className="inline-flex items-center gap-2 text-sm font-medium text-white bg-blue-600 rounded-full px-3.5 py-1.5 shadow-md">
              designer <ArrowUpRight size={16} />
            </BorderGradient>
             <div className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-blue-600"></div>
          </div>

          <div className="absolute -top-4 sm:-top-6 right-[10%] sm:right-[14%] z-40">
             <BorderGradient className="inline-flex items-center gap-2 text-sm font-medium text-white bg-orange-500 rounded-full px-3.5 py-1.5 shadow-md">
              artist <ArrowUpRight size={16} />
            </BorderGradient>
            <div className="absolute -bottom-1 left-6 h-2 w-2 rotate-45 bg-orange-500"></div>
          </div>

          {/* Cards Grid */}
          <div className="flex justify-center" ref={containerRef}>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-5 max-w-5xl mx-auto">
              {CARDS.map((card) => {
                const isActive = activeCard === card.id;
                const isBlurred = activeCard !== null && !isActive;

                return (
                  <div
                    key={card.id}
                    className={`self-end cursor-pointer transition-all duration-700 ease-out
                      ${isActive ? 'z-50 scale-[1.1] !rotate-0 !translate-y-0' : 'hover:scale-105'}
                      ${isBlurred ? 'blur-[8px] opacity-40' : ''}
                      ${!isActive ? `${card.rotate} ${card.translate}` : ''}
                    `}
                    onClick={(e) => handleCardClick(e, card.id)}
                    style={{ transformOrigin: 'center bottom' }}
                  >
                    <BorderGradient className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-neutral-800 aspect-[3/4]">
                      <img
                        src={card.src}
                        alt={card.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </BorderGradient>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Subcopy */}
        <p className="mx-auto mt-12 max-w-xl text-center text-base text-neutral-300 animate-fade-slide-in" style={{ animationDelay: '0.5s' }}>
          Build your professional portfolio, connect with collectors, and share your creative journey with a global community.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-slide-in" style={{ animationDelay: '0.7s' }}>
          <button className="group relative h-11 inline-flex items-center justify-center gap-2 rounded-full px-8 outline outline-1 outline-white/10 hover:outline-white/20 hover:-translate-y-0.5 transition-all duration-500">
            {/* Custom Button Background */}
            <span className="absolute inset-0 rounded-full overflow-hidden">
                <span className="absolute inset-0 rounded-full bg-gradient-to-br from-neutral-900 via-[#1e1e21] to-[#2d2d32]"></span>
                <span className="absolute -top-[52px] right-1 size-20 bg-blue-400 opacity-15 blur-[35px]"></span>
                <span className="absolute -bottom-[42px] -left-[19px] size-20 bg-purple-400 opacity-10 blur-[40px]"></span>
            </span>
             <span className="relative z-10 text-white font-medium text-sm">Get started today</span>
          </button>
          
          <BorderGradient as="a" href="#" className="inline-flex items-center gap-2 rounded-full bg-neutral-800/60 px-5 py-3 text-sm font-medium text-neutral-100 hover:bg-neutral-800 ring-1 ring-white/10">
            View Examples <ExternalLink size={16} />
          </BorderGradient>
        </div>
      </div>
      
      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 mt-28">
        <div className="h-px w-full bg-white/10"></div>
      </div>
    </section>
  );
};