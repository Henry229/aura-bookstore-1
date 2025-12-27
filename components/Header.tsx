import React from 'react';
import { User, Menu } from 'lucide-react';
import { BorderGradient } from './ui/BorderGradient';

export const Header: React.FC = () => {
  return (
    <header className="fixed z-50 top-0 right-0 left-0 bg-black/50 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="#" className="inline-flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity">
            <img src="/orsso-logo.png" alt="Orsso Logo" className="h-10 w-auto" />
            <span className="text-2xl text-white ml-1 mt-1 font-bold">OrssoEnglish</span>
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