import { ArrowUpRight, Star } from 'lucide-react';
import { useMouseParallax } from '../hooks/useParallax';

const services = ['Graphic Design', '3D Artist', 'Video Editing', 'Animation', '2D Animation'];

function Hero() {
  const back = useMouseParallax<HTMLDivElement>(14);

  return (
    <section
      id="top"
      className="relative min-h-screen pt-28 md:pt-32 pb-24 px-6 md:px-10 overflow-hidden bg-ink-900"
    >
      <div ref={back} className="absolute inset-0 aurora parallax-layer" />
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="glow-blue w-[700px] h-[700px] -top-40 left-1/2 -translate-x-1/2" />

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center text-center">
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-ink-200 mb-8">
          <span className="relative w-2 h-2 rounded-full bg-accent pulse-ring" />
          Graphic Designer & 3D Artist · Bengaluru, IN
        </div>

        <h1 className="font-sans font-extrabold text-ink-50 leading-[0.92] tracking-tight">
          <span className="block text-[14vw] md:text-[10vw]">Jai Janardhan</span>
          <span className="block text-[10vw] md:text-[7.2vw] mt-2 md:mt-4">
            Next-Level <span className="font-light italic text-accent">Designer</span>
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full mt-12 md:mt-16 relative z-10 max-w-4xl">
          <p className="text-ink-200 text-sm md:text-base max-w-md md:text-left mx-auto md:mx-0">
            Highly creative designer with the ability to work within a team —
            managing other designers and coordinating delivery across more than
            twelve Jain Group branches.
          </p>
          <div className="md:justify-self-end flex flex-col md:items-end gap-4">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-accent mb-1">Available now</div>
              <div className="text-ink-50 text-sm">Open to freelance · Bengaluru</div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-accent text-ink-50 text-xs uppercase tracking-widest hover:bg-accent-light transition-colors shadow-[0_8px_24px_-8px_rgba(91,95,239,0.8)]"
            >
              Hire Me For Freelance
              <span className="w-7 h-7 rounded-full bg-ink-900 flex items-center justify-center">
                <ArrowUpRight size={12} />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 left-0 right-0 z-20">
        <div className="diag-banner" style={{ transform: 'rotate(-3deg)' }}>
          <div className="flex animate-marquee whitespace-nowrap">
            {[...services, ...services, ...services].map((s, i) => (
              <span key={i} className="mx-6 inline-flex items-center gap-6 text-2xl md:text-3xl font-bold">
                {s}
                <Star size={18} className="text-ink-50 fill-ink-50" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default Hero