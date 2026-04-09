"use client"
import { useRef } from 'react'
import { SKILLS } from '@/lib/data'
import { useScrollReveal } from '@/lib/hooks'

export function SkillsMFE() {
  const ref = useScrollReveal() as React.RefObject<HTMLElement>
  return (
    <section id="skills" ref={ref} className="py-32 px-6 md:px-10 relative"
      style={{ background:'linear-gradient(to bottom,#03030a 0%,#070712 40%,#03030a 100%)' }}>
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-6 mb-16 reveal">
          <span className="font-code text-[9px] text-[#5c5a68] tracking-[0.25em] uppercase">[ 002 ]</span>
          <span className="h-px max-w-[80px] flex-shrink-0" style={{ background:'linear-gradient(to right,rgba(255,149,0,0.5),transparent)', width:'80px' }} />
          <span className="font-code text-[9px] text-[#5c5a68] tracking-[0.25em] uppercase">Skills &amp; Stack</span>
        </div>

        <h2 className="font-display leading-none text-[#f5f3f0] mb-4 reveal"
          style={{ fontSize:'clamp(3rem,7vw,6.5rem)' }}>
          WHAT I{' '}
          <span style={{ color:'transparent', WebkitTextStroke:'1.5px rgba(255,149,0,0.6)' }}>BUILD WITH</span>
        </h2>
        <p className="font-body italic text-[#5c5a68] text-base mb-16 max-w-md reveal delay-1">
          Nine years across the full frontend stack — from design tokens to distributed architectures.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/4">
          {SKILLS.map((skill, idx) => (
            <div key={skill.name}
              className={`reveal delay-${Math.min(idx + 1, 6)} group relative bg-[#03030a] p-8 overflow-hidden hover:bg-[#070712] transition-colors duration-300`}>
              <div className="absolute top-0 left-0 h-0.5 w-0 bg-[#ff9500] group-hover:w-full transition-all duration-500 ease-out" />
              <span className="absolute top-4 right-4 font-display leading-none pointer-events-none select-none text-white/[0.025] group-hover:text-[rgba(255,149,0,0.05)] transition-colors duration-300"
                style={{ fontSize:'5.5rem' }} aria-hidden="true">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-3 mb-5 relative z-10">
                <span className="w-9 h-9 border border-white/7 flex items-center justify-center text-base group-hover:border-[rgba(255,149,0,0.3)] transition-colors duration-300" aria-hidden="true">
                  {skill.icon}
                </span>
                <span className="font-display text-[1.05rem] tracking-wider text-[#f5f3f0]">
                  {skill.name.toUpperCase()}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 relative z-10">
                {skill.tags.map(tag => (
                  <span key={tag}
                    className="font-code text-[10px] text-[#5c5a68] border border-white/6 px-2 py-0.5 group-hover:text-[#a8a5b0] group-hover:border-white/10 transition-all duration-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
