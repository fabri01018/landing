import React, { useState } from 'react';
import {
  FileText,
  Layers,
  FolderTree,
  Bookmark,
  Sun,
  Moon,
  Smartphone,
  HardDrive,
  Check,
  ChevronDown,
  Pin,
} from 'lucide-react';

export default function BentoFeatures() {
  const [previewTheme, setPreviewTheme] = useState('dark');

  return (
    <section className="section section--porcelain" id="features">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Built for deep work</span>
          <h2 className="section-title">
            Everything you need to capture, structure, and act — without bloat.
          </h2>
          <p className="section-subtitle">
            Thinknote combines the clarity of a task manager with the depth of a block-based notes
            editor, engineered to feel instantaneous on Android.
          </p>
        </div>

        <div className="bento-grid">
          {/* Card 1: Wide - Rich Block Editor */}
          <article className="bento-card bento-card--wide">
            <div className="bento-card__icon">
              <FileText size={20} />
            </div>
            <h3 className="bento-card__title">Structured block notes inside every task</h3>
            <p className="bento-card__desc">
              Write fluidly with collapsible toggles, nested checklists, headings, bullet lists, and
              indentation—or switch to raw plain-text mode for rapid bulk editing. Debounced
              autosave protects every keystroke.
            </p>
            <div className="bento-preview bento-preview--editor">
              <div className="syntax-row">
                <code>&gt; </code>
                <span className="syntax-chip">
                  <ChevronDown size={13} /> Collapsible toggle block
                </span>
              </div>
              <div className="syntax-row">
                <code>- [ ]</code>
                <span className="syntax-chip">
                  <span className="mini-checkbox is-checked">
                    <Check size={10} strokeWidth={3} />
                  </span>
                  Interactive checklist item
                </span>
              </div>
              <div className="syntax-row">
                <code># </code>
                <span className="syntax-chip syntax-chip--bold">Section heading &amp; outline</span>
              </div>
            </div>
          </article>

          {/* Card 2: Floating Note Bubble */}
          <article className="bento-card">
            <div className="bento-card__icon">
              <Layers size={20} />
            </div>
            <h3 className="bento-card__title">Floating note bubble</h3>
            <p className="bento-card__desc">
              Pin any note as a draggable overlay that stays on screen while you browse projects,
              triage your Inbox, or chat with AI. Check items off right from the bubble.
            </p>
            <div className="bento-preview bento-preview--bubble">
              <div className="mini-float">
                <div className="mini-float__head">
                  <Pin size={12} /> Reference Note
                </div>
                <div className="mini-float__line">
                  <span className="mini-checkbox is-checked">
                    <Check size={9} strokeWidth={3} />
                  </span>
                  <span>Sync agenda before 2 PM</span>
                </div>
                <div className="mini-float__line">
                  <span className="mini-checkbox" />
                  <span>Confirm release checklist</span>
                </div>
              </div>
            </div>
          </article>

          {/* Card 3: Projects, Sections, Subtasks & Filters */}
          <article className="bento-card">
            <div className="bento-card__icon">
              <FolderTree size={20} />
            </div>
            <h3 className="bento-card__title">Projects, sections &amp; nested subtasks</h3>
            <p className="bento-card__desc">
              Start in your Inbox, organize by projects and sections, break big work into recursive
              subtasks, and slice your workspace with tags and custom saved filters.
            </p>
            <div className="bento-preview bento-preview--tree">
              <div className="tree-node tree-node--root">Inbox &amp; Projects</div>
              <div className="tree-node tree-node--l1">Section · Q2 Roadmap</div>
              <div className="tree-node tree-node--l2">Subtask · Draft spec</div>
              <div className="tree-tags">
                <span>#focus</span>
                <span>#deep-work</span>
                <span>Filter: Active</span>
              </div>
            </div>
          </article>

          {/* Card 4: Templates & Snippets */}
          <article className="bento-card">
            <div className="bento-card__icon">
              <Bookmark size={20} />
            </div>
            <h3 className="bento-card__title">Templates &amp; reusable snippets</h3>
            <p className="bento-card__desc">
              Turn recurring notes—like daily reviews, meeting briefs, or project kickoffs—into
              one-tap templates and insert frequently used text snippets anywhere.
            </p>
            <div className="bento-preview bento-preview--snippets">
              <div className="snippet-pill">Daily Review Template</div>
              <div className="snippet-pill">Weekly Reflection</div>
              <div className="snippet-pill">Meeting Brief</div>
            </div>
          </article>

          {/* Card 5: Light, Dark & System Themes (interactive!) */}
          <article className="bento-card">
            <div className="bento-card__icon">
              {previewTheme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
            </div>
            <h3 className="bento-card__title">Light, Dark &amp; System themes</h3>
            <p className="bento-card__desc">
              Designed for effortless reading day or night. Follow Android&apos;s system setting or
              switch instantly inside Settings.
            </p>
            <div className="bento-preview">
              <div className="theme-switcher" role="group" aria-label="Theme preview">
                <button
                  type="button"
                  className={previewTheme === 'light' ? 'is-active' : ''}
                  onClick={() => setPreviewTheme('light')}
                >
                  <Sun size={13} /> Light
                </button>
                <button
                  type="button"
                  className={previewTheme === 'dark' ? 'is-active' : ''}
                  onClick={() => setPreviewTheme('dark')}
                >
                  <Moon size={13} /> Dark
                </button>
                <button
                  type="button"
                  className={previewTheme === 'system' ? 'is-active' : ''}
                  onClick={() => setPreviewTheme('system')}
                >
                  <Smartphone size={13} /> System
                </button>
              </div>
              <div className={`theme-sample theme-sample--${previewTheme}`}>
                <div className="theme-sample__dot" />
                <div>
                  <div className="theme-sample__title">Clean focus mode</div>
                  <div className="theme-sample__sub">Zero visual clutter</div>
                </div>
              </div>
            </div>
          </article>

          {/* Card 6: Wide - Local-first SQLite performance */}
          <article className="bento-card bento-card--navy bento-card--wide">
            <div className="bento-card__icon bento-card__icon--navy">
              <HardDrive size={20} />
            </div>
            <h3 className="bento-card__title">Local-first SQLite speed, 100% offline</h3>
            <p className="bento-card__desc">
              No loading spinners waiting for a remote server. Every project, note, tag, filter,
              snippet, and AI chat session lives in a fast SQLite database directly on your phone.
              Works on planes, subways, and anywhere offline—no account ever required.
            </p>
            <div className="stat-row">
              <div className="stat-item">
                <span className="stat-item__val">0 ms</span>
                <span className="stat-item__label">Server wait time</span>
              </div>
              <div className="stat-item">
                <span className="stat-item__val">0</span>
                <span className="stat-item__label">Accounts required</span>
              </div>
              <div className="stat-item">
                <span className="stat-item__val">100%</span>
                <span className="stat-item__label">Offline capable</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
