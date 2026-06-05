import { useState, useRef, useEffect } from 'react'
import { passenger, flightInfo, stopovers, openDestinations, assets } from '../data'
import StopoverOverlay from './StopoverOverlay'

// ─── KLM logo — white div masked by the logo shape ───────────────────────────
function KlmLogo() {
  return (
    <div
      style={{
        width: 110, height: 64, background: 'white', flexShrink: 0,
        WebkitMaskImage: `url("${assets.klmLogoMask}")`,
        maskImage: `url("${assets.klmLogoMask}")`,
        WebkitMaskSize: 'contain', maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'left center', maskPosition: 'left center',
      }}
      aria-label="KLM Royal Dutch Airlines"
    />
  )
}

// ─── Tear line — dashed rule only, notch circles rendered by the card ─────────
function TearLine({ innerRef }) {
  return (
    <div ref={innerRef} className="relative flex items-center w-full my-2 py-1">
      <div className="w-full" style={{ borderTop: '1.5px dashed rgba(120,137,153,0.30)' }} />
    </div>
  )
}

// ─── Stopover row ─────────────────────────────────────────────────────────────
function StopoverRow({ stopover, onOpen }) {
  return (
    <button className="flex items-start gap-3 w-full text-left group" onClick={() => onOpen(stopover)}>
      <div className="w-[80px] h-[80px] rounded-[10px] overflow-hidden flex-shrink-0 bg-[#c8e9f5]">
        {stopover.photo && <img src={stopover.photo} alt={stopover.city} className="w-full h-full object-cover" />}
      </div>
      <div className="flex-1 min-w-0 pt-1">
        <p className="font-mono font-bold text-[#195FA5] text-[30px] leading-none">{stopover.iata}</p>
        <p className="font-sans text-[11px] text-[#788999] tracking-[2px] uppercase mt-1">{stopover.label}</p>
        {stopover.quote && (
          <p className="font-mono text-[11px] text-[#788999]/80 mt-1 leading-snug line-clamp-2">"{stopover.quote}"</p>
        )}
      </div>
      <div className="w-10 h-10 rounded-full bg-[#00A1E4] flex items-center justify-center flex-shrink-0 mt-3 group-hover:bg-[#195FA5] transition-colors">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M2.5 7.5H12.5M12.5 7.5L8 3M12.5 7.5L8 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </button>
  )
}

// ─── Open destination placeholder ────────────────────────────────────────────
function OpenDestRow({ hint }) {
  return (
    <div className="flex items-start gap-3 w-full">
      <div className="w-[80px] h-[80px] rounded-[10px] flex-shrink-0 border-[1.5px] border-dashed border-[rgba(120,137,153,0.5)]" />
      <div className="flex-1 min-w-0 pt-1">
        <p className="font-mono font-bold text-[#195FA5] text-[30px] leading-none">???</p>
        <p className="font-mono text-[12px] text-[#788999] leading-snug mt-1">{hint}</p>
      </div>
      <div className="w-10 h-10 rounded-full border border-[#00A1E4] bg-[#00A1E4]/15 flex items-center justify-center flex-shrink-0 mt-3">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 2V12M2 7H12" stroke="#00A1E4" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
    </div>
  )
}

