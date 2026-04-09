# Portfolio Optimization Strategies

## 1. Performance Optimizations

### A. Image & Visual Optimization
- **Remove grain overlay** — The `body::after` grain effect uses SVG filters (expensive for performance)
  - Cost: ~0.5-1ms CPU per frame
  - Alternative: Use subtle static PNG or remove entirely
  
- **Lazy load background glows** — The radial gradients in HeroMFE are always rendered
  - Wrap in `<picture>` with prefers-reduced-motion check
  - Use CSS `content-visibility: auto` on non-critical elements

### B. Animation Optimization
- **Debounce scroll listener** — Nav.tsx's `onScroll` runs on every pixel
  - Use `requestAnimationFrame` wrapper for batching
  - Consider throttling to 16ms intervals

- **Optimize CSS animations**
  - Replace `cubic-bezier(0.16,1,0.3,1)` with `ease-out` for better browser optimization
  - Use `transform: translate3d()` instead of `translateX/Y` for GPU acceleration

### C. Font Loading Strategy
- Add `font-display: swap` fallback cascade in `layout.tsx`
- Preload display font with `<link rel="preload">`

---

## 2. Bundle Size Reductions

### A. Tailwind CSS Pruning
- Current: Tailwind scans all `.tsx` files
- Opportunity: Use PurgeCSS plugins, define color palette explicitly
- Remove unused custom colors from theme

### B. Remove Duplicate Code
- `scrollTo()` function defined in both `Nav.tsx` and `HeroMFE.tsx`
- Extract to `lib/utils.ts`

### C. Code Splitting
- Lazy load MFE components using `React.lazy()` + `Suspense`
- Defer non-critical sections (Contact, Experience)

---

## 3. Runtime Performance

### A. useScrollReveal Hook Improvements
- Add `useCallback` to observer callback
- Memoize threshold value
- Consider: Use CSS container queries instead of JS

### B. Active Link Detection
- Current: Linear loop through links on every scroll
- Better: Use Intersection Observer API for each section
- Reduces: O(n) to O(1) lookup time

### C. Mobile Optimization
- Disable animations on mobile for ticker/scan effects
- Use `prefers-reduced-motion` media query more aggressively
- Reduce animation delays on mobile

---

## 4. Code Quality & Maintainability

### A. Extract Shared Utilities
- Gradient generation (used 5+ times)
- Animation classes
- Responsive typography helpers

### B. Component Composition
- Create `<AnimatedText />` wrapper
- Create `<GlowEffect />` component
- Reduces inline styles by 60%

### C. Type Safety
- Add strict null checks
- Define `NavLink` and `Skill` interfaces in `lib/types.ts`
- Export typed component props

---

## 5. SEO & Accessibility

### A. Page Speed Insights
- Add `dns-prefetch` for Google Fonts
- Use `<meta name="theme-color">`
- Add structured data (schema.org for Person)

### B. Accessibility Improvements
- Add `aria-current="page"` to active nav links
- Improve color contrast on hover states
- Add `role="region"` to MFE sections
- Test with screen readers

### C. Mobile-First Approach
- Reduce motion on mobile by default
- Test touch targets (min 44px)
- Optimize images for mobile viewport

---

## 6. Specific Code Changes

### Files to Modify:
1. **`lib/utils.ts`** (new) — Extract shared functions
2. **`lib/constants.ts`** (new) — CSS classes, magic numbers
3. **`next.config.ts`** — Add compression, caching headers
4. **`app/globals.css`** — Optimize animations, remove grain
5. **`components/Nav.tsx`** — Use Intersection Observer for active links
6. **`lib/hooks.ts`** — Improve performance with memoization
7. **`tailwind.config.ts`** — Prune unused colors

---

## Expected Impact

| Optimization | Potential Gain |
|---|---|
| Remove grain overlay | -2-3KB, -2ms render |
| Code split MFEs | -15-20% JS bundle |
| Replace onScroll with IntersectionObserver | -3-5ms per scroll |
| Extract duplicate functions | -1-2KB CSS-in-JS |
| Lazy load animations | -10-15% initial bundle |
| **Total** | **~25-35% improvement** |

