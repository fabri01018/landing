import React, { useState } from 'react';
import {
  ChevronRight,
  ChevronDown,
  Check,
  Sparkles,
  Mic,
  Pin,
  Minimize2,
  Maximize2,
  Plus,
  Folder,
  Tag,
  Wrench,
  FileText,
  Layers,
} from 'lucide-react';

const INITIAL_EDITOR_STATE = {
  toggles: {
    launch: true,
    notes: false,
  },
  checks: [
    { id: 'c1', text: 'Finalize local SQLite schema & offline migrations', done: true },
    { id: 'c2', text: 'Test Claude workspace tools with Inbox tasks', done: true },
    { id: 'c3', text: 'Record voice memo with Deepgram transcription', done: false },
    { id: 'c4', text: 'Publish v1.0 release notes on Google Play', done: false },
  ],
};

const INITIAL_FLOATING_CHECKS = [
  { id: 'f1', text: 'Ask design review feedback on dark theme', done: true },
  { id: 'f2', text: 'Check Deepgram TTS latency on Pixel', done: false },
  { id: 'f3', text: 'Pin meeting notes while triaging Inbox', done: false },
];

const AI_FOLLOWUP_REPLIES = {
  'Create 3 subtasks in Launch': {
    tool: 'create_task (×3)',
    reply:
      'Done — added 3 subtasks under "Android Launch" and tagged them #release. Your local database is updated.',
  },
  'Summarize open blockers': {
    tool: 'get_tasks_by_tag("#blocker")',
    reply:
      'You have 1 open blocker: testing voice input on low-network flight mode. Everything else in Launch is ready.',
  },
};

