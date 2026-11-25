import React, { useState } from 'react';
import {
  Sparkles,
  Mic,
  Volume2,
  KeyRound,
  Wrench,
  Smartphone,
  ShieldCheck,
  ArrowLeftRight,
  Sliders,
} from 'lucide-react';

const SCENARIOS = [
  {
    id: 'plan',
    label: 'Weekly Planning',
    prompt: 'Look through my Inbox and organize anything related to the Q2 Launch into subtasks.',
    tools: ['get_tasks_by_project("Inbox")', 'get_projects()', 'create_task()', 'add_tag_to_task()'],
    outcome:
      'Found 4 launch items in Inbox. Moved them into Product Launch → Q2 Milestones, created structured checklists, and tagged them #launch.',
  },
  {
    id: 'triage',
    label: 'Tag Triage',
    prompt: 'Which #deep-work tasks are still incomplete across all projects?',
    tools: ['get_all_tags()', 'get_tasks_by_tag("deep-work")'],
    outcome:
      'Grouped 5 incomplete #deep-work items by project and suggested a 3-step order—with one-tap follow-up buttons to mark items complete.',
  },
  {
    id: 'voice',
    label: 'Voice Capture',
    prompt: 'Dictate a brainstorm hands-free and have Claude turn it into a structured toggle note.',
    tools: ['Deepgram Live STT (WSS)', 'create_task()', 'Deepgram Aura TTS'],
    outcome:
      'Transcribed speech in real time, converted key points into collapsible toggle blocks and checklists, and read back a concise summary.',
  },
];

export default function AISection() {
  const [activeId, setActiveId] = useState(SCENARIOS[0].id);
  const current = SCENARIOS.find((s) => s.id === activeId) || SCENARIOS[0];

  return (
    <section className="section section--navy ai-section" id="ai-voice">
      <div className="container">
        <div className="section-header section-header--dark">
          <span className="eyebrow eyebrow--dark">
            <Sparkles size={13} /> Optional Bring-Your-Own-Key AI
          </span>
          <h2 className="section-title section-title--dark">
            An AI assistant that actually knows your workspace — with zero middleman.
          </h2>
          <p className="section-subtitle section-subtitle--dark">
            Thinknote works completely offline out of the box. When you want AI or voice, paste your
            own Anthropic (Claude) or Deepgram API key—requests travel directly from your device to
            the provider.
          </p>
        </div>

        <div className="ai-layout">
          {/* Interactive Scenario Explorer */}
          <div className="ai-explorer">
            <div className="ai-explorer__tabs" role="tablist" aria-label="AI workflow scenarios">
              {SCENARIOS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={item.id === activeId}
                  className={`ai-tab ${item.id === activeId ? 'is-active' : ''}`}
                  onClick={() => setActiveId(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="ai-explorer__panel">
              <div className="ai-step">
                <span className="ai-step__label">You ask</span>
                <p className="ai-step__prompt">&ldquo;{current.prompt}&rdquo;</p>
              </div>

              <div className="ai-step">
                <span className="ai-step__label">
                  <Wrench size={12} /> Local workspace tools invoked
                </span>
                <div className="tool-pills">
                  {current.tools.map((tool) => (
                    <code key={tool} className="tool-pill">
                      {tool}
                    </code>
                  ))}
                </div>
              </div>

              <div className="ai-step ai-step--outcome">
                <span className="ai-step__label">Result in your local SQLite workspace</span>
                <p className="ai-step__outcome">{current.outcome}</p>
              </div>
            </div>
          </div>

          {/* Feature Highlights + Direct Architecture */}
          <div className="ai-details">
            <div className="ai-arch-card">
              <div className="ai-arch-card__title">Direct Device-to-API Architecture</div>
              <div className="ai-arch-flow">
                <div className="arch-node">
                  <Smartphone size={18} />
                  <div>
                    <strong>Your Android Device</strong>
                    <span>SQLite + Local API Keys</span>
                  </div>
                </div>
                <div className="arch-connector" aria-hidden="true">
                  <ArrowLeftRight size={16} />
                  <span>Direct HTTPS / WSS</span>
                </div>
                <div className="arch-node arch-node--accent">
                  <ShieldCheck size={18} />
                  <div>
                    <strong>Anthropic &amp; Deepgram</strong>
                    <span>No Thinknote proxy server</span>
                  </div>
                </div>
              </div>
            </div>

            <ul className="ai-feature-list">
              <li>
                <div className="ai-feature-icon">
                  <KeyRound size={17} />
                </div>
                <div>
                  <h4>Bring Your Own Key (BYOK)</h4>
                  <p>
                    Pay providers directly at raw API rates instead of another $20/month AI markup.
                    Clear or rotate keys anytime in AI Settings.
                  </p>
                </div>
              </li>
              <li>
                <div className="ai-feature-icon">
                  <Sliders size={17} />
                </div>
                <div>
                  <h4>20+ Workspace Tools &amp; Custom Prompts</h4>
                  <p>
                    Toggle tool access on or off, attach specific tasks as context, customize your
                    system prompt, and tap structured quick-reply options.
                  </p>
                </div>
              </li>
              <li>
                <div className="ai-feature-icon">
                  <Mic size={17} />
                </div>
                <div>
                  <h4>Live Voice Transcription &amp; Spoken Replies</h4>
                  <p>
                    Optional Deepgram integration powers live speech-to-text capture and
                    text-to-speech voice mode (
                    <Volume2 size={12} className="inline-icon" /> Aura) for hands-free thinking.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
