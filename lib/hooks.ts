'use client'
import { useEffect, useRef, useCallback, useMemo } from 'react'
import { SCROLL_REVEAL_THRESHOLD, COLORS } from './constants'

interface UseScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  autoRevealOnReduced?: boolean
}

/**
 * Attaches IntersectionObserver to add .is-visible to .reveal children.
 * Fires once per element (unobserves after trigger) for best performance.
 * Respects prefers-reduced-motion.
 * 
 * @param options - Configuration for the observer
 * @returns Ref to attach to container element
 */
export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const {
    threshold = SCROLL_REVEAL_THRESHOLD,
    rootMargin = '0px 0px -40px 0px',
    autoRevealOnReduced = true,
  } = options

  const ref = useRef<HTMLElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Memoize observer options
  const observerOptions = useMemo(
    () => ({ threshold, rootMargin }),
    [threshold, rootMargin]
  )

  // Memoize intersection callback
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observerRef.current?.unobserve(entry.target)
      }
    })
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    if (prefersReduced && autoRevealOnReduced) {
      el.querySelectorAll<HTMLElement>('.reveal').forEach(c => c.classList.add('is-visible'))
      return
    }

    observerRef.current = new IntersectionObserver(handleIntersection, observerOptions)

    el.querySelectorAll('.reveal').forEach(c => {
      observerRef.current?.observe(c)
    })

    return () => {
      observerRef.current?.disconnect()
      observerRef.current = null
    }
  }, [handleIntersection, observerOptions, autoRevealOnReduced])

  return ref
}
