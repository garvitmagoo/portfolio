"use client"
import { useRef } from 'react'
import { EXPERIENCE } from '@/lib/data'
import { useScrollReveal } from '@/lib/hooks'

export function ExperienceMFE() {
  const ref = useScrollReveal() as React.RefObject<HTMLElement>
  return (
    <section id="experience" ref={ref} className="py-24 px-6 md:px-10 relative" style={{ background:'#070712' }}>
      <div className="absolute pointer-events-none" aria-hidden="true"
        style={{ bottom:'-5%', right:'-5%', width:'600px', height:'500px', background:'radial-gradient(ellipse at center,rgba(255,149,0,0.03) 0%,transparent 65%)', filter:'blur(30px)' }} />

      <div className="max-w-7xl mx-auto relative">

        <div className="flex items-center gap-6 mb-16 reveal">
          <span className="font-code text-[9px] text-[#5c5a68] tracking-[0.25em] uppercase">[ 003 ]</span>
          <span className="h-px flex-shrink-0" style={{ width:'80px', background:'linear-gradient(to right,rgba(255,149,0,0.5),transparent)' }} />
          <span className="font-code text-[9px] text-[#5c5a68] tracking-[0.25em] uppercase">Career History</span>
        </div>

        <h2 className="font-display leading-none text-[#f5f3f0] mb-16 reveal"
          style={{ fontSize:'clamp(2.8rem,7vw,6.5rem)' }}>
          WHERE I&apos;VE{' '}
          <span className="font-display" style={{ color:'transparent', WebkitTextStroke:'1.5px rgba(255,149,0,0.65)', fontSize:'0.85em' }}>SHIPPED</span>
        </h2>

        {/* Amber spine */}
        <div className="absolute top-[140px] bottom-0 hidden md:block pointer-events-none" aria-hidden="true"
          style={{ left:'calc(80px + 2rem)', width:'1px', background:'linear-gradient(to bottom,rgba(255,149,0,0.25),rgba(255,149,0,0.04) 80%,transparent)' }} />

        {EXPERIENCE.map((job, i) => (
          <div key={job.company}
            className={`reveal delay-${Math.min(i + 1, 6)} group grid grid-cols-1 md:grid-cols-[80px_1fr] gap-0 md:gap-8 py-10 border-t border-white/5 hover:border-[rgba(255,149,0,0.15)] transition-colors duration-300`}>

            <div className="hidden md:flex flex-col items-start pt-1 relative">
              <span className="font-code text-[11px] text-[#5c5a68] group-hover:text-[#a8a5b0] transition-colors duration-300">
                {String(i + 1).padStart(2, '0')}
              </span>
              {job.current && (
                <div className="mt-3 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff9500] animate-pulse-amber" />
                  <span className="font-code text-[9px] text-[#ff9500] tracking-wider uppercase">Now</span>
                </div>
              )}
              <div className={`absolute top-1 -right-[1.05rem] w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                job.current ? 'border-[#ff9500] bg-[#ff9500] shadow-[0_0_10px_rgba(255,149,0,0.5)]'
                             : 'border-[#2e2c3a] bg-[#070712] group-hover:border-[#ff9500]'
              }`} />
            </div>

            <div>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-1 flex-wrap">
                <div className="flex items-center gap-4 flex-wrap">
                  <h3 className="font-display tracking-wide text-[#f5f3f0] group-hover:text-[#ff9500] transition-colors duration-300"
                    style={{ fontSize:'clamp(1.4rem,3vw,1.9rem)' }}>
                    {job.company.toUpperCase()}
                  </h3>
                  <span className="hidden sm:inline font-code text-[9px] text-[#ff9500] border border-[rgba(255,149,0,0.2)] px-2.5 py-1 bg-[rgba(255,149,0,0.04)] tracking-wider whitespace-nowrap">
                    {job.impact}
                  </span>
                </div>
                <span className="font-code text-[10px] text-[#5c5a68] tracking-widest whitespace-nowrap shrink-0">
                  {job.period}
                </span>
              </div>
              <p className="font-code text-[10px] text-[rgba(255,149,0,0.65)] uppercase tracking-[0.14em] mb-5">{job.role}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
                {job.bullets.map((b, bi) => (
                  <li key={bi} className="flex gap-3 text-[13px] text-[#5c5a68] leading-relaxed group-hover:text-[#a8a5b0] transition-colors duration-300">
                    <span className="mt-[6px] w-3 h-px bg-[#2e2c3a] flex-shrink-0 group-hover:bg-[#ff9500] transition-colors duration-300" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className="border-t border-white/5" />
      </div>
    </section>
  )
}
