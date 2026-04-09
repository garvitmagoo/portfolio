/**
 * Shared constants and reusable classes
 */

export const ANIMATION_EASING = {
  smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
  easeOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
  linear: 'linear',
} as const

export const COLORS = {
  void: '#03030a',
  voidLight: '#070712',
  amber: '#ff9500',
  amberWarm: '#ffb340',
  white: '#f5f3f0',
  silver: '#a8a5b0',
  stone: '#5c5a68',
  ghost: '#2e2c3a',
} as const

export const DELAYS = {
  d1: '0.08s',
  d2: '0.16s',
  d3: '0.24s',
  d4: '0.32s',
  d5: '0.40s',
  d6: '0.52s',
} as const

export const NAV_SCROLL_THRESHOLD = 60
export const NAV_ACTIVE_THRESHOLD = 140
export const SCROLL_REVEAL_THRESHOLD = 0.12

export const GRADIENT = {
  amberToTransparent: 'linear-gradient(to right, rgba(255,149,0,0.4), transparent)',
  amberGlowTop: 'radial-gradient(ellipse at center, rgba(255,149,0,0.065) 0%, transparent 60%)',
  amberGlowBottom: 'radial-gradient(ellipse at center, rgba(255,149,0,0.03) 0%, transparent 60%)',
} as const
