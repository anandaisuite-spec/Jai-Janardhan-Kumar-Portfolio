import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects, Project } from '../data/projects';
import TiltCard from './TiltCard';

const filters = ['All', '3D Modeling', '3D Animation', 'VFX', 'Editorial Design', 'Poster Design', 'Isometric'];

export default function Work({ onOpen }: { onOpen: (p: Project) => void }) {
  const [active, setActive] = useState('All');

  const visible = active === 'All'
    ? projects
    : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="relative px-6 md:px-10 py-24 md:py-32 bg-ink-900 mt-12 md:mt-20">
      <div className="max-w-7xl mx-auto relative">
        <div className="mb-14">
          <h2 className="font-bold text-5xl md:text-7xl text-ink-50">
            My Successful <span className="italic font-light text-accent">Work</span>
          </h2>
          <button className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-ink-300/40 text-ink-50 text-xs uppercase tracking-widest hover:border-accent hover:text-accent transition-colors">
            All Services
            <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center">
              <ArrowUpRight size={12} />
            </span>
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full border text-sm transition-all ${
                active === f
                  ? 'bg-accent border-accent text-ink-50 shadow-[0_8px_30px_-8px_rgba(232,90,44,0.7)]'
                  : 'border-ink-600 text-ink-200 hover:border-ink-200 hover:text-ink-50'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8" style={{ perspective: '1500px' }}>
          {visible.map((p, i) => (
            <TiltCard
              key={p.id}
              max={8}
              className={`group relative overflow-hidden rounded-2xl bg-ink-800 border border-ink-700 cursor-pointer shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_80px_-20px_rgba(232,90,44,0.35)] transition-shadow ${
                i % 3 === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <button
                onClick={() => onOpen(p)}
                className="block text-left w-full"
              >
                <div className="aspect-[4/3] md:aspect-[16/10] overflow-hidden relative">
                  <img
                    src={p.cover}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-transparent to-transparent" />
                </div>
                <div className="absolute top-4 left-4 flex gap-2 layer-pop">
                  <span className="px-3 py-1 text-xs rounded-full bg-ink-50/95 backdrop-blur text-ink-900 font-medium">
                    {p.category}
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-ink-900/70 backdrop-blur text-ink-50 border border-ink-600">
                    {p.year}
                  </span>
                </div>
                <div className="p-6 md:p-8 flex items-start justify-between gap-6 layer-pop">
                  <div>
                    <h3 className="font-bold text-2xl md:text-3xl text-ink-50 mb-1">
                      {p.title}
                    </h3>
                    <div className="text-sm text-ink-300">{p.client}</div>
                  </div>
                  <span className="shrink-0 w-11 h-11 rounded-full border border-ink-600 flex items-center justify-center text-ink-50 group-hover:bg-accent group-hover:text-ink-50 group-hover:border-accent transition-all">
                    <ArrowUpRight
                      size={18}
                      className="group-hover:rotate-45 transition-transform"
                    />
                  </span>
                </div>
              </button>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
