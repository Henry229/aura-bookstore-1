import React from 'react';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-12">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="inline-flex items-center justify-center w-[100px] h-[40px] opacity-80 hover:opacity-100 transition-opacity">
               <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e2bb527-bd5b-49c0-ab02-6df2869bcd3a_1600w.png" alt="Logo" className="w-full h-full object-contain" />
            </a>
            <p className="mt-4 text-sm text-neutral-400 max-w-xs">
              The professional platform for creative portfolios. Showcase your work beautifully.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900/60 text-neutral-300 ring-1 ring-white/10 hover:bg-neutral-900 transition">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {[
            { title: 'Product', links: ['Features', 'Templates', 'Pricing', 'Integrations', 'Changelog'] },
            { title: 'Resources', links: ['Documentation', 'Help Center', 'Blog', 'Community', 'Tutorials'] },
            { title: 'Company', links: ['About', 'Careers', 'Contact', 'Partners', 'Press Kit'] },
            { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Cookies', 'Licenses'] },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-neutral-400 hover:text-white transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-neutral-400">© 2024 Creative Platform. All rights reserved.</p>
            <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-neutral-400 hover:text-white transition">Status</a>
                <a href="#" className="text-sm text-neutral-400 hover:text-white transition">Sitemap</a>
                <a href="#" className="text-sm text-neutral-400 hover:text-white transition">Accessibility</a>
            </div>
        </div>
      </div>
    </footer>
  );
};