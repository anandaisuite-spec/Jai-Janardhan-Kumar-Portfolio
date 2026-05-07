import { Linkedin, ArrowUp, Mail, Phone, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-ink-900 text-ink-200 px-6 md:px-10 pt-16 pb-8 border-t border-ink-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-ink-700">
          <div className="md:col-span-6">
            <h3 className="font-bold text-4xl md:text-6xl text-ink-50 leading-tight">
              Let's make
              <br />
              something <em className="italic font-light text-accent">good</em>.
            </h3>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-accent text-ink-50 hover:bg-accent-light transition-colors shadow-[0_10px_30px_-10px_rgba(91,95,239,0.7)]"
            >
              Start a project
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <div className="text-xs uppercase tracking-widest text-ink-400 mb-4">Sitemap</div>
            <ul className="space-y-2 text-ink-100 text-sm">
              <li><a href="#work" className="hover:text-accent">Work</a></li>
              <li><a href="#about" className="hover:text-accent">Experience</a></li>
              <li><a href="#skills" className="hover:text-accent">Skills</a></li>
              <li><a href="#services" className="hover:text-accent">Roles</a></li>
              <li><a href="#contact" className="hover:text-accent">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-widest text-ink-400 mb-4">Elsewhere</div>
            <ul className="space-y-2 text-ink-100 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-accent" />
                <a href="mailto:Jaijanardhankumar14@gmail.com" className="hover:text-accent break-all">
                  Jaijanardhankumar14@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-accent" />
                <a href="tel:+917848840095" className="hover:text-accent">+91 78488 40095</a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={14} className="text-accent" />
                <a
                  href="https://www.linkedin.com/in/jai-janardhan-kumar-51a995241/"
                  target="_blank" rel="noreferrer"
                  className="hover:text-accent"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink size={14} className="text-accent" />
                <a
                  href="https://www.behance.net/jaijanardhankumar"
                  target="_blank" rel="noreferrer"
                  className="hover:text-accent"
                >
                  Behance
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-ink-400">
          <div>© {new Date().getFullYear()} Jai Janardhan Kumar. All rights reserved.</div>
          <a href="#top" className="inline-flex items-center gap-1 hover:text-accent">
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
