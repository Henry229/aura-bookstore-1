import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';

const TESTIMONIALS = [
  {
    text: "아..어쩜 이리 재밌나여? 한문제 한문제 풀어서 없어지는게 너무아깝고 생각같아서는 한편에 100문제씩 있었음 좋겠어여",
    name: "Marcus Chen",
    role: "UI/UX Designer at Creative Studio",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca2dff12-04ff-4713-9404-e3cb60f16c8a_320w.jpg"
  },
  {
    text: "컨텐츠가 다양해서 지루하지 않게 영어공부할 수 있어 👍 감사합니다^^",
    name: "Isabella Rodriguez",
    role: "Freelance Photographer",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f461de65-1971-4615-aa18-9a8586b86561_320w.webp"
  },
  {
    text: "먼저 문장만들어보고 쌤 강의 들으며 첨삭하고 수정하는데, 한두 단어빼고 똑같이 쓸수 있는 제가 신기해요. 선생님 덕분입니다. 감사해요.",
    name: "Alex Thompson",
    role: "Digital Illustrator & Artist",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_320w.jpg"
  },
  {
    text: "와 역쉬 듣기가 어려워여.. 처음들을땐 너무 띄엄띄엄 귀에들리고 자막이 딱나와서보면 너무 쉬운문장이고 다 알고나서 들면 너무 잘들리고...",
    name: "Sarah Kim",
    role: "Creative Director at Nexus Design",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66d0dc63-851b-4e89-a6a3-cab612c98a06_320w.webp"
  },
  {
    text: "매일 10분씩 꾸준히 하니까 진짜 실력이 느는게 느껴져요! 영작이 제일 도움 많이 됐어요.",
    name: "David Park",
    role: "Software Engineer",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca2dff12-04ff-4713-9404-e3cb60f16c8a_320w.jpg"
  },
  {
    text: "플래시카드로 복습하니까 단어가 머리에 쏙쏙 들어와요. 이제 영어 공부가 재밌어졌어요!",
    name: "Jenny Lee",
    role: "Marketing Manager",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f461de65-1971-4615-aa18-9a8586b86561_320w.webp"
  }
];

const cardPositions = [
  'card-1', // center front
  'card-2', // left
  'card-3', // right
  'card-4', // far left
  'card-5', // far right
  'card-6', // back center
];

export const Testimonials: React.FC = () => {
  return (
    <section className="border-y border-white/5 pt-24 pb-24 bg-black">
      <style>{`
        .testimonial-cards-fan {
          perspective: 2000px;
        }

        .testimonial-card {
          position: absolute;
          left: 50%;
          top: 50%;
          transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
          will-change: transform, opacity, box-shadow;
          transform-origin: center center;
        }

        /* Fan State (Default) */
        .card-1 {
          z-index: 60;
          transform: translate(-50%, -50%) scale(1);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          filter: brightness(1.1);
        }

        .card-2 {
          z-index: 50;
          transform: translate(-50%, -50%) translate(-160px, 10px) rotate(-8deg) scale(0.95);
          opacity: 0.9;
        }

        .card-3 {
          z-index: 50;
          transform: translate(-50%, -50%) translate(160px, 10px) rotate(8deg) scale(0.95);
          opacity: 0.9;
        }

        .card-4 {
          z-index: 40;
          transform: translate(-50%, -50%) translate(-300px, 40px) rotate(-16deg) scale(0.9);
          opacity: 0.8;
        }

        .card-5 {
          z-index: 40;
          transform: translate(-50%, -50%) translate(300px, 40px) rotate(16deg) scale(0.9);
          opacity: 0.8;
        }

        .card-6 {
          z-index: 30;
          transform: translate(-50%, -50%) translateY(-20px) scale(0.88);
          opacity: 0.6;
          filter: brightness(0.7);
        }

        /* Grid State (Hover) */
        .testimonial-group:hover .testimonial-card {
          z-index: 50;
          opacity: 1;
          filter: brightness(1);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .testimonial-group:hover .card-2 { transform: translate(-50%, -50%) translate(-105%, -55%) rotate(0deg) scale(1); }
        .testimonial-group:hover .card-1 { transform: translate(-50%, -50%) translate(0%, -55%) rotate(0deg) scale(1); }
        .testimonial-group:hover .card-3 { transform: translate(-50%, -50%) translate(105%, -55%) rotate(0deg) scale(1); }
        .testimonial-group:hover .card-4 { transform: translate(-50%, -50%) translate(-105%, 55%) rotate(0deg) scale(1); }
        .testimonial-group:hover .card-6 { transform: translate(-50%, -50%) translate(0%, 55%) rotate(0deg) scale(1); }
        .testimonial-group:hover .card-5 { transform: translate(-50%, -50%) translate(105%, 55%) rotate(0deg) scale(1); }

        /* Mobile Layout Override */
        @media (max-width: 1024px) {
          .testimonial-cards-fan {
            height: auto !important;
            display: flex;
            flex-direction: column;
            padding: 2rem 1rem;
            gap: 1.5rem;
          }
          .testimonial-card {
            position: relative !important;
            left: auto !important;
            top: auto !important;
            transform: none !important;
            width: 100% !important;
            max-width: 28rem !important;
            opacity: 1 !important;
            filter: brightness(1) !important;
          }
          .testimonial-group:hover .testimonial-card {
            transform: none !important;
          }
        }
      `}</style>

      <div className="testimonial-group px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionWrapper className="text-center max-w-3xl mx-auto mb-6">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-blue-400"></span>
              <span className="text-xs font-medium tracking-wide uppercase text-neutral-300">학습 성과</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight text-center mb-6">
            영어가 두렵던 분들의 <span className="text-blue-500">놀라운 변화</span>
          </h2>

          <p className="text-lg max-w-2xl mx-auto text-center text-neutral-400">
            워크북과 앱으로 영어 습관을 만든 수강생들의 생생한 후기입니다.
          </p>
        </SectionWrapper>

        <div className="testimonial-cards-fan flex w-full h-[38rem] max-w-7xl mx-auto relative items-center justify-center -mt-8">
          {TESTIMONIALS.map((t, idx) => (
            <article
              key={idx}
              className={`testimonial-card ${cardPositions[idx]} w-full max-w-sm h-52 rounded-2xl bg-neutral-950 border border-white/5 px-6 py-5 text-left relative overflow-hidden flex flex-col`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-2 text-2xl leading-none text-white font-medium">"</div>
                <p className="text-sm text-neutral-300 line-clamp-3 flex-grow">{t.text}</p>
                <div className="mt-auto pt-4 flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover ring-1 ring-white/10"
                  />
                  <div>
                    <div className="text-sm font-medium text-white">{t.name}</div>
                    <div className="text-xs text-neutral-500">{t.role}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
