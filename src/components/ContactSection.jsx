import { useState } from 'react';
import { ArrowUpRight, Check, Clock, Github, Linkedin, Mail, Phone, Send } from 'lucide-react';
import { SectionHeader, SectionShell } from './ui.jsx';
import { profile } from '../data/portfolio.js';

function linkProps(href) {
  return /^https?:\/\//.test(href) ? { target: '_blank', rel: 'noreferrer' } : {};
}

const touchPoints = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Project briefs & scope',
    href: `mailto:${profile.email}?subject=Freelance%20project%20inquiry`,
    label: profile.email,
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Freelance & collaborations',
    href: profile.linkedinUrl,
    label: 'devesh-rajput',
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'After an intro message',
    href: `tel:${profile.phone.replace(/\s+/g, '')}`,
    label: profile.phone,
  },
  {
    icon: Github,
    title: 'GitHub',
    description: 'Code & shipped work',
    href: 'https://github.com/devdoesgit',
    label: 'devdoesgit',
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const update = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: 'Freelance project inquiry — Portfolio',
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!res.ok) throw new Error('send failed');

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  }

  return (
    <SectionShell id="contact" variant="accent">
      <SectionHeader number="05" title="Contact" note="hire me ✦" />

      <div className="contact-stage" data-reveal>
        <div className="contact-panel contact-panel--links">
          <h3 className="contact-panel-kicker">Get in touch</h3>
          <p className="contact-panel-lede">
            Open for freelance gigs — MVPs, APIs, dashboards, and full-stack builds. Pick a channel or send a message.
          </p>

          <div className="contact-chips">
            {touchPoints.map((item) => (
              <a className="contact-chip" href={item.href} key={item.title} {...linkProps(item.href)}>
                <span className="contact-chip-icon">
                  <item.icon size={17} strokeWidth={1.75} />
                </span>
                <span className="contact-chip-text">
                  <strong>{item.title}</strong>
                  <small>{item.label}</small>
                </span>
                <ArrowUpRight size={15} />
              </a>
            ))}
          </div>

          <div className="contact-badges">
            <span>
              <Clock size={14} />
              Replies within 24h
            </span>
            <span>
              <Check size={14} />
              Remote · freelance
            </span>
          </div>
        </div>

        <div className="contact-panel contact-panel--form">
          <div className="contact-form-pin" aria-hidden />
          <h3 className="contact-form-title">Send a message</h3>
          <p className="contact-form-sub">What are you building? Timeline, budget, links — the more context the better.</p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <input type="text" name="_honey" className="form-honey" tabIndex={-1} autoComplete="off" aria-hidden />

            <label className="form-field">
              <span>Full name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={update('name')}
                placeholder="Your name"
                required
                autoComplete="name"
              />
            </label>

            <label className="form-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update('email')}
                placeholder="you@company.com"
                required
                autoComplete="email"
              />
            </label>

            <label className="form-field">
              <span>Project details</span>
              <textarea
                name="message"
                value={form.message}
                onChange={update('message')}
                placeholder="Goals, features, stack preferences, deadline..."
                rows={4}
                required
              />
            </label>

            {status === 'success' && (
              <p className="form-feedback form-feedback--success" role="status">
                Sent — I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="form-feedback form-feedback--error" role="alert">
                Couldn&apos;t send. Email{' '}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
            )}

            <button type="submit" className="form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </SectionShell>
  );
}
