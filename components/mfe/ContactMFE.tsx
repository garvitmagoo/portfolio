"use client"
import { PERSONAL, EDUCATION, CERTIFICATION } from '@/lib/data'
import { useScrollReveal } from '@/lib/hooks'

export function ContactMFE() {
  const ref = useScrollReveal() as React.RefObject<HTMLElement>

  const links = [
    { label:'Email',    value:PERSONAL.email,                  href:`mailto:${PERSONAL.email}`, ext:false },
    { label:'Phone',    value:PERSONAL.phone,                  href:`tel:${PERSONAL.phone}`,    ext:false },
    { label:'GitHub',   value:'github.com/garvitmagoo',        href:PERSONAL.github,            ext:true  },
    { label:'LinkedIn', value:'linkedin.com/in/garvitmagoo',   href:PERSONAL.linkedin,          ext:true  },
  ]

  return (
    <section id="contact" ref={ref} className="py-32 px-6 md:px-10 relative overflow-hidden">
      <div className="absolute pointer-events-none" aria-hidden="true"
        style={{ bottom:'-8%', left:'-5%', width:'700px', height:'600px', background:'radial-gradient(ellipse at center,rgba(255,149,0,0.05) 0%,transparent 65%)', filter:'blur(50px)' }} />
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" aria-hidden="true"
        style={{ background:'linear-gradient(to right,transparent,rgba(255,149,0,0.2),transparent)' }} />

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-6 mb-16 reveal">
          <span className="font-code text-[9px] text-[#5c5a68] tracking-[0.25em] uppercase">[ 004 ]</span>
          <span className="h-px flex-shrink-0" style={{ width:'80px', background:'linear-gradient(to right,rgba(255,149,0,0.5),transparent)' }} />
          <span className="font-code text-[9px] text-[#5c5a68] tracking-[0.25em] uppercase">Get In Touch</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 lg:gap-24 items-start mb-16">

          <div>
            <h2 className="font-display leading-none mb-5 reveal"
              style={{ fontSize:'clamp(3.5rem,9vw,8.5rem)' }}>
              <span className="block text-[#f5f3f0]">READY</span>
              <span className="block text-[#f5f3f0]">TO BUILD</span>
              <span className="block" style={{ color:'transparent', WebkitTextStroke:'1.5px rgba(255,149,0,0.7)', fontSize:'0.72em' }}>
                SOMETHING GREAT?
              </span>
            </h2>
            <p className="font-body italic text-[#5c5a68] text-base max-w-sm leading-relaxed mb-10 reveal delay-1">
              Open to Frontend Architect, Tech Lead, and Staff Engineer roles. Let&apos;s build something extraordinary.
            </p>
            <a href={`mailto:${PERSONAL.email}`}
              className="reveal delay-2 inline-flex items-center gap-4 bg-[#ff9500] text-[#03030a] font-display text-sm tracking-[0.1em] uppercase px-8 py-5 no-underline hover:bg-[#ffb340] transition-all duration-300 group">
              <span>Send a Message</span>
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
          </div>

          <div className="reveal delay-2 flex flex-col">
            {links.map(({ label, value, href, ext }) => (
              <a key={label} href={href}
                target={ext ? '_blank' : undefined}
                rel={ext ? 'noopener noreferrer' : undefined}
                className="group flex items-center justify-between py-6 border-b border-white/5 hover:border-[rgba(255,149,0,0.2)] no-underline text-[#f5f3f0] hover:pl-2 transition-all duration-300">
                <div>
                  <p className="font-code text-[9px] text-[#5c5a68] tracking-[0.18em] uppercase mb-1">{label}</p>
                  <p className="font-body font-medium text-[15px] group-hover:text-[#ff9500] transition-colors duration-300 underline-draw">{value}</p>
                </div>
                <span className="text-[#2e2c3a] group-hover:text-[#ff9500] group-hover:translate-x-2 transition-all duration-300 text-lg">→</span>
              </a>
            ))}
          </div>
        </div>

        <div className="reveal delay-3 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/4">
          {[
            { tag:'EDU',  title:EDUCATION.degree.toUpperCase(),    sub:`${EDUCATION.institution} · ${EDUCATION.score} · ${EDUCATION.year}` },
            { tag:'CERT', title:CERTIFICATION.name.toUpperCase(), sub:`${CERTIFICATION.issuer} · Certified` },
          ].map(({ tag, title, sub }) => (
            <div key={tag} className="flex items-center gap-4 bg-[#03030a] px-6 py-6 group hover:bg-[#070712] transition-colors duration-300 amber-line">
              <div className="w-11 h-11 border border-white/7 flex items-center justify-center font-code text-[9px] text-[#5c5a68] tracking-widest flex-shrink-0 group-hover:border-[rgba(255,149,0,0.3)] group-hover:text-[#ff9500] transition-all duration-300">
                {tag}
              </div>
              <div>
                <p className="font-display text-[1rem] tracking-wider text-[#f5f3f0] leading-tight">{title}</p>
                <p className="font-code text-[9px] text-[#5c5a68] mt-1">{sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
