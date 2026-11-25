import React, { useState } from 'react';
import {
  ShieldCheck,
  UserX,
  EyeOff,
  Trash2,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';
import { SITE_CONFIG } from '../config.js';

const PRIVACY_CARDS = [
  {
    icon: UserX,
    title: 'No account required',
    desc: 'Open Thinknote and start writing immediately. No sign-up wall, no email harvesting, no password to remember.',
  },
  {
    icon: EyeOff,
    title: 'Zero ads or tracking SDKs',
    desc: 'No behavioral analytics, no third-party ad networks, and no silent telemetry running in the background.',
  },
  {
    icon: ShieldCheck,
    title: 'Your keys stay on your phone',
    desc: 'Optional Anthropic and Deepgram keys are stored locally on your device and never touch developer servers.',
  },
  {
    icon: Trash2,
    title: 'Full ownership & one-tap erase',
    desc: 'Delete individual items anytime, clear API keys in AI Settings, or erase all local data in one tap.',
  },
];

const FAQ_ITEMS = [
  {
    q: 'Do I need an AI API key to use Thinknote?',
    a: 'Not at all. Thinknote is a complete, fast, offline notes and tasks app right out of the box—projects, sections, nested subtasks, block toggles, checklists, tags, filters, templates, snippets, and floating notes all work 100% locally without any API keys.',
  },
  {
    q: 'How does Bring Your Own Key (BYOK) work for Claude and Deepgram?',
    a: 'If you want optional AI chat or voice features, open AI Settings → API Keys and paste your own Anthropic (Claude) and/or Deepgram API key. Your keys are stored solely on your Android device, and requests go directly from your phone to Anthropic or Deepgram over encrypted connections.',
  },
  {
    q: 'Where are my notes and tasks stored?',
    a: 'All your projects, sections, tasks, notes, tags, filters, templates, snippets, and AI chat history are stored locally in an SQLite database on your Android device. Developer-operated servers never receive or store your content.',
  },
  {
    q: 'What makes Thinknote different from Notion or Todoist?',
    a: 'Todoist excels at tasks but keeps notes shallow; Notion gives you rich blocks but depends heavily on cloud loading and subscriptions. Thinknote merges both worlds into a local-first mobile app—giving every task a rich block-based note, a draggable floating note bubble, and an optional BYOK Claude assistant with direct tool access.',
  },
  {
    q: 'What permissions does the Android app request?',
    a: 'Thinknote only requests optional Microphone permission when you explicitly tap the voice input button for live speech-to-text transcription. Audio is never recorded in the background and is never stored on developer servers.',
  },
];

export default function PrivacyAndFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {/* Privacy Promise */}
      <section className="section section--white" id="privacy">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Privacy by architecture</span>
            <h2 className="section-title">Your thoughts belong to you. Period.</h2>
            <p className="section-subtitle">
              Privacy isn&apos;t a toggle buried in settings—it&apos;s how Thinknote is built from the
              ground up.
            </p>
          </div>

          <div className="privacy-grid">
            {PRIVACY_CARDS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="privacy-card">
                <div className="privacy-card__icon">
                  <Icon size={20} />
                </div>
                <h3 className="privacy-card__title">{title}</h3>
                <p className="privacy-card__desc">{desc}</p>
              </div>
            ))}
          </div>

          <div className="privacy-banner">
            <div>
              <strong>Plain-English Privacy Policy</strong>
              <p>
                Read exactly how Thinknote handles local storage, optional API keys, and device
                permissions.
              </p>
            </div>
            <a
              href={SITE_CONFIG.privacyPolicyUrl}
              className="btn-secondary btn-secondary--navy"
            >
              Read Privacy Policy <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--porcelain" id="faq">
        <div className="container container--narrow">
          <div className="section-header">
            <span className="eyebrow">Questions &amp; answers</span>
            <h2 className="section-title">Frequently asked questions</h2>
          </div>

          <div className="faq-list">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.q} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                  <button
                    type="button"
                    className="faq-item__trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown size={18} className="faq-item__chevron" />
                  </button>
                  {isOpen && (
                    <div className="faq-item__body">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
