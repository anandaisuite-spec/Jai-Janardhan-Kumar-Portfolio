import { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-ink-900/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="min-h-screen flex items-start md:items-center justify-center p-4 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-ink-800 border border-ink-700 rounded-2xl max-w-5xl w-full overflow-hidden relative shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-ink-900/90 backdrop-blur border border-ink-600 flex items-center justify-center text-ink-50 hover:bg-accent hover:border-accent transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <div className="aspect-[16/9] overflow-hidden relative">
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-transparent to-transparent" />
          </div>

          <div className="p-8 md:p-12 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="text-xs uppercase tracking-[0.2em] text-accent mb-3">
                {project.category} · {project.year}
              </div>
              <h3 className="font-display text-4xl md:text-5xl text-ink-50 mb-4">
                {project.title}
              </h3>
              <p className="text-ink-200 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-ink-300 mb-1">
                  Client
                </div>
                <div className="text-ink-50">{project.client}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-ink-300 mb-1">
                  Year
                </div>
                <div className="text-ink-50">{project.year}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-ink-300 mb-2">
                  Disciplines
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full border border-ink-600 text-ink-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-ink-50 text-xs uppercase tracking-widest hover:bg-accent-light transition-colors"
                >
                  View on Behance
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
