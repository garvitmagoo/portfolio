"use client"
import { PERSONAL, STATS } from '@/lib/data'
import { scrollToElement } from '@/lib/utils'
import { downloadResumePDF } from '@/lib/resume'
import { useCounter, formatCounterDisplay } from '@/lib/counter'

// Extracted component to properly handle hooks in map
function StatItem({ label, value, isRight, isBottom }: any) {
  const { count, ref } = useCounter({ end: value, duration: 2000 })
  return (
    <div key={label} ref={ref}
      className={`p-5 flex flex-col gap-1 hover:bg-[rgba(255,149,0,0.04)] transition-colors duration-300 ${isRight ? 'border-r border-white/5' : ''} ${isBottom ? 'border-t border-white/5' : ''}`}>
      <span className="font-display text-[#ff9500] leading-none" style={{ fontSize:'clamp(1.8rem,3vw,2.4rem)' }}>
        {formatCounterDisplay(count, value)}
      </span>
      <span className="font-code text-[9px] text-[#5c5a68] tracking-[0.12em] uppercase">{label}</span>
    </div>
  )
}

export function HeroMFE() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" aria-label="Hero">

      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: 'linear-gradient(rgba(245,243,240,0.032) 1px,transparent 1px),linear-gradient(90deg,rgba(245,243,240,0.032) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />

      {/* Amber glow — top right */}
      <div className="absolute pointer-events-none" aria-hidden="true"
        style={{ top:'-15%', right:'-8%', width:'900px', height:'700px', background:'radial-gradient(ellipse at center,rgba(255,149,0,0.065) 0%,transparent 60%)', filter:'blur(40px)' }} />

      {/* Amber glow — bottom left */}
      <div className="absolute pointer-events-none" aria-hidden="true"
        style={{ bottom:'-10%', left:'-5%', width:'600px', height:'500px', background:'radial-gradient(ellipse at center,rgba(255,149,0,0.03) 0%,transparent 60%)', filter:'blur(60px)' }} />

      {/* Vertical rule */}
      <div className="absolute pointer-events-none hidden lg:block" aria-hidden="true"
        style={{ top:0, left:'50%', width:'1px', height:'100%', background:'linear-gradient(to bottom,transparent,rgba(255,149,0,0.12) 25%,rgba(255,149,0,0.06) 75%,transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-28 pb-20">

        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-[#ff9500] animate-pulse-amber flex-shrink-0" />
          <span className="font-code text-[10px] text-[#5c5a68] tracking-[0.25em] uppercase">Frontend Technical Architect</span>
          <span className="flex-1 h-px max-w-[160px]" style={{ background:'linear-gradient(to right,rgba(255,149,0,0.4),transparent)' }} />
          <span className="font-code text-[10px] text-[#5c5a68] tracking-[0.2em]">Delhi · IN</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-8 items-start">

          {/* Left — Typography */}
          <div>
            <p className="font-code text-[10px] text-[#5c5a68] tracking-[0.3em] uppercase mb-2">[ 001 ] — Identity</p>

            <h1 className="leading-none mb-6">
              <span className="font-display block text-[#f5f3f0] animate-fade-up"
                style={{ fontSize:'clamp(5.5rem,13vw,12rem)', animationDelay:'0.05s' }}>
                GARVIT
              </span>
              <span className="font-display block animate-fade-up"
                style={{ fontSize:'clamp(5.5rem,13vw,12rem)', animationDelay:'0.12s', color:'transparent', WebkitTextStroke:'1.5px rgba(255,149,0,0.7)' }}>
                MAGOO
              </span>
            </h1>

            <div className="flex items-start gap-5 mb-10 animate-fade-up" style={{ animationDelay:'0.22s' }}>
              <div className="w-0.5 bg-[#ff9500] flex-shrink-0 mt-1" style={{ height:'72px' }} aria-hidden="true" />
              <p className="font-body text-[#a8a5b0] leading-relaxed"
                style={{ fontSize:'clamp(0.95rem,1.6vw,1.15rem)' }}>
                {PERSONAL.bio}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay:'0.32s' }}>
              <button onClick={() => scrollToElement('experience')}
                className="group relative inline-flex items-center gap-3 bg-[#ff9500] text-[#03030a] font-display text-sm tracking-[0.1em] uppercase px-8 py-4 border-0 cursor-pointer overflow-hidden hover:gap-5 transition-all duration-300">
                <span className="relative z-10">Case Studies</span>
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">↓</span>
                <span className="absolute inset-0 bg-[#ffb340] translate-y-full group-hover:translate-y-0 transition-transform duration-300" aria-hidden="true" />
              </button>
              <button onClick={() => downloadResumePDF()}
                className="group relative inline-flex items-center gap-2 bg-transparent text-[#ff9500] font-display text-sm tracking-[0.1em] uppercase px-8 py-4 border border-[rgba(255,149,0,0.4)] cursor-pointer hover:border-[#ff9500] hover:bg-[rgba(255,149,0,0.05)] transition-all duration-300">
                <span className="relative z-10">↓ Resume</span>
                <span className="relative z-10">|</span>
              </button>
              <button onClick={() => scrollToElement('contact')}
                className="inline-flex items-center gap-3 bg-transparent text-[#f5f3f0] font-display text-sm tracking-[0.1em] uppercase px-8 py-4 border border-white/10 cursor-pointer hover:border-[rgba(255,149,0,0.5)] hover:text-[#ff9500] transition-all duration-300">
                Hire Me →
              </button>
            </div>

            {/* Oscilloscope */}
            <div className="mt-14 hidden lg:block" aria-hidden="true">
              <svg viewBox="0 0 560 56" height="56" width="100%" preserveAspectRatio="none" style={{ maxWidth:'520px' }}>
                <polyline
                  points="0,28 38,28 56,8 74,48 92,28 130,28 148,4 166,52 184,28 222,28 240,18 258,38 276,28 314,28 332,10 350,46 368,28 406,28 424,16 442,40 460,28 560,28"
                  fill="none" stroke="rgba(255,149,0,0.25)" strokeWidth="1"
                  className="osc-draw"
                />
                <circle cx="556" cy="28" r="2.5" fill="#ff9500" opacity="0.7" />
              </svg>
            </div>
          </div>

          {/* Right — Stats panel */}
          <div className="animate-fade-up" style={{ animationDelay:'0.4s' }}>
            <div className="border border-[rgba(255,149,0,0.18)] bg-[rgba(7,7,18,0.88)] backdrop-blur-sm scanline">

              {/* Titlebar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                  <span className="w-2 h-2 rounded-full bg-white/10" />
                  <span className="w-2 h-2 rounded-full bg-[#ff9500]/70 animate-pulse-amber" />
                </div>
                <span className="font-code text-[9px] text-[#5c5a68] tracking-[0.2em] uppercase">profile.json</span>
                <div className="w-12" />
              </div>

              {/* Code block */}
              <div className="px-5 py-4 font-code text-[11px] leading-[2] text-[#5c5a68] border-b border-white/5">
                <p><span className="text-[#ff9500]">const</span> <span className="text-[#a8a5b0]">architect</span> = {'{'}</p>
                <p className="pl-4"><span className="text-[#f5f3f0]">name</span>: <span className="text-[rgba(255,149,0,0.8)]">&quot;Garvit Magoo&quot;</span>,</p>
                <p className="pl-4"><span className="text-[#f5f3f0]">exp</span>: <span className="text-[rgba(255,179,64,0.8)]">&quot;9+ years&quot;</span>,</p>
                <p className="pl-4"><span className="text-[#f5f3f0]">stack</span>: <span className="text-[rgba(255,149,0,0.8)]">[&quot;React&quot;, &quot;Next.js&quot;, &quot;NX&quot;]</span>,</p>
                <p className="pl-4"><span className="text-[#f5f3f0]">available</span>: <span className="text-[#ff9500]">true</span></p>
                <p>{'}'}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2">
                {STATS.map((s, i) => (
                  <StatItem
                    key={s.label}
                    label={s.label}
                    value={s.value}
                    isRight={i % 2 === 0}
                    isBottom={i >= 2}
                  />
                ))}
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-t border-white/5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff9500] animate-pulse-amber flex-shrink-0" />
                <span className="font-code text-[9px] text-[#ff9500] tracking-[0.15em] uppercase">Open to senior / architect roles</span>
              </div>
            </div>

            {/* Tech tags */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {['Next.js 15','NX Monorepo','MFE','TypeScript','Tailwind'].map(tag => (
                <span key={tag}
                  className="font-code text-[9px] text-[#5c5a68] border border-white/6 px-3 py-1.5 tag-glow cursor-default transition-all duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
          <span className="font-code text-[9px] text-[#5c5a68] tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#5c5a68] to-transparent" />
        </div>
      </div>
    </section>
  )
}