// ─── Main boarding pass ───────────────────────────────────────────────────────
export default function BoardingPass() {
  const [activeStopover, setActiveStopover] = useState(null)

  // Measure tear line Y positions inside the card body for punch-out notches
  const cardBodyRef = useRef(null)
  const tear1Ref    = useRef(null)
  const tear2Ref    = useRef(null)
  const [notchY, setNotchY] = useState({ y1: null, y2: null })

  useEffect(() => {
    function measure() {
      if (!cardBodyRef.current || !tear1Ref.current || !tear2Ref.current) return
      const cardRect = cardBodyRef.current.getBoundingClientRect()
      const t1 = tear1Ref.current.getBoundingClientRect()
      const t2 = tear2Ref.current.getBoundingClientRect()
      setNotchY({
        y1: Math.round(t1.top + t1.height / 2 - cardRect.top),
        y2: Math.round(t2.top + t2.height / 2 - cardRect.top),
      })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Notch circle size
  const R = 14 // px radius

  return (
    <>
      <div className="relative w-full">

        {/* ── HEADER (sky blue) ──────────────────────────────────────────── */}
        {/* overflow:visible so the badge can poke out to the right */}
        <div className="bg-[#00A1E4] rounded-t-[14px] px-6 pt-9 pb-9 relative overflow-visible">

          {/* "new destination" badge — positioned inside header, right side */}
          <div
            className="absolute z-20 flex items-center justify-center"
            style={{ width: 96, height: 96, right: -10, top: 24 }}
          >
            <img src={assets.newDestCircle} alt="" className="absolute inset-0 w-full h-full" />
            <img src={assets.newDestPlane}  alt="" className="absolute inset-0 w-full h-full object-contain p-3" />
            <div className="relative z-10 text-center leading-tight" style={{ transform: 'rotate(13deg)', marginTop: 8 }}>
              <span className="block font-mono text-[13px] font-bold text-white leading-none">new</span>
              <span className="block font-sans text-[9px] tracking-wide text-white">destination</span>
            </div>
          </div>

          {/* Logo + BOARDING PASS */}
          <div className="flex items-center justify-between mb-8">
            <KlmLogo />
            <span className="font-sans text-white text-[13px] tracking-[3.2px] uppercase">Boarding Pass</span>
          </div>

          {/* Passenger */}
          <div className="flex flex-col gap-3">
            <p className="font-sans text-white text-[13px] tracking-[3.2px] uppercase opacity-90">Passenger</p>
            <div className="flex items-center gap-3">
              <img src={passenger.avatar} alt={passenger.name} className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-white/30" />
              <span className="font-mono font-bold text-white text-[28px] leading-none">{passenger.name}</span>
            </div>
          </div>
        </div>

        {/* ── BODY — overflow:hidden so notch circles get clipped to half ── */}
        <div ref={cardBodyRef} className="bg-[#EDF9FE] rounded-b-[14px] overflow-hidden px-5 pt-7 pb-8 relative">

          {/* Punch-out notch circles — absolutely positioned at card edges,
              half outside, clipped by overflow:hidden → looks like ticket holes */}
          {notchY.y1 !== null && [notchY.y1, notchY.y2].map((y, i) => (
            <div key={i}>
              <div style={{
                position: 'absolute', left: -R, top: y - R,
                width: R * 2, height: R * 2, borderRadius: '50%',
                background: 'linear-gradient(180deg,#00A1E4 0%,#72CCEE 55%,#B8E8FA 100%)',
                backgroundAttachment: 'fixed', zIndex: 10,
              }} />
              <div style={{
                position: 'absolute', right: -R, top: y - R,
                width: R * 2, height: R * 2, borderRadius: '50%',
                background: 'linear-gradient(180deg,#00A1E4 0%,#72CCEE 55%,#B8E8FA 100%)',
                backgroundAttachment: 'fixed', zIndex: 10,
              }} />
            </div>
          ))}

          {/* Route: 20s ─── 30s (no arrow) */}
          <div className="flex items-start gap-4 mb-5 px-1">
            <div className="flex-1 min-w-0">
              <p className="font-mono font-bold text-[#195FA5] text-[46px] leading-none">{flightInfo.from.code}</p>
              <p className="font-sans text-[10px] text-[#788999] tracking-[2px] uppercase mt-1">{flightInfo.from.label}</p>
            </div>
            {/* plain dashed separator — no arrow */}
            <div className="flex-1 self-center mt-[-8px] border-t border-dashed border-[#788999]/40" />
            <div className="flex-1 min-w-0 text-right">
              <p className="font-mono font-bold text-[#195FA5] text-[46px] leading-none">{flightInfo.to.code}</p>
              <p className="font-sans text-[10px] text-[#788999] tracking-[2px] uppercase mt-1">{flightInfo.to.label}</p>
            </div>
          </div>

          {/* Gate / Date / Seat */}
          <div className="rounded-[10px] border border-[#788999]/20 grid grid-cols-3 divide-x divide-[#788999]/20 mx-1 mb-1">
            {[
              { label: 'GATE', value: flightInfo.gate },
              { label: 'DATE', value: flightInfo.date },
              { label: 'SEAT', value: flightInfo.seat },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-[10px] px-3 py-4">
                <span className="font-sans text-[10px] text-[#788999] tracking-[2.5px] uppercase">{label}</span>
                <span className="font-mono font-medium text-[#195FA5] text-[13px]">{value}</span>
              </div>
            ))}
          </div>

          {/* Tear line 1 */}
          <div className="my-6 px-1"><TearLine innerRef={tear1Ref} /></div>

          {/* Stopovers */}
          <p className="font-sans text-[10px] text-[#788999] tracking-[2.4px] uppercase text-center mb-6">
            Stopovers — Memories from the Crew
          </p>
          <div className="flex flex-col gap-7 px-1">
            {stopovers.map((s) => <StopoverRow key={s.iata} stopover={s} onOpen={setActiveStopover} />)}
          </div>

          {/* Tear line 2 */}
          <div className="my-6 px-1"><TearLine innerRef={tear2Ref} /></div>

          {/* Open destinations */}
          <p className="font-sans text-[10px] text-[#788999] tracking-[2.4px] uppercase text-center mb-6">
            Open Destinations — Yours to Fill
          </p>
          <div className="flex flex-col gap-7 px-1">
            {openDestinations.map((d, i) => <OpenDestRow key={i} hint={d.hint} />)}
          </div>

          {/* Footer */}
          <div className="flex items-end justify-between mt-10 px-1">
            <img src={assets.barcode} alt="Barcode" className="h-16 w-auto object-contain" style={{ mixBlendMode: 'multiply' }} />
            <span className="font-mono text-[11px] text-[#788999] tracking-[2.4px]">FAYA30 · 2026</span>
          </div>
        </div>
      </div>

      {activeStopover && (
        <StopoverOverlay stopover={activeStopover} onClose={() => setActiveStopover(null)} />
      )}
    </>
  )
}
