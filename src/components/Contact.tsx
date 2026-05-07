import { useState, FormEvent } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Send, Linkedin } from 'lucide-react';
import { supabase } from '../lib/supabase';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    if (!supabase) {
      setStatus('error');
      setErrorMsg('Contact form is not configured yet.');
      return;
    }
    const { error } = await supabase.from('contact_messages').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
    });
    if (error) {
      setStatus('error');
      setErrorMsg(error.message);
      return;
    }
    setStatus('sent');
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative px-6 md:px-10 py-24 md:py-32 bg-ink-900 overflow-hidden border-t border-ink-700">
      <div className="absolute inset-0 aurora opacity-40" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 relative">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-4">[ Contact ]</div>
          <h2 className="font-bold text-4xl md:text-6xl text-ink-50 mb-8">
            Have a project in <span className="italic font-light text-accent">mind</span>?
          </h2>
          <p className="text-ink-200 text-lg max-w-md mb-10">
            Tell me a little about what you're working on. I'll get back to you
            within two business days.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-accent mt-1 shrink-0" />
              <a href="mailto:Jaijanardhankumar14@gmail.com" className="text-ink-50 hover:text-accent break-all">
                Jaijanardhankumar14@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-accent mt-1 shrink-0" />
              <a href="tel:+917848840095" className="text-ink-50 hover:text-accent">
                +91 78488 40095
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-accent mt-1 shrink-0" />
              <span className="text-ink-50">T.C Palya, Bengaluru 560036</span>
            </li>
            <li className="flex items-start gap-3">
              <Linkedin size={18} className="text-accent mt-1 shrink-0" />
              <a
                href="https://www.linkedin.com/in/jai-janardhan-kumar-51a995241/"
                target="_blank"
                rel="noreferrer"
                className="text-ink-50 hover:text-accent break-all"
              >
                linkedin.com/in/jai-janardhan-kumar
              </a>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="md:col-span-7 bg-ink-800/70 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-ink-700 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs uppercase tracking-widest text-ink-300 mb-2 block">Name</label>
              <input
                required
                value={form.name}
                onChange={onChange('name')}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-ink-900/80 border border-ink-700 focus:border-accent focus:outline-none text-ink-50 placeholder:text-ink-500"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-ink-300 mb-2 block">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={onChange('email')}
                placeholder="you@studio.com"
                className="w-full px-4 py-3 rounded-lg bg-ink-900/80 border border-ink-700 focus:border-accent focus:outline-none text-ink-50 placeholder:text-ink-500"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="text-xs uppercase tracking-widest text-ink-300 mb-2 block">Subject</label>
            <input
              value={form.subject}
              onChange={onChange('subject')}
              placeholder="Brand identity, 3D, motion graphics…"
              className="w-full px-4 py-3 rounded-lg bg-ink-900/80 border border-ink-700 focus:border-accent focus:outline-none text-ink-50 placeholder:text-ink-500"
            />
          </div>

          <div className="mt-5">
            <label className="text-xs uppercase tracking-widest text-ink-300 mb-2 block">
              Tell me about your project
            </label>
            <textarea
              required
              value={form.message}
              onChange={onChange('message')}
              rows={6}
              placeholder="A few sentences on what you're working on, timeline, and any references."
              className="w-full px-4 py-3 rounded-lg bg-ink-900/80 border border-ink-700 focus:border-accent focus:outline-none text-ink-50 placeholder:text-ink-500 resize-none"
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-xs text-ink-300">
              Your message lands directly in my inbox — never shared.
            </p>
            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent text-ink-50 hover:bg-accent-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_10px_30px_-10px_rgba(91,95,239,0.7)]"
            >
              {status === 'sent' ? (
                <>
                  <CheckCircle2 size={16} /> Message sent
                </>
              ) : status === 'sending' ? (
                <>
                  <Send size={16} className="animate-pulse" /> Sending…
                </>
              ) : (
                <>
                  Send message <ArrowRight size={16} />
                </>
              )}
            </button>
          </div>

          {status === 'error' && (
            <p className="mt-4 text-sm text-accent-light">
              Something went wrong: {errorMsg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
