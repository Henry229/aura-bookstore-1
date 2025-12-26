import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { BorderGradient } from './ui/BorderGradient';
import { Star } from 'lucide-react';

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
    text: "먼저 문장만들어보고 쌤 강의 들으며 첨삭하고 수정하는데, 한두 단어빼고 똑같이 쓸수 있는 제가 신기해요. 선생님 덕분입니다. 감사해요. 꾸준히 노력하게 해주셔소 고맙습니다. ",
    name: "Alex Thompson",
    role: "Digital Illustrator & Artist",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_320w.jpg"
  },
  {
    text: "와 역쉬 듣기가 어려워여.. 처음들을땐 너무 띄엄띄엄 귀에들리고 자막이 딱나와서보면 너무 쉬운문장이고 다 알고나서 들면 너무 잘들리고... 영어의 길은 너무멀어여~ 다양한 양질의 콘텐츠 너무 감사합니다",
    name: "Sarah Kim",
    role: "Creative Director at Nexus Design",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66d0dc63-851b-4e89-a6a3-cab612c98a06_320w.webp"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <SectionWrapper className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center rounded-full bg-neutral-900/70 ring-1 ring-white/10 px-3 py-1 text-xs text-neutral-300 border border-white/5 mb-6">
          학습 성과
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4">
          영어가 두렵던 분들의 놀라운 변화
        </h2>
        <p className="text-neutral-300">
          워크북과 온라인 강의로 영어 습관을 만든 수강생들의 생생한 후기입니다.
        </p>
      </SectionWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {TESTIMONIALS.map((t, idx) => (
          <SectionWrapper key={idx} delay={idx * 100}>
            <BorderGradient className="bg-neutral-900/60 rounded-2xl p-6 sm:p-8 relative ring-1 ring-white/10 overflow-hidden" 
             style={{ background: 'radial-gradient(900px 220px at 95% 120%, rgba(168,85,247,0.18), transparent)' }}>
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>

                <p className="text-base sm:text-lg text-neutral-200 mb-6">"{t.text}"</p>

                <div className="flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-1 ring-white/10" />
                  <div>
                    <p className="text-sm font-medium text-white">{t.name}</p>
                    <p className="text-xs text-neutral-400">{t.role}</p>
                  </div>
                </div>
            </BorderGradient>
          </SectionWrapper>
        ))}
      </div>
    </section>
  );
};