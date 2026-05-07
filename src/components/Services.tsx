import { Lightbulb, Image as ImageIcon, Type, Palette, Wand2, Hexagon, LayoutGrid, Printer, PenTool } from 'lucide-react';
import TiltCard from './TiltCard';
import { useReveal } from '../hooks/useReveal';

const roles = [
  {
    icon: Lightbulb,
    title: 'Conceptualizing Design',
    desc: 'Understanding the project objectives and target audience, then brainstorming and sketching the ideas to land a clear concept.',
  },
  {
    icon: ImageIcon,
    title: 'Creating Visual Assets',
    desc: 'Designing graphics, illustrations, and layouts for branding, marketing materials, websites, and print publications.',
  },
  {
    icon: Type,
    title: 'Typography',
    desc: 'Selecting appropriate fonts and arranging text in an aesthetically pleasing and readable manner.',
  },
  {
    icon: Palette,
    title: 'Color Selection',
    desc: 'Choosing color schemes that align with the brand or message and evoke the desired emotions and responses.',
  },
  {
    icon: Wand2,
    title: 'Image Editing',
    desc: 'Using Photoshop and other software to edit, retouch, and enhance photographs or visual elements.',
  },
  {
    icon: Hexagon,
    title: 'Logo Design',
    desc: 'Creating logos that represent a brand identity — distilled, ownable, and built to last.',
  },
  {
    icon: LayoutGrid,
    title: 'Layout Design',
    desc: 'Arranging visual elements and content on web pages, brochures, and posters into clean, organized layouts.',
  },
  {
    icon: Printer,
    title: 'Digital & Print Design',
    desc: 'Working on social media graphics, email templates, and ads — and on print such as business cards, flyers, and posters.',
  },
  {
    icon: PenTool,
    title: 'Illustrations',
    desc: 'Custom illustrations and infographics that convey complex information visually and on-brand.',
  },
];

export default function Services() {
  const heading = useReveal<HTMLDivElement>();
  return (
    <section id="services" className="relative px-6 md:px-10 py-24 md:py-32 bg-ink-900 overflow-hidden border-t border-ink-700">
      <div className="absolute inset-0 aurora opacity-30" />
      <div className="max-w-7xl mx-auto relative">
        <div ref={heading} className="reveal grid md:grid-cols-2 gap-8 items-end mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">[ Roles & Responsibilities ]</div>
            <h2 className="font-bold text-4xl md:text-6xl text-ink-50">
              How I <span className="italic font-light text-accent">show up</span> on every project.
            </h2>
          </div>
          <p className="text-ink-200 max-w-md md:justify-self-end">
            Nine practical responsibilities I cover end-to-end on every brief —
            from the first sketch to the final hand-off.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: '1500px' }}>
          {roles.map((r, i) => (
            <TiltCard
              key={r.title}
              max={9}
              rotateReveal={i % 2 === 1}
              className="group relative p-8 rounded-2xl bg-ink-800/70 border border-ink-700 backdrop-blur hover:border-accent/50 hover:bg-ink-800 transition-colors shadow-[0_15px_40px_-15px_rgba(0,0,0,0.6)]"
            >
              <div className="layer-pop">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/30 to-accent/5 border border-accent/40 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <r.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-bold text-xl mb-2 text-ink-50">{r.title}</h3>
                <p className="text-ink-200 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
