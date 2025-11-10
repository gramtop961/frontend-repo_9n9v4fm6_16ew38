import React from 'react';
import { Search, Megaphone, TrendingUp, Brush } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO & Content',
    desc: 'Technical SEO, topical clusters, and content engines that compound organic growth.'
  },
  {
    icon: Megaphone,
    title: 'Paid Social & Search',
    desc: 'Full-funnel acquisition across Meta, TikTok, Google, and YouTube with rigorous testing.'
  },
  {
    icon: TrendingUp,
    title: 'Performance Strategy',
    desc: 'Attribution, analytics, and CRO to turn clicks into customers at scale.'
  },
  {
    icon: Brush,
    title: 'Brand & Creative',
    desc: 'Identity systems, landing pages, and ad creative that stand out and sell.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 -z-[1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">What we do</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">
              A cross-functional team with the skills to deliver results end-to-end. We plug into your
              goals and scale with you.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full border border-white/20 text-white px-5 py-3 font-medium hover:bg-white/10 transition">
            Book a call
          </a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 grid place-items-center text-black shadow">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
              <div className="mt-4 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition">
                Proven playbooks, transparent reporting.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
