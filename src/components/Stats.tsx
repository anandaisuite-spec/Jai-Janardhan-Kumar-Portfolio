import { useReveal } from '../hooks/useReveal';

const stats = [
  { value: '12+', label: 'Branches Managed' },
  { value: '4+', label: 'Years Experience' },
  { value: '500+', label: 'Designs Delivered' },
];

export default function Stats() {
  const heading = useReveal<HTMLHeadingElement>();
  return (
    <section className="relative px-6 md:px-10 py-24 md:py-28 bg-ink-900 overflow-hidden border-t border-ink-700">
      <div className="absolute inset-0 aurora opacity-50" />
      <div className="glow-blue w-[500px] h-[500px] -top-20 -left-20" />
      <div className="max-w-7xl mx-auto relative">
        <h2 ref={heading} className="reveal font-bold text-3xl md:text-5xl text-ink-50 max-w-2xl mb-16">
          A track record built on<br />
          <span className="text-accent">consistent, careful work.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4">
          {stats.map((s, i) => (
            <Stat key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal flex flex-col items-center md:items-start"
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="font-bold text-7xl md:text-8xl bg-gradient-to-b from-ink-50 to-ink-500 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-ink-300 text-sm uppercase tracking-widest mt-2">{label}</div>
    </div>
  );
}
