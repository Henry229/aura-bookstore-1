import React from 'react';
import { User, Menu } from 'lucide-react';
import { BorderGradient } from './ui/BorderGradient';

export const Header: React.FC = () => {
  return (
    <header className="fixed z-50 top-0 right-0 left-0 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="#" className="inline-flex items-center justify-center w-[100px] h-[40px] opacity-90 hover:opacity-100 transition-opacity">
             <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e2bb527-bd5b-49c0-ab02-6df2869bcd3a_1600w.png" alt="Logo" className="w-full h-full object-contain" />
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#create" className="hover:text-white transition-colors flex items-center gap-2">
              Start Creating
            </a>
            <a href="#plans" className="hover:text-white transition-colors">Plans</a>
            <a href="#support" className="hover:text-white transition-colors">Support</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <BorderGradient 
              as="button" 
              className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900/60 text-neutral-200 ring-1 ring-white/10 backdrop-blur hover:bg-neutral-900 transition"
            >
              <User size={16} />
            </BorderGradient>
            <BorderGradient 
              as="button" 
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900/60 text-neutral-200 ring-1 ring-white/10 backdrop-blur hover:bg-neutral-900 transition"
              aria-label="Menu"
            >
              <Menu size={16} />
            </BorderGradient>
          </div>
        </div>
      </div>
    </header>
  );
};