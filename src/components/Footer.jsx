import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Let’s build something remarkable</h3>
            <p className="mt-2 text-slate-300">Tell us about your goals, and we’ll send a tailored plan within 48 hours.</p>
          </div>
          <form className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input type="text" placeholder="Your name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
            <input type="email" placeholder="Work email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" />
            <button type="submit" className="rounded-xl bg-white text-black px-5 py-3 font-medium shadow hover:shadow-lg">Request proposal</button>
          </form>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Flare Digital. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
