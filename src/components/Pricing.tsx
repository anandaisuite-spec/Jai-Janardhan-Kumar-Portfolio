import { Check, ArrowUpRight } from 'lucide-react';
import TiltCard from './TiltCard';
import { useReveal } from '../hooks/useReveal';

const plans = [
  {
    name: 'Starter',
    trial: 'Single deliverable · 1–2 weeks',
    price: '₹15,000',
    features: [
      'Logo or single asset',
      'Two design directions',
      'Two rounds of revisions',
      'Source files + exports',
      'Email + WhatsApp support',
    ],
    featured: false,
  },
  {
    name: 'Studio',
    trial: 'Full identity · 4–6 weeks',
    price: '₹45,000',
    features: [
      'Brand strategy & moodboard',
      'Logo system + typography',
      'Color & layout guidelines',
      'Social + print templates',
      'Optional 3D / motion add-ons',
      'Priority project slot',
    ],
    featured: true,
  },
];

export default function Pricing() {
  const heading = useReveal<HTMLDivElement>();
  return (
    <section id="pricing" className="relative px-6 md:px-10 py-24 md:py-32 bg-ink-900 overflow-hidden border-t border-ink-700">
      <div className="absolute inset-0 aurora opacity-40" />
      <div className="max-w-7xl mx-auto relative grid lg:grid-cols-12 gap-12 items-start">
        <div ref={heading} className="reveal lg:col-span-5 lg:sticky lg:top-28">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">[ Best Pricing ]</div>
          <h2 className="font-bold text-4xl md:text-6xl text-ink-50 leading-tight">
            Unlock your best rate<br />
            with the <span className="italic font-light text-accent">right plan</span>
          </h2>
          <p className="text-ink-200 mt-6 max-w-md">
            Two simple engagements. Start with a focused single deliverable or
            commit to a full identity sprint — pricing is transparent, scope is
            fixed.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-6" style={{ perspective: '1500px' }}>
          {plans.map((p, i) => (
            <TiltCard
              key={p.name}
              max={6}
              rotateReveal={i % 2 === 1}
              className={`grid md:grid-cols-2 gap-8 p-8 md:p-10 rounded-3xl border transition-colors ${
                p.featured
                  ? 'bg-gradient-to-br from-accent to-accent-dark border-accent text-ink-50 shadow-[0_30px_80px_-20px_rgba(91,95,239,0.55)]'
                  : 'bg-ink-800 border-ink-700 text-ink-50 hover:border-accent/50'
              }`}
            >
              <div className="layer-pop">
                <div className={`text-sm uppercase tracking-widest mb-2 ${p.featured ? 'text-ink-50/80' : 'text-ink-300'}`}>
                  {p.name}
                </div>
                <div className={`text-xs ${p.featured ? 'text-ink-50/70' : 'text-ink-400'}`}>
                  {p.trial}
                </div>
                <div className="font-bold text-5xl md:text-6xl mt-6">{p.price}</div>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm uppercase tracking-widest transition-colors ${
                    p.featured
                      ? 'bg-ink-50 text-accent hover:bg-ink-100'
                      : 'bg-accent text-ink-50 hover:bg-accent-light'
                  }`}
                >
                  Let's Work
                  <span className="w-7 h-7 rounded-full bg-current flex items-center justify-center">
                    <ArrowUpRight size={14} className={p.featured ? 'text-accent' : 'text-ink-50'} />
                  </span>
                </a>
              </div>

              <div className="layer-pop">
                <div className={`text-sm font-semibold mb-4 ${p.featured ? 'text-ink-50' : 'text-ink-100'}`}>
                  Services Include
                </div>
                <ul className="space-y-3">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm">
                      <Check size={16} className={p.featured ? 'text-ink-50' : 'text-accent'} />
                      <span className={p.featured ? 'text-ink-50/90' : 'text-ink-200'}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
