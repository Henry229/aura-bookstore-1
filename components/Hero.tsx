import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
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

interface Book {
  id: number;
  title: string;
  subtitle: string;
  series: string;
  image: string;
  gradient: string;
  color: string;
}

const BOOKS: Book[] = [
  { id: 1, title: '올쏘의 영어', subtitle: '생활영어 영작연습 (핑크)', series: '핑크 시리즈', image: '/pink.webp', gradient: 'from-pink-500 to-rose-900', color: 'bg-pink-800' },
  { id: 2, title: '올쏘의 영어', subtitle: '생활영어 영작연습 (퍼플)', series: '퍼플 시리즈', image: '/purple.webp', gradient: 'from-purple-800 to-indigo-950', color: 'bg-purple-900' },
  { id: 3, title: '올쏘의 영어', subtitle: '생활영어 영작연습 (블랙)', series: '블랙 시리즈', image: '/black.webp', gradient: 'from-zinc-700 to-zinc-950', color: 'bg-zinc-800' },
  { id: 4, title: '올쏘의 영어', subtitle: '구동사 마스터', series: '마스터 시리즈', image: '/phrase-master.webp', gradient: 'from-amber-500 to-yellow-800', color: 'bg-amber-700' },
  { id: 5, title: '올쏘의 영어', subtitle: '영어표현집 150', series: '표현집 시리즈', image: '/expression.webp', gradient: 'from-blue-900 to-slate-950', color: 'bg-blue-900' },
];

// Book dimensions (matching image ratio 1410:2250 ≈ 1:1.6)
const BASE_WIDTH = 280;
const BASE_HEIGHT = 448; // 280 * 1.6 to match image aspect ratio
const DEPTH = 50;

