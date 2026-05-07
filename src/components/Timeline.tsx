import { Briefcase, GraduationCap } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const experience = [
  {
    range: '2023 — Present',
    role: 'Graphic Designer',
    org: 'Jain Group of Institutions',
    desc: 'Lead designer, video editor, and content writer — managing creative output across more than 12 branches.',
  },
  {
    range: '2022',
    role: '2D Animation Artist',
    org: 'Taproots AI Pvt. Ltd.',
    desc: 'Contributed character animation and motion design to a long-form animation project.',
  },
  {
    range: '2021',
    role: 'Graphic Intern',
    org: 'Little Heights',
    desc: 'Daily social-media posters, content research, and reels editing for the brand page.',
  },
  {
    range: '2018 — 2019',
    role: 'Computer Technician',
    org: 'Independent',
    desc: 'Diagnosed and repaired hardware and software issues — deep familiarity with PC internals.',
  },
];

const education = [
  {
    range: '2022',
    title: 'Diploma in Animation & VFX',
    org: 'Jain University · Wiztoonz Academy of Media and Design, Bengaluru',
  },
  {
    range: '2020',
    title: 'Pre-University (PUC)',
    org: 'Cambridge Institute of Technology, Bengaluru',
  },
  {
    range: '2014',
    title: '10th Board',
    org: 'New Indus Valley Residential School, Bengaluru',
  },
];

export default function Timeline() {
  const heading = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative px-6 md:px-10 py-24 md:py-32 bg-ink-900 overflow-hidden border-t border-ink-700">
      <div className="absolute inset-0 aurora opacity-30" />
      <div className="max-w-7xl mx-auto relative">
        <div ref={heading} className="reveal grid md:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">[ Journey ]</div>
            <h2 className="font-bold text-4xl md:text-6xl text-ink-50">
              Experience <span className="italic font-light text-accent">& Education</span>
            </h2>
          </div>
          <p className="text-ink-200 max-w-md md:justify-self-end">
            From hardware repair to brand systems and 3D animation — a
            decade-long path that keeps circling back to one question: how do we
            make this clearer?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <Column
            icon={Briefcase}
            label="Experience"
            items={experience.map((e) => ({
              range: e.range,
              title: e.role,
              org: e.org,
              desc: e.desc,
            }))}
          />
          <Column
            icon={GraduationCap}
            label="Education"
            items={education.map((e) => ({
              range: e.range,
              title: e.title,
              org: e.org,
            }))}
          />
        </div>
      </div>
    </section>
  );
}

type Item = { range: string; title: string; org: string; desc?: string };

function Column({
  icon: Icon, label, items,
}: { icon: typeof Briefcase; label: string; items: Item[] }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <span className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/40 flex items-center justify-center">
          <Icon size={18} className="text-accent" />
        </span>
        <h3 className="font-bold text-2xl text-ink-50">{label}</h3>
      </div>
      <ol className="relative border-l border-ink-700 pl-6 md:pl-8 space-y-8">
        {items.map((it, i) => (
          <Row key={it.title + i} index={i} {...it} />
        ))}
      </ol>
    </div>
  );
}

function Row({ index, range, title, org, desc }: Item & { index: number }) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      className="reveal-rotate relative"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <span className="absolute -left-[34px] md:-left-[42px] top-1.5 w-4 h-4 rounded-full bg-ink-900 border-2 border-accent shadow-[0_0_0_4px_rgba(91,95,239,0.18)]" />
      <div className="text-xs uppercase tracking-widest text-accent">{range}</div>
      <div className="font-bold text-xl md:text-2xl text-ink-50 mt-1">{title}</div>
      <div className="text-ink-300 text-sm mt-1">{org}</div>
      {desc && <p className="text-ink-200 text-sm mt-2 max-w-md">{desc}</p>}
    </li>
  );
}
