import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { BorderGradient } from './ui/BorderGradient';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    text: "This platform completely changed how I present my work. The intuitive interface and beautiful layouts helped me land three major clients in the first month alone.",
    name: "Marcus Chen",
    role: "UI/UX Designer at Creative Studio",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca2dff12-04ff-4713-9404-e3cb60f16c8a_320w.jpg"
  },
  {
    text: "Finally, a portfolio platform that understands photographers. The galleries are stunning and my images have never looked better. My bookings increased by 60%.",
    name: "Isabella Rodriguez",
    role: "Freelance Photographer",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f461de65-1971-4615-aa18-9a8586b86561_320w.webp"
  },
  {
    text: "As an illustrator, showing my process is crucial. The customizable project pages let me tell the full story behind each piece. It's a game changer.",
    name: "Alex Thompson",
    role: "Digital Illustrator & Artist",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_320w.jpg"
  },
  {
    text: "I moved my entire studio portfolio here and couldn't be happier. The client feedback has been overwhelmingly positive—they love the clean, modern aesthetic.",
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
          Client Success Stories
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4">
          What Our Clients Are Saying
        </h2>
        <p className="text-neutral-300">
          Discover how creative professionals are transforming their portfolios with our platform.
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