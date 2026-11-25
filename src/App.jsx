import React from 'react';
import {
  ArrowDown,
  HardDrive,
  Layers,
  KeyRound,
  CheckCircle2,
  Mail,
} from 'lucide-react';
import { SITE_CONFIG } from './config.js';
import Navbar from './components/Navbar.jsx';
import { ThinknoteLogo, PlayStoreButton } from './components/BrandMark.jsx';
import PhoneShowcase from './components/PhoneShowcase.jsx';
import BentoFeatures from './components/BentoFeatures.jsx';
import AISection from './components/AISection.jsx';
import PrivacyAndFaq from './components/PrivacyAndFaq.jsx';

const VALUE_PILLARS = [
  {
    icon: HardDrive,
    title: 'Zero cloud lock-in',
    desc: 'Every note and task lives in an on-device SQLite database. Launches instantly, works offline anywhere, and never holds your thoughts behind a login.',
  },
  {
    icon: Layers,
    title: 'Notes and tasks, unified',
    desc: 'Stop juggling two apps. Every task holds a structured block note with collapsible toggles, checklists, nested subtasks, tags, and custom filters.',
  },
  {
    icon: KeyRound,
    title: 'AI without a middleman',
    desc: 'Optionally connect your own Anthropic Claude and Deepgram keys directly from your phone—full workspace AI & voice with zero subscription markup.',
  },
];

export default function App() {
  return (
    <div className="app-shell" id="top">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero__grid-bg" aria-hidden="true" />
          <div className="hero__glow" aria-hidden="true" />

          <div className="container hero__inner">
            <div className="hero__copy">
              <div className="hero__badge">
                <span className="status-dot status-dot--blue" />
                Android · 100% Local-First · No Account Required
              </div>

              <h1 className="hero__title">
                Local-first notes, tasks &amp; AI —{' '}
                <span className="hero__title-accent">built for your device.</span>
              </h1>

              <p className="hero__subtitle">
                Thinknote brings structured block notes, nested tasks, draggable floating notes, and
                an optional Bring-Your-Own-Key Claude &amp; Deepgram assistant into one calm,
                offline-first Android workspace.
              </p>

              <div className="hero__actions">
                <PlayStoreButton variant="light" size="lg" />
                <a href="#demo" className="btn-ghost-light">
                  Try interactive preview <ArrowDown size={16} />
                </a>
              </div>

              <ul className="hero__trust">
                <li>
                  <CheckCircle2 size={15} /> Offline SQLite storage
                </li>
                <li>
                  <CheckCircle2 size={15} /> Zero ads or tracking
                </li>
                <li>
                  <CheckCircle2 size={15} /> BYOK Claude &amp; Deepgram
                </li>
              </ul>
            </div>

            <div className="hero__visual">
              <PhoneShowcase />
            </div>
          </div>
        </section>

        {/* Value Pillars */}
        <section className="section section--white pillars-section">
          <div className="container">
            <div className="pillars-grid">
              {VALUE_PILLARS.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="pillar-item">
                  <div className="pillar-item__icon">
                    <Icon size={20} />
                  </div>
                  <h2 className="pillar-item__title">{title}</h2>
                  <p className="pillar-item__desc">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features Bento */}
        <BentoFeatures />

        {/* BYOK AI & Voice Deep Dive */}
        <AISection />

        {/* Privacy & FAQ */}
        <PrivacyAndFaq />

        {/* Final CTA Banner */}
        <section className="section section--white cta-section">
          <div className="container">
            <div className="cta-card">
              <div className="cta-card__grid" aria-hidden="true" />
              <div className="cta-card__content">
                <ThinknoteLogo size={56} className="cta-card__logo" />
                <h2 className="cta-card__title">Think clearly. Own your notes.</h2>
                <p className="cta-card__subtitle">
                  Download Thinknote for Android and get a calm, local-first workspace for your
                  notes, tasks, and optional BYOK AI.
                </p>
                <div className="cta-card__actions">
                  <PlayStoreButton variant="light" size="lg" />
                </div>
                <p className="cta-card__footnote">
                  Android · Offline-ready · No account required
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <a href="#top" className="navbar__brand">
              <ThinknoteLogo size={30} />
              <span className="footer__wordmark">{SITE_CONFIG.appName}</span>
            </a>
            <p className="footer__tagline">{SITE_CONFIG.tagline}</p>
          </div>

          <div className="footer__links">
            <a href="#features">Features</a>
            <a href="#ai-voice">AI &amp; Voice</a>
            <a href="#privacy">Privacy</a>
            <a href="#faq">FAQ</a>
            <a href={SITE_CONFIG.privacyPolicyUrl}>Privacy Policy</a>
            <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="footer__mail">
              <Mail size={14} /> Contact
            </a>
          </div>

          <div className="footer__meta">
            <span>&copy; {SITE_CONFIG.year} {SITE_CONFIG.appName}. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
