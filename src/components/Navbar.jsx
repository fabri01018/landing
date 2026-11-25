import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '../config.js';
import { ThinknoteLogo, PlayStoreButton } from './BrandMark.jsx';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'AI & Voice', href: '#ai-voice' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand" aria-label="Thinknote home">
          <ThinknoteLogo size={34} />
          <span className="navbar__wordmark">{SITE_CONFIG.appName}</span>
        </a>

        <nav className="navbar__links" aria-label="Primary navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <PlayStoreButton variant="light" size="sm" />
          <button
            type="button"
            className="navbar__mobile-toggle"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="navbar__mobile-drawer">
          <div className="container navbar__mobile-drawer-inner">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar__mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="navbar__mobile-cta">
              <PlayStoreButton variant="light" size="lg" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
