import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Community } from './components/Community';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-neutral-100 antialiased font-sans selection:bg-violet-500/30">
      <div className="gradient-blur"></div>
      
      <Header />
      
      <main>
        <Hero />
        <Process />
        <Community />
        <Testimonials />
        <Pricing />
        
        <div className="mx-auto max-w-7xl px-6">
            <div className="h-px w-full bg-white/10"></div>
        </div>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;