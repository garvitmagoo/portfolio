/**
 * Custom hook for animated counters that trigger on scroll
 * Counts up from 0 to target value when element comes into view
 */

'use client'
import { useEffect, useRef, useState, useCallback } from 'react'

interface UseCounterOptions {
  end: number | string
  duration?: number
  threshold?: number
  onComplete?: () => void
}

/**
 * Custom hook for animated counters
 * @param options - Counter configuration
 * @returns Current count value and ref to attach to element
 */
export function useCounter(options: UseCounterOptions) {
  const {
    end,
    duration = 2000,
    threshold = 0.5,
    onComplete,
  } = options

  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const animationRef = useRef<number | null>(null)
  const hasAnimatedRef = useRef(false)

  // Parse end value (handle '9+', '90%', etc.)
  const parseEnd = useCallback((value: number | string): number => {
    if (typeof value === 'number') return value
    const numStr = String(value).replace(/[^\d]/g, '')
    return parseInt(numStr, 10) || 0
  }, [])

  const endValue = parseEnd(end)

  // Handle intersection observer callback
  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          setIsVisible(true)
          hasAnimatedRef.current = true
        }
      })
    },
    []
  )

  // Setup intersection observer
  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
    })

    observer.observe(element)
    return () => observer.disconnect()
  }, [handleIntersection, threshold])

  // Animate counter
  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutCubic)

      setCount(currentValue)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setCount(endValue)
        onComplete?.()
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isVisible, duration, endValue, onComplete])

  return { count, ref }
}

/**
 * Format counter display value
 * @param count - Current count value
 * @param original - Original value (with suffix like '9+' or '90%')
 * @returns Formatted display value
 */
export function formatCounterDisplay(count: number, original: string | number): string {
  const origStr = String(original)
  
  // Preserve suffix ('+', '%', etc.)
  const suffix = origStr.replace(/[0-9]/g, '')
  
  return count + suffix
}
