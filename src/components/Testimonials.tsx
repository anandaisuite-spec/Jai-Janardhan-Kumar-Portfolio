import { Quote } from 'lucide-react';
import TiltCard from './TiltCard';

const quotes = [
  {
    q: 'Jai handled our group brand across twelve branches and never missed a beat. The system he built holds up beautifully across every campus.',
    a: 'Marketing Lead',
    r: 'Jain Group of Institutions',
  },
  {
    q: 'A rare combination of speed, taste, and patience. He owned the 2D animation work end-to-end and the studio leaned on him without hesitation.',
    a: 'Project Director',
    r: 'Taproots AI',
  },
  {
    q: 'From daily reels to a proper visual identity for the page — Jai turned a small social account into something we are genuinely proud of.',
    a: 'Founder',
    r: 'Little Heights',
  },
];

export default function Testimonials() {
  return (
    <section className="relative px-6 md:px-10 py-24 md:py-32 bg-ink-800 overflow-hidden">
      <div className="absolute inset-0 aurora opacity-50" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">[ Kind Words ]</div>
        <h2 className="font-bold text-4xl md:text-6xl text-ink-50 mb-16 max-w-4xl">
          From the people I've been{' '}
          <span className="italic font-light text-accent">lucky</span> to work with.
        </h2>
        <div className="grid md:grid-cols-3 gap-6" style={{ perspective: '1500px' }}>
          {quotes.map((q) => (
            <TiltCard
              key={q.a + q.r}
              max={8}
              className="bg-ink-900/70 backdrop-blur rounded-2xl p-8 border border-ink-700 flex flex-col justify-between shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]"
            >
              <div className="layer-pop">
                <Quote size={28} className="text-accent mb-6" />
                <blockquote className="text-lg md:text-xl text-ink-50 leading-snug">
                  {q.q}
                </blockquote>
              </div>
              <figcaption className="mt-8 pt-6 border-t border-ink-700">
                <div className="text-ink-50 font-semibold">{q.a}</div>
                <div className="text-sm text-ink-300">{q.r}</div>
              </figcaption>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
