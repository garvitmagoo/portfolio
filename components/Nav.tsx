"use client"
import { useEffect, useState, useCallback, useRef } from 'react'
import { PERSONAL } from '@/lib/data'
import { scrollToElement, throttleRAF } from '@/lib/utils'
import { NAV_SCROLL_THRESHOLD } from '@/lib/constants'
import { downloadResumePDF } from '@/lib/resume'

const LINKS = [
  { label: 'Skills',     id: 'skills'     },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact',    id: 'contact'    },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active,   setActive]   = useState('')
  const [open,     setOpen]     = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  // Handle scroll effect (throttled with RAF)
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > NAV_SCROLL_THRESHOLD)
  }, [])

  useEffect(() => {
    const throttledScroll = throttleRAF(handleScroll)
    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [handleScroll])

  // Use Intersection Observer for active link detection (better performance)
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-50% 0px -50% 0px' }
    )

    LINKS.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observerRef.current?.observe(element)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#03030a]/90 backdrop-blur-2xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 h-16">

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="flex items-center gap-3 group focus-visible:outline-none bg-transparent border-0 cursor-pointer"
        >
          <span className="w-8 h-8 border border-amber-DEFAULT/40 group-hover:border-[#ff9500] flex items-center justify-center font-display text-xs text-[#ff9500] tracking-widest transition-colors duration-300">
            GM
          </span>
          <span className="hidden sm:block font-body text-sm font-medium text-[#a8a5b0] group-hover:text-[#f5f3f0] transition-colors duration-300">
            {PERSONAL.name}
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {LINKS.map(({ label, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollToElement(id)}
                className={`relative px-4 py-2 font-code text-[11px] tracking-[0.15em] uppercase bg-transparent border-0 cursor-pointer transition-colors duration-300 ${
                  active === id ? 'text-[#ff9500]' : 'text-[#5c5a68] hover:text-[#f5f3f0]'
                }`}
              >
                {label}
                {active === id && (
                  <span className="absolute bottom-0.5 left-4 right-4 h-px bg-[#ff9500]" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Status */}
        <div className="hidden sm:flex items-center gap-4 font-code text-[10px] text-[#ff9500] tracking-[0.12em] uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff9500] animate-pulse-amber" />
            Available
          </div>
          <button
            onClick={() => downloadResumePDF()}
            className="hidden lg:block px-3 py-1.5 bg-transparent border border-[rgba(255,149,0,0.3)] text-[#ff9500] hover:border-[#ff9500] hover:bg-[rgba(255,149,0,0.05)] transition-all duration-300 font-code text-[9px] tracking-[0.15em] uppercase rounded"
            title="Download resume PDF"
          >
            ↓ Resume
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-0 cursor-pointer focus-visible:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className={`w-5 h-px bg-[#f5f3f0] block transition-all duration-300 ${
                open && i === 0 ? 'rotate-45 translate-y-2' :
                open && i === 1 ? 'opacity-0' :
                open && i === 2 ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-[#03030a]/95 backdrop-blur-2xl border-b border-white/5 px-6 pb-4">
          {LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => { scrollToElement(id); setOpen(false) }}
              className="block w-full text-left font-code text-[11px] tracking-[0.15em] uppercase text-[#5c5a68] hover:text-[#ff9500] py-4 border-b border-white/4 bg-transparent cursor-pointer transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
