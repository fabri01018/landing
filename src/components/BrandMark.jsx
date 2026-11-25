import React from 'react';
import { SITE_CONFIG } from '../config.js';

export function ThinknoteLogo({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="15" fill="#071738" />
      <rect
        x="0.75"
        y="0.75"
        width="62.5"
        height="62.5"
        rx="14.25"
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="1.5"
      />
      {/* Document body */}
      <path
        d="M17 19.5C17 16.4624 19.4624 14 22.5 14H36.2L47 24.8V44.5C47 47.5376 44.5376 50 41.5 50H22.5C19.4624 50 17 47.5376 17 44.5V19.5Z"
        fill="#FFFFFF"
      />
      {/* Folded corner cutout */}
      <path
        d="M35.5 14V21.5C35.5 23.7091 37.2909 25.5 39.5 25.5H47"
        stroke="#071738"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Sparkle inside corner */}
      <path
        d="M40.6 18.2L41.4 20.1L43.3 20.9L41.4 21.7L40.6 23.6L39.8 21.7L37.9 20.9L39.8 20.1L40.6 18.2Z"
        fill="#CBD5E1"
      />
      {/* Subtle text lines */}
      <rect x="22" y="35.5" width="16.5" height="2.6" rx="1.3" fill="#CBD5E1" />
      <rect x="22" y="40.8" width="11.5" height="2.6" rx="1.3" fill="#CBD5E1" />
    </svg>
  );
}

export function GooglePlayIcon({ size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.609 1.814L13.792 12 3.61 22.186a1.75 1.75 0 0 1-.61-1.335V3.15c0-.517.224-.997.609-1.336z"
        fill="#4285F4"
      />
      <path
        d="M17.29 8.502L13.792 12l3.498 3.498 3.946-2.255c.752-.43.752-1.516 0-1.946l-3.946-2.795z"
        fill="#FBBC04"
      />
      <path
        d="M3.609 22.186c.428.374 1.052.495 1.622.17l12.059-6.858L13.792 12 3.61 22.186z"
        fill="#EA4335"
      />
      <path
        d="M17.29 8.502L5.23 1.644a1.48 1.48 0 0 0-1.621.17L13.792 12l3.498-3.498z"
        fill="#34A853"
      />
    </svg>
  );
}

export function PlayStoreButton({
  variant = 'light',
  size = 'lg',
  className = '',
}) {
  return (
    <a
      href={SITE_CONFIG.playStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`play-btn play-btn--${variant} play-btn--${size} ${className}`}
    >
      <GooglePlayIcon size={size === 'sm' ? 18 : 22} />
      <span className="play-btn__text">
        {size === 'sm' ? (
          <span className="play-btn__main">Get on Google Play</span>
        ) : (
          <>
            <span className="play-btn__eyebrow">GET IT ON</span>
            <span className="play-btn__main">Google Play</span>
          </>
        )}
      </span>
    </a>
  );
}