export default function PhoneShowcase() {
  const [activeTab, setActiveTab] = useState('editor');

  // Editor tab state
  const [toggles, setToggles] = useState(INITIAL_EDITOR_STATE.toggles);
  const [checks, setChecks] = useState(INITIAL_EDITOR_STATE.checks);
  const [savedPulse, setSavedPulse] = useState(false);

  // AI tab state
  const [selectedQuestionOption, setSelectedQuestionOption] = useState(null);

  // Floating note tab state
  const [bubbleMinimized, setBubbleMinimized] = useState(false);
  const [floatingChecks, setFloatingChecks] = useState(INITIAL_FLOATING_CHECKS);
  const [inboxCompleted, setInboxCompleted] = useState({ i1: false, i2: true, i3: false });

  const triggerAutosave = () => {
    setSavedPulse(true);
    window.setTimeout(() => setSavedPulse(false), 900);
  };

  const toggleSection = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleCheck = (id) => {
    setChecks((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
    triggerAutosave();
  };

  const addQuickItem = () => {
    const extras = [
      'Draft onboarding template for daily planning',
      'Tag priority notes with #focus',
      'Pin release checklist to floating bubble',
    ];
    const nextText = extras[checks.length % extras.length];
    setChecks((prev) => [
      ...prev,
      { id: `c-${Date.now()}`, text: nextText, done: false },
    ]);
    triggerAutosave();
  };

  const toggleFloatingCheck = (id) => {
    setFloatingChecks((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    );
  };

  const toggleInboxItem = (id) => {
    setInboxCompleted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = checks.filter((c) => c.done).length;

  return (
    <div className="phone-showcase" id="demo">
      {/* Interactive mode switcher above phone */}
      <div className="phone-switcher" role="tablist" aria-label="Interactive app preview modes">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'editor'}
          className={`phone-switcher__btn ${activeTab === 'editor' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('editor')}
        >
          <FileText size={15} />
          <span>Block Note</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'ai'}
          className={`phone-switcher__btn ${activeTab === 'ai' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('ai')}
        >
          <Sparkles size={15} />
          <span>AI + Voice</span>
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'floating'}
          className={`phone-switcher__btn ${activeTab === 'floating' ? 'is-active' : ''}`}
          onClick={() => setActiveTab('floating')}
        >
          <Layers size={15} />
          <span>Floating Note</span>
        </button>
      </div>

      {/* Android device frame */}
      <div className="phone-frame">
        <div className="phone-frame__camera" aria-hidden="true" />
        <div className="phone-frame__status-bar">
          <span>9:41</span>
          <span className="phone-frame__offline-pill">
            <span className="status-dot status-dot--green" />
            Local SQLite
          </span>
        </div>

        <div className="phone-screen">
          {activeTab === 'editor' && (
            <div className="screen-editor">
              <div className="screen-editor__breadcrumb">
                <span className="crumb">
                  <Folder size={12} /> Product Launch
                </span>
                <span className={`autosave-badge ${savedPulse ? 'is-saving' : ''}`}>
                  {savedPulse ? 'Saving...' : 'Saved locally'}
                </span>
              </div>

              <h3 className="screen-editor__title">Android v1.0 Launch Plan</h3>

              <div className="screen-editor__tags">
                <span className="mini-tag mini-tag--blue">
                  <Tag size={10} /> release
                </span>
                <span className="mini-tag mini-tag--navy">
                  <Tag size={10} /> priority
                </span>
                <span className="mini-tag mini-tag--muted">
                  {completedCount}/{checks.length} done
                </span>
              </div>

              {/* Collapsible toggle block 1 */}
              <div className="block-toggle">
                <button
                  type="button"
                  className="block-toggle__header"
                  onClick={() => toggleSection('launch')}
                >
                  {toggles.launch ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
                  <span>Pre-release checklist</span>
                </button>
                {toggles.launch && (
                  <div className="block-toggle__children">
                    {checks.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className={`block-check ${item.done ? 'is-done' : ''}`}
                        onClick={() => toggleCheck(item.id)}
                      >
                        <span className="block-check__box">
                          {item.done && <Check size={11} strokeWidth={3} />}
                        </span>
                        <span className="block-check__label">{item.text}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Collapsible toggle block 2 */}
              <div className="block-toggle">
                <button
                  type="button"
                  className="block-toggle__header"
                  onClick={() => toggleSection('notes')}
                >
                  {toggles.notes ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
                  <span>Architecture &amp; BYOK notes</span>
                </button>
                {toggles.notes && (
                  <div className="block-toggle__children block-toggle__text">
                    All notes live inside SQLite on-device. Claude &amp; Deepgram keys stay
                    local and connect directly over HTTPS/WSS.
                  </div>
                )}
              </div>

              {/* Bottom editor toolbar mimicking TipTap editor */}
              <div className="screen-editor__toolbar">
                <div className="toolbar-chips">
                  <button
                    type="button"
                    className="toolbar-btn"
                    onClick={addQuickItem}
                    title="Add checklist item"
                  >
                    <Plus size={13} /> Check
                  </button>
                  <button
                    type="button"
                    className="toolbar-btn"
                    onClick={() => toggleSection('notes')}
                    title="Toggle collapsible block"
                  >
                    &gt; Toggle
                  </button>
                  <span className="toolbar-hint">H · List · Text</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="screen-ai">
              <div className="screen-ai__header">
                <div>
                  <div className="screen-ai__title">Thinknote AI</div>
                  <div className="screen-ai__sub">Claude Sonnet · BYOK Direct</div>
                </div>
                <span className="screen-ai__tools-pill">
                  <Wrench size={11} /> 21 tools on
                </span>
              </div>

              <div className="screen-ai__messages">
                <div className="ai-bubble ai-bubble--user">
                  Review my Launch project and tell me what&apos;s still open.
                </div>

                <div className="ai-tool-trace">
                  <Wrench size={11} />
                  <span>get_tasks_by_project(&quot;Product Launch&quot;)</span>
                </div>

                <div className="ai-bubble ai-bubble--assistant">
                  <p>
                    You have <strong>2 open items</strong> in Product Launch: recording the
                    Deepgram voice test and publishing the Play Store notes.
                  </p>
                  <div className="ai-question-card">
                    <div className="ai-question-card__prompt">
                      Want me to organize the next steps?
                    </div>
                    <div className="ai-question-card__options">
                      {Object.keys(AI_FOLLOWUP_REPLIES).map((option) => (
                        <button
                          key={option}
                          type="button"
                          className={`ai-option-btn ${
                            selectedQuestionOption === option ? 'is-selected' : ''
                          }`}
                          onClick={() => setSelectedQuestionOption(option)}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedQuestionOption && (
                  <>
                    <div className="ai-tool-trace">
                      <Wrench size={11} />
                      <span>{AI_FOLLOWUP_REPLIES[selectedQuestionOption].tool}</span>
                    </div>
                    <div className="ai-bubble ai-bubble--assistant">
                      <p>{AI_FOLLOWUP_REPLIES[selectedQuestionOption].reply}</p>
                    </div>
                  </>
                )}
              </div>

              <div className="screen-ai__composer">
                <span className="screen-ai__placeholder">Ask Claude or tap mic...</span>
                <span className="screen-ai__mic" title="Deepgram live voice input">
                  <Mic size={14} />
                </span>
              </div>
            </div>
          )}

          {activeTab === 'floating' && (
            <div className="screen-floating">
              <div className="screen-floating__header">
                <span>Inbox</span>
                <span className="screen-floating__badge">3 tasks</span>
              </div>

              <div className="inbox-list">
                {[
                  { id: 'i1', title: 'Review Q2 roadmap doc', tag: 'work' },
                  { id: 'i2', title: 'Export SQLite backup test', tag: 'dev' },
                  { id: 'i3', title: 'Draft onboarding snippets', tag: 'product' },
                ].map((task) => {
                  const done = inboxCompleted[task.id];
                  return (
                    <button
                      key={task.id}
                      type="button"
                      className={`inbox-row ${done ? 'is-done' : ''}`}
                      onClick={() => toggleInboxItem(task.id)}
                    >
                      <span className="block-check__box">
                        {done && <Check size={11} strokeWidth={3} />}
                      </span>
                      <span className="inbox-row__title">{task.title}</span>
                      <span className="inbox-row__tag">#{task.tag}</span>
                    </button>
                  );
                })}
              </div>

              {/* Signature Floating Note Bubble overlay */}
              <div className={`floating-bubble ${bubbleMinimized ? 'is-minimized' : ''}`}>
                <div className="floating-bubble__bar">
                  <span className="floating-bubble__title">
                    <Pin size={12} /> Pinned: Sprint Standup
                  </span>
                  <button
                    type="button"
                    className="floating-bubble__toggle"
                    aria-label={bubbleMinimized ? 'Expand floating note' : 'Minimize floating note'}
                    onClick={() => setBubbleMinimized((prev) => !prev)}
                  >
                    {bubbleMinimized ? <Maximize2 size={13} /> : <Minimize2 size={13} />}
                  </button>
                </div>

                {!bubbleMinimized && (
                  <div className="floating-bubble__body">
                    {floatingChecks.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        className={`block-check block-check--compact ${
                          item.done ? 'is-done' : ''
                        }`}
                        onClick={() => toggleFloatingCheck(item.id)}
                      >
                        <span className="block-check__box">
                          {item.done && <Check size={10} strokeWidth={3} />}
                        </span>
                        <span className="block-check__label">{item.text}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="phone-showcase__hint">
        Interactive preview — click toggles, checklists, AI quick-replies, or minimize the floating
        note.
      </p>
    </div>
  );
}
