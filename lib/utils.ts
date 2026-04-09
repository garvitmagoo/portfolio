/**
 * Shared utility functions extracted for code reuse
 */

/**
 * Smooth scroll to element by ID
 */
export function scrollToElement(id: string): void {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/**
 * Debounce function for scroll/resize listeners
 */
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number = 16
): T {
  let timeout: NodeJS.Timeout
  return ((...args: any[]) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }) as T
}

/**
 * Throttle function using requestAnimationFrame
 */
export function throttleRAF<T extends (...args: any[]) => void>(func: T): T {
  let rafId: number | null = null
  return ((...args: any[]) => {
    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        func(...args)
        rafId = null
      })
    }
  }) as T
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Generate gradient string for reusable styles
 */
export function createGradient(color: string, opacity: number, direction: 'right' | 'down' = 'right'): string {
  const dir = direction === 'right' ? 'to right' : 'to bottom'
  return `linear-gradient(${dir}, ${color.replace(')', `,${opacity})`)}), transparent)`
}
