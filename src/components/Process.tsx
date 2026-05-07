import { useReveal } from '../hooks/useReveal';

const steps = [
  {
    n: '01',
    title: 'Listen',
    desc: 'A two-week discovery — interviews, audits, and a written brief we both sign off on before any visuals begin.',
  },
  {
    n: '02',
    title: 'Sketch',
    desc: 'Two or three distinct directions, presented honestly. We pick one to develop, no Frankenstein edits.',
  },
  {
    n: '03',
    title: 'Build',
    desc: 'Refinement, applications, and the design system that turns a logo into a living brand.',
  },
  {
    n: '04',
    title: 'Hand off',
    desc: 'Production-ready files, guidelines, and an onboarding session for your in-house team or agency.',
  },
];

function Step({ index, n, title, desc }: { index: number; n: string; title: string; desc: string }) {
  const ref = useReveal<HTMLDivElement>();
  const tilt = index % 2 === 0 ? 4 : -4;
  return (
    <div
      ref={ref}
      className="reveal-rotate group relative p-7 rounded-2xl bg-ink-100 border border-ink-200 hover:bg-ink-900 hover:text-ink-50 transition-all duration-500"
      style={{
        transitionDelay: `${index * 90}ms`,
        transform: `perspective(1200px) rotateY(${tilt}deg)`,
      }}
    >
      <div className="font-display text-accent text-6xl mb-4 leading-none">{n}</div>
      <h3 className="font-display text-2xl mb-2">{title}</h3>
      <p className="text-current opacity-70 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Process() {
  const heading = useReveal<HTMLHeadingElement>();
  return (
    <section id="process" className="relative px-6 md:px-10 py-24 md:py-32 bg-ink-50 text-ink-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-6">
            <div className="text-xs uppercase tracking-[0.25em] text-accent mb-4">
              04 — Process
            </div>
            <h2 ref={heading} className="reveal font-display text-5xl md:text-7xl">
              Slow, then suddenly{' '}
              <span className="italic text-accent">fast</span>.
            </h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 text-ink-500 text-lg self-end">
            Most engagements run six to twelve weeks. The first half is mostly
            words; the second half moves quickly because the foundation is
            already in place.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-8" style={{ perspective: '1200px' }}>
          {steps.map((s, i) => (
            <Step key={s.n} index={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
