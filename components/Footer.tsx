import { PERSONAL } from '@/lib/data'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/5 px-6 md:px-10 py-8 bg-[#070712]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-4 h-px bg-[rgba(255,149,0,0.4)]" />
          <p className="font-code text-[10px] text-[#5c5a68] tracking-[0.1em] uppercase">
            © {year} {PERSONAL.name}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 justify-center">
          {['NX 19','Next.js 15','TypeScript','Tailwind CSS','MFE Architecture'].map(t => (
            <span key={t}
              className="font-code text-[9px] text-[#5c5a68] bg-[#03030a] border border-white/5 px-2.5 py-1 hover:border-[rgba(255,149,0,0.2)] hover:text-[#a8a5b0] transition-all duration-300 cursor-default">
              {t}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
