import { useEffect, useState } from 'react';
import { Menu, X, Linkedin, ExternalLink, ArrowUpRight } from 'lucide-react';

const links = [
  { href: '#top', label: 'Home' },
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink-900/80 backdrop-blur-xl border-b border-ink-700' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between relative">
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest text-ink-100">
          {links.slice(0, 3).map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#top"
          className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center gap-2 group"
        >
          <span className="w-9 h-9 rounded-full bg-accent text-ink-50 flex items-center justify-center font-bold shadow-[0_8px_24px_-8px_rgba(91,95,239,0.8)] group-hover:rotate-12 transition-transform">
            J
          </span>
          <span className="font-bold text-xl text-ink-50 tracking-tight whitespace-nowrap">Jai Janardhan Kumar</span>
        </a>

        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-3 text-ink-200">
            <a
              href="https://www.behance.net/jaijanardhankumar"
              target="_blank" rel="noreferrer"
              aria-label="Behance"
              className="hover:text-accent"
            >
              <ExternalLink size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/jai-janardhan-kumar-51a995241/"
              target="_blank" rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent"
            >
              <Linkedin size={16} />
            </a>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 pl-5 pr-2 py-2 rounded-full bg-accent text-ink-50 text-xs uppercase tracking-widest hover:bg-accent-light transition-colors shadow-[0_8px_24px_-8px_rgba(91,95,239,0.8)]"
          >
            Hire Me
            <span className="w-7 h-7 rounded-full bg-ink-900 flex items-center justify-center">
              <ArrowUpRight size={12} />
            </span>
          </a>
        </div>

        <button className="md:hidden text-ink-50 ml-auto" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-ink-900 border-t border-ink-700 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ink-50 text-lg">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center px-4 py-3 rounded-full bg-accent text-ink-50"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
