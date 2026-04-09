import { TICKER_ITEMS } from '@/lib/data'

// Server component — no 'use client' needed, CSS-only animation
export function MarqueeBanner() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div className="relative overflow-hidden py-4 select-none"
      style={{ background:'linear-gradient(135deg,#070712 0%,#0c0c1c 50%,#070712 100%)', borderTop:'1px solid rgba(255,149,0,0.1)', borderBottom:'1px solid rgba(255,149,0,0.1)' }}>
      <div className="absolute left-0 inset-y-0 w-28 z-10 pointer-events-none"
        style={{ background:'linear-gradient(to right,#070712,transparent)' }} />
      <div className="absolute right-0 inset-y-0 w-28 z-10 pointer-events-none"
        style={{ background:'linear-gradient(to left,#070712,transparent)' }} />
      <div className="flex w-max animate-ticker">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="font-code text-[11px] text-[#5c5a68] tracking-[0.12em] uppercase px-7">{item}</span>
            <span className="text-[#ff9500] text-[7px] opacity-50">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
