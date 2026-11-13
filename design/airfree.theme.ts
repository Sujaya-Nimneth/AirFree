/**
 * AirFree — Astryx design-system source of truth.
 *
 * Astryx is a web/React design system; its components are NOT used in this
 * native Android app. This theme is the machine-readable design contract: the
 * values below are ported 1:1 to Android XML resources in
 * app/src/main/res/values* (see docs/brand-guidelines.md and
 * assets/design-tokens.json). Keep the two in sync.
 *
 * Validate with: astryx theme build ./design/airfree.theme.ts
 */

import {defineTheme} from '@astryxdesign/core/theme';

export const airfreeTheme = defineTheme({
  name: 'airfree',

  typography: {
    body: {family: 'Inter', fallbacks: ['system-ui', 'sans-serif']},
    heading: {family: 'Inter', fallbacks: ['system-ui', 'sans-serif']},
  },

  radius: {base: 4, multiplier: 6},
  motion: {fast: 150, medium: 300, slow: 450, ratio: 0.75},

  // A string applies to both colour modes; a [light, dark] tuple compiles to
  // CSS light-dark(). Only roles the port consumes are listed.
  tokens: {
    // Brand sky + aurora gradient anchors.
    '--color-accent': ['#2563EB', '#7DA9FF'],
    '--color-on-accent': ['#FFFFFF', '#0B1020'],
    '--color-accent-strong': ['#1D4ED8', '#4C7DF0'],
    '--color-accent-aurora': ['#7C3AED', '#A78BFA'],
    '--color-cta': ['#D97706', '#FBBF24'],
    '--color-on-cta': ['#0F172A', '#0B1020'],

    // Surfaces: page behind glass, glass card/sheet, popovers.
    '--color-background-body': ['#F5F8FF', '#0B1020'],
    '--color-background-surface': ['#FFFFFFB8', '#1B2440AD'],
    '--color-background-card': ['#FFFFFFB8', '#1B2440AD'],
    '--color-background-popover': ['#FFFFFF', '#1B2440'],
    '--color-background-muted': ['#E8EFFD', '#16203A'],
    '--color-background-inverted': ['#0F172A', '#F1F5FD'],

    // Glass hairline (1dp) + scrim.
    '--color-border-glass': ['#FFFFFF8C', '#FFFFFF24'],
    '--color-overlay': ['#01122866', '#050A1899'],

    // Text, verified >= 4.5:1 against the composed glass surface.
    '--color-text-primary': ['#0F172A', '#F1F5FD'],
    '--color-text-secondary': ['#475569', '#AAB6CC'],
    '--color-text-disabled': ['#94A3B8', '#64748B'],
    '--color-text-accent': ['#2563EB', '#7DA9FF'],

    '--color-icon-primary': ['#0F172A', '#F1F5FD'],
    '--color-icon-secondary': ['#475569', '#AAB6CC'],

    // Status.
    '--color-success': ['#0D8626', '#4ADE80'],
    '--color-on-success': ['#FFFFFF', '#0B1020'],
    '--color-error': ['#DC2626', '#F87171'],
    '--color-on-error': ['#FFFFFF', '#0B1020'],
    '--color-warning': ['#D97706', '#FBBF24'],

    // Focus ring.
    '--focus-outline-color': 'var(--color-accent)',

    // Elevation: low for glass, medium for sheets, high for dialogs.
    '--shadow-low': '0 1px 2px light-dark(#0000001A, #00000066)',
    '--shadow-medium': '0 8px 24px light-dark(#0536591F, #00000099)',
    '--shadow-high': '0 16px 48px light-dark(#05365933, #000000CC)',
  },
});
