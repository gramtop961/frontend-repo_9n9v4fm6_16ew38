import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/0UnIIJngGgvQNHiD/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center py-24">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-300/90">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
              Digital Marketing Agency
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              We grow brands with vibrant strategy, content, and performance.
            </h1>
            <p className="mt-4 text-slate-300 max-w-2xl">
              Full-funnel campaigns, SEO, and paid media—designed to convert. Our team blends
              creativity with data to deliver measurable results.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-full bg-white text-black px-5 py-3 font-medium shadow-lg hover:shadow-xl transition duration-300">
                Get a Proposal
              </a>
              <a href="#work" className="inline-flex items-center rounded-full border border-white/20 text-white px-5 py-3 font-medium hover:bg-white/10 transition">
                See Our Work
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <ul className="grid grid-cols-2 gap-4 text-sm">
                <li className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <p className="text-3xl font-bold">+312%</p>
                  <p className="text-slate-400 mt-1">Avg. traffic in 6 months</p>
                </li>
                <li className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <p className="text-3xl font-bold">4.9/5</p>
                  <p className="text-slate-400 mt-1">Client satisfaction</p>
                </li>
                <li className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <p className="text-3xl font-bold">x5</p>
                  <p className="text-slate-400 mt-1">ROAS on paid media</p>
                </li>
                <li className="p-4 rounded-xl bg-black/40 border border-white/10">
                  <p className="text-3xl font-bold">24/7</p>
                  <p className="text-slate-400 mt-1">Campaign monitoring</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
