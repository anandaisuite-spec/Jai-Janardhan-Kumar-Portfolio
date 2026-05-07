import TiltCard from './TiltCard';
import { useReveal } from '../hooks/useReveal';

const tools = [
  { name: 'Adobe Illustrator', short: 'Ai', percent: '95%' },
  { name: 'Adobe Photoshop', short: 'Ps', percent: '92%' },
  { name: 'Adobe After Effects', short: 'Ae', percent: '88%' },
  { name: 'Blender', short: 'Bl', percent: '90%' },
  { name: 'Autodesk Maya', short: 'M', percent: '85%' },
  { name: 'Cinema 4D', short: 'C4D', percent: '80%' },
];

const languages = [
  { name: 'Hindi', level: 95 },
  { name: 'English', level: 80 },
  { name: 'Kannada', level: 75 },
];

export default function Achievements() {
  const heading = useReveal<HTMLDivElement>();
  return (
    <section id="skills" className="relative px-6 md:px-10 py-24 md:py-32 bg-ink-800 overflow-hidden border-t border-ink-700">
      <div className="absolute inset-0 aurora opacity-30" />
      <div className="max-w-7xl mx-auto relative">
        <div ref={heading} className="reveal mb-16 grid md:grid-cols-2 gap-8 items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">[ Skills & Stack ]</div>
            <h2 className="font-bold text-4xl md:text-6xl text-ink-50">
              Software I work in <span className="italic font-light text-accent">every day</span>
            </h2>
          </div>
          <p className="text-ink-200 max-w-md md:justify-self-end">
            Six years of daily practice across the Adobe Creative Cloud, plus a
            dedicated 3D pipeline in Blender, Maya, and Cinema 4D — with a
            Diploma in Animation & VFX from Jain University.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6" style={{ perspective: '1500px' }}>
          {tools.map((t, i) => (
            <TiltCard
              key={t.name}
              max={9}
              rotateReveal={i % 2 === 1}
              className="rounded-2xl bg-ink-900 border border-ink-700 p-7 hover:border-accent/60 transition-colors"
            >
              <div className="layer-pop flex items-center gap-5">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center font-bold text-ink-50 text-lg shadow-[0_8px_24px_-8px_rgba(91,95,239,0.7)]">
                  {t.short}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-ink-50">{t.name}</div>
                  <div className="mt-2 h-1.5 rounded-full bg-ink-700 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent-light to-accent rounded-full"
                      style={{ width: t.percent }}
                    />
                  </div>
                </div>
                <div className="text-ink-50 font-bold text-sm tabular-nums">{t.percent}</div>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">[ Languages ]</div>
            <h3 className="font-bold text-3xl md:text-4xl text-ink-50">
              Three <span className="italic font-light text-accent">tongues</span>,
              one studio.
            </h3>
            <p className="text-ink-300 mt-4 max-w-sm">
              Communicate fluently with clients across India and globally —
              comfortable presenting work in any of the three.
            </p>
          </div>
          <div className="md:col-span-7 space-y-5">
            {languages.map((l) => (
              <div key={l.name}>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-ink-50 font-semibold">{l.name}</span>
                  <span className="text-ink-300 text-sm tabular-nums">{l.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-ink-700 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent-light to-accent rounded-full"
                    style={{ width: `${l.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
