import React from 'react';
import { Rocket, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-black">
              <Rocket size={18} />
            </div>
            <span className="font-semibold tracking-tight">Flare Digital</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 font-medium shadow-sm hover:shadow-lg hover:translate-y-[-1px] transition"
            >
              Start a Project
            </a>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-slate-300 hover:text-white">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