interface BookItemProps {
  book: Book;
  isActive: boolean;
  scale: number;
  onClick: () => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, isActive, scale, onClick }) => {
  const activeContainerWidth = 340 * scale;
  const inactiveContainerWidth = 64 * scale;
  const containerHeight = 500 * scale;

  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer z-10 flex items-center justify-center
        ${isActive ? 'mx-2 md:mx-10' : 'mx-0.5 md:mx-1'}
      `}
      style={{
        width: isActive ? activeContainerWidth : inactiveContainerWidth,
        height: containerHeight,
        perspective: '1200px',
        zIndex: isActive ? 50 : 10,
        transition: `
          width 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
          margin 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
          z-index 500ms ${isActive ? 'step-start' : 'step-end'}
        `
      }}
    >
      <div
        className="book-3d relative transition-transform duration-700"
        style={{
          width: BASE_WIDTH,
          height: BASE_HEIGHT,
          transformStyle: 'preserve-3d',
          transform: isActive
            ? `rotateX(${scale < 0.8 ? 5 : 10}deg) rotateY(${scale < 0.8 ? -15 : -25}deg) scale(${1.1 * scale})`
            : `rotateY(90deg) scale(${0.85 * scale})`,
          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        {/* --- FRONT COVER (only render when active) --- */}
        {isActive && (
          <div
            className="absolute inset-0 bg-zinc-800 rounded-r-2xl overflow-hidden group"
            style={{
              transform: `translateZ(${DEPTH / 2}px)`,
              width: BASE_WIDTH,
              boxShadow: 'inset 2px 0 5px rgba(255,255,255,0.05)',
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="relative w-full h-full transition-all duration-300 ease-out group-hover:scale-105 group-hover:brightness-110">
              {/* Cover Image */}
              <img
                src={book.image}
                alt={book.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* Texture & Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-40" />

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Spine Crease Shadow */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/30 to-transparent mix-blend-multiply" />

              {/* Specular Highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10 pointer-events-none rounded-r-2xl" />
            </div>
          </div>
        )}

        {/* --- BACK COVER (only render when active) --- */}
        {isActive && (
          <div
            className="absolute inset-0 bg-zinc-800 rounded-l-2xl"
            style={{
              transform: `rotateY(180deg) translateZ(${DEPTH / 2}px)`,
              backfaceVisibility: 'hidden',
            }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${book.gradient} opacity-40`} />
            <div className="absolute inset-0 bg-zinc-900/50" />
          </div>
        )}

        {/* --- SPINE (Left Face) - only render when inactive --- */}
        {!isActive && (
          <div
            className="absolute bg-zinc-900 rounded-l-sm flex flex-col items-center justify-center overflow-hidden border-r border-white/5"
            style={{
              width: DEPTH + 2,
              height: BASE_HEIGHT,
              left: '50%',
              top: 0,
              marginLeft: -(DEPTH + 2) / 2,
              transform: `rotateY(-90deg) translateZ(${BASE_WIDTH / 2}px)`,
              backgroundColor: '#18181b',
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="absolute inset-0 bg-neutral-800" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />

            {/* Spine Content */}
            <div className="relative z-10 h-full flex flex-col items-center py-8 justify-between opacity-90">
              <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center text-[8px] text-white">A</div>
              <span className="text-sm tracking-[0.3em] font-bold text-white drop-shadow-md whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>{book.subtitle}</span>
              <span className="text-[10px] font-mono text-white/50">{book.id.toString().padStart(2, '0')}</span>
            </div>
          </div>
        )}

        {/* --- PAGES (Right Face) - only render when active --- */}
        {isActive && (
          <div
            className="absolute bg-[#f8f6f1] border-l border-zinc-200"
            style={{
              width: DEPTH - 2,
              height: BASE_HEIGHT - 4,
              left: '50%',
              top: 2,
              marginLeft: -(DEPTH - 2) / 2,
              transform: `rotateY(90deg) translateZ(${BASE_WIDTH / 2}px)`,
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '4px 100%' }} />
            <div className="absolute inset-0 bg-gradient-to-l from-black/10 to-transparent" />
          </div>
        )}

        {/* --- TOP - only render when active --- */}
        {isActive && (
          <div
            className="absolute bg-[#f8f6f1]"
            style={{
              width: BASE_WIDTH - 4,
              height: DEPTH - 2,
              left: 2,
              top: '50%',
              marginTop: -(DEPTH - 2) / 2,
              transform: `rotateX(90deg) translateZ(${BASE_HEIGHT / 2}px)`,
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '100% 4px' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent" />
          </div>
        )}

        {/* --- BOTTOM - only render when active --- */}
        {isActive && (
          <div
            className="absolute bg-[#f8f6f1]"
            style={{
              width: BASE_WIDTH - 4,
              height: DEPTH - 2,
              left: 2,
              top: '50%',
              marginTop: -(DEPTH - 2) / 2,
              transform: `rotateX(-90deg) translateZ(${BASE_HEIGHT / 2}px)`,
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '100% 4px' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}
      </div>

      {/* Soft Drop Shadow for 3D grounding */}
      <div
        className={`absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[200px] h-[20px] bg-black blur-xl rounded-[100%] transition-all duration-700
          ${isActive ? 'opacity-40 scale-100' : 'opacity-0 scale-50'}
        `}
      />
    </div>
  );
};

export const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with '생활영어 영작연습 (퍼플)' (index 1)

  // Responsive Scaling
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setScale(0.7);
      else if (window.innerWidth < 1024) setScale(0.85);
      else setScale(1);
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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

  return (
    <section className="relative pt-36 pb-28 sm:pt-36 sm:pb-28 overflow-hidden">
      {/* Background Aurora - Unicorn Studio WebGL (Light rays from top) */}
      <div
        data-us-project="7BChNsgjdoJkLPEpWhX3"
        className="pointer-events-none absolute inset-0 z-0"
        style={{ width: '100%', height: '100%' }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Book Animation Section */}
        <div className="relative pt-4 pb-20">
          {/* Headline */}
          <div
            className="flex flex-col items-center justify-center text-center mb-16 animate-fade-slide-in"
          >
            <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              Premium Collection
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-2xl">
              매일 10분, 영어습관
            </h1>
          </div>

          {/* Book Carousel */}
          <div
            className="flex items-center justify-center gap-1 md:gap-6 px-4 md:px-12 animate-fade-slide-in"
            style={{
              animationDelay: '0.3s',
              height: 600 * scale,
              perspective: '2000px',
            }}
          >
            {BOOKS.map((book, index) => (
              <BookItem
                key={book.id}
                book={book}
                isActive={index === activeIndex}
                scale={scale}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {BOOKS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-white w-6' : 'bg-white/20 w-1.5 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>

        {/* Subcopy */}
        <p
          className="mx-auto mt-8 max-w-xl text-center text-base text-neutral-300 animate-fade-slide-in"
          style={{ animationDelay: '0.5s' }}
        >
          워크북, 플래시카드, 말하기연습까지 한 곳에서. 체계적인 영어습관을 만들어보세요.
        </p>
        <p
          className="mx-auto mt-3 max-w-xl text-center text-base text-neutral-400 animate-fade-slide-in"
          style={{ animationDelay: '0.6s' }}
        >
          매일 10분 영작연습으로 영어 자신감을 키우세요. 쏘피쌤과 함께 생활영어 마스터!
        </p>

        {/* CTAs */}
        <div
          className="mt-8 flex items-center justify-center gap-4 animate-fade-slide-in"
          style={{ animationDelay: '0.7s' }}
        >
          <button className="group inline-flex lg:h-11 leading-none -tracking-[0.02em] outline outline-1 outline-white/10 hover:outline-white/20 transition-all duration-500 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-blue-400/50 text-base font-semibold text-white h-10 max-w-[300px] rounded-full px-6 relative items-center justify-center border-gradient before:rounded-full">
            {/* Dark gradient background */}
            <span className="absolute -inset-px h-full w-full overflow-hidden rounded-full" aria-hidden="true">
              <span
                className="absolute inset-0 rounded-full"
                style={{ background: 'linear-gradient(140deg, rgba(15,15,17,1) 0%, rgba(30,30,33,1) 35%, rgba(45,45,50,1) 70%, rgba(20,20,22,1) 100%)' }}
              ></span>
              <span className="absolute -top-[52px] right-1 size-20 bg-blue-400 opacity-15 mix-blend-lighten blur-[35px] rounded-full"></span>
              <span className="absolute top-0 right-1 h-[28px] w-20 bg-blue-300 opacity-20 mix-blend-lighten blur-[25px] rounded-full"></span>
              <span className="absolute -bottom-[42px] -left-[19px] size-20 bg-purple-400 opacity-10 mix-blend-lighten blur-[40px] rounded-full"></span>
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute -left-1/2 top-0 h-full w-1/2 bg-white/15 opacity-0 skew-x-12 blur-sm transition-all duration-700 group-hover:opacity-30 group-hover:translate-x-[220%] rounded-full"></span>
              </span>
              <span className="absolute inset-0 ring-1 ring-inset ring-white/15 rounded-full"></span>
            </span>

            <span className="z-20 blur-[1px] w-full h-full rounded-full absolute top-0 left-0" aria-hidden="true">
              <span className="-top-px -left-px z-20 w-full h-full rounded-full absolute" style={{ boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,0.12)' }}></span>
            </span>

            <span className="relative z-10 flex items-center gap-1.5 text-[14px] leading-none font-normal -tracking-[0.04em] lg:text-base text-white/95 rounded-full">
              지금 시작하기
            </span>

            <span className="pointer-events-none absolute inset-0 ring-0 ring-blue-400/0 transition-[ring,opacity] duration-500 group-hover:ring-4 group-hover:opacity-25 rounded-full"></span>
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
