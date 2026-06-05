import { useState } from 'react'
import { passenger, flightInfo, stopovers, openDestinations, assets } from '../data'
import StopoverOverlay from './StopoverOverlay'

// ─── KLM logo — white div masked by the logo shape (same as Figma) ───────────
function KlmLogo() {
  return (
    <div
      style={{
        width: 110,
        height: 64,
        background: 'white',
        WebkitMaskImage: `url("${assets.klmLogoMask}")`,
        maskImage: `url("${assets.klmLogoMask}")`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'left center',
        maskPosition: 'left center',
        flexShrink: 0,
      }}
      aria-label="KLM Royal Dutch Airlines"
    />
  )
}

// ─── Tear line with punch-out notch circles ───────────────────────────────────
// The .notch class uses background-attachment:fixed with the same gradient
// as the page body, making the circles look like holes in the card.
function TearLine() {
  return (
    <div className="relative flex items-center w-full my-2">
      {/* left notch — half-circle hanging off the card edge */}
      <div
        className="notch absolute -left-[18px] w-[34px] h-[34px] rounded-full z-10 flex-shrink-0"
        style={{ boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.06)' }}
      />
      {/* dashed rule */}
      <div
        className="w-full"
        style={{
          borderTop: '1.5px dashed rgba(120,137,153,0.35)',
          margin: '0 2px',
        }}
      />
      {/* right notch */}
      <div
        className="notch absolute -right-[18px] w-[34px] h-[34px] rounded-full z-10 flex-shrink-0"
        style={{ boxShadow: 'inset 2px 0 4px rgba(0,0,0,0.06)' }}
      />
    </div>
  )
}

// ─── Individual stopover row ──────────────────────────────────────────────────
function StopoverRow({ stopover, onOpen }) {
  return (
    <button
      className="flex items-start gap-3 w-full text-left group"
      onClick={() => onOpen(stopover)}
    >
      {/* Photo thumbnail */}
      <div className="w-[80px] h-[80px] rounded-[10px] overflow-hidden flex-shrink-0 bg-[#c8e9f5]">
        {stopover.photo && (
          <img
            src={stopover.photo}
            alt={stopover.city}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Text block */}
      <div className="flex-1 min-w-0 pt-1">
        <p className="font-mono font-bold text-[#195FA5] text-[30px] leading-none lg:text-[34px]">
          {stopover.iata}
        </p>
        <p className="font-sans text-[11px] text-[#788999] tracking-[2px] uppercase mt-1">
          {stopover.label}
        </p>
        {stopover.quote && (
          <p className="font-mono text-[11px] text-[#788999]/80 mt-1 leading-snug line-clamp-2">
            "{stopover.quote}"
          </p>
        )}
      </div>

      {/* Arrow button */}
      <div className="w-10 h-10 rounded-full bg-[#00A1E4] flex items-center justify-center flex-shrink-0 mt-3 group-hover:bg-[#195FA5] transition-colors">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
          <path d="M2.5 7.5H12.5M12.5 7.5L8 3M12.5 7.5L8 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </button>
  )
}

// ─── Open destination placeholder row ────────────────────────────────────────
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

  return (
    <>
      {/* Wrapper: overflow-hidden clips the card body but we need the notch
          circles to escape — so we allow overflow on the inner body section */}
      <div className="relative w-full">

        {/* ── "new destination" badge — sits at the header/body seam ── */}
        <div
          className="absolute z-20 flex flex-col items-center justify-center"
          style={{
            width: 82,
            height: 82,
            right: -8,
            top: 248,
          }}
        >
          {/* Dark blue circle from Figma */}
          <img
            src={assets.newDestCircle}
            alt=""
            className="absolute inset-0 w-full h-full"
          />
          {/* Plane icon from Figma */}
          <img
            src={assets.newDestPlane}
            alt=""
            className="absolute inset-0 w-full h-full object-contain p-3"
          />
          {/* Text */}
          <div
            className="relative z-10 text-center leading-tight"
            style={{ transform: 'rotate(13deg)' }}
          >
            <span className="block font-mono text-[12px] font-bold text-white leading-none">new</span>
            <span className="block font-sans text-[8px] tracking-wide text-white">destination</span>
          </div>
        </div>

        {/* ── HEADER — sky blue ─────────────────────────────────────── */}
        <div
          className="bg-[#00A1E4] rounded-t-[14px] px-6 pt-9 pb-9 overflow-hidden"
        >
          {/* Logo + BOARDING PASS */}
          <div className="flex items-center justify-between mb-8">
            <KlmLogo />
            <span className="font-sans text-white text-[13px] tracking-[3.2px] uppercase">
              Boarding Pass
            </span>
          </div>

          {/* Passenger row */}
          <div className="flex flex-col gap-3">
            <p className="font-sans text-white text-[13px] tracking-[3.2px] uppercase opacity-90">
              Passenger
            </p>
            <div className="flex items-center gap-3">
              <img
                src={passenger.avatar}
                alt={passenger.name}
                className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-white/30"
              />
              <span className="font-mono font-bold text-white text-[28px] leading-none lg:text-[32px]">
                {passenger.name}
              </span>
            </div>
          </div>
        </div>

        {/* ── BODY — light blue card ────────────────────────────────── */}
        {/* overflow-visible so the notch circles can poke out the sides */}
        <div className="bg-[#EDF9FE] rounded-b-[14px] px-5 pt-7 pb-8 overflow-visible">

          {/* Route: 20s ——— 30s */}
          <div className="flex items-start gap-4 mb-5 px-1">
            <div className="flex-1 min-w-0">
              <p className="font-mono font-bold text-[#195FA5] text-[46px] leading-none">
                {flightInfo.from.code}
              </p>
              <p className="font-sans text-[10px] text-[#788999] tracking-[2px] uppercase mt-1">
                {flightInfo.from.label}
              </p>
            </div>
            {/* Arrow line */}
            <div className="flex-1 flex items-center gap-1 self-center mt-[-8px]">
              <div className="flex-1 border-t border-dashed border-[#788999]/40" />
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="flex-shrink-0">
                <path d="M1 5H13M13 5L9 1M13 5L9 9" stroke="#788999" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0 text-right">
              <p className="font-mono font-bold text-[#195FA5] text-[46px] leading-none">
                {flightInfo.to.code}
              </p>
              <p className="font-sans text-[10px] text-[#788999] tracking-[2px] uppercase mt-1">
                {flightInfo.to.label}
              </p>
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
                <span className="font-sans text-[10px] text-[#788999] tracking-[2.5px] uppercase">
                  {label}
                </span>
                <span className="font-mono font-medium text-[#195FA5] text-[13px]">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* ── Tear line 1 ── */}
          <div className="my-6 px-1">
            <TearLine />
          </div>

          {/* Stopovers */}
          <p className="font-sans text-[10px] text-[#788999] tracking-[2.4px] uppercase text-center mb-6">
            Stopovers — Memories from the Crew
          </p>
          <div className="flex flex-col gap-7 px-1">
            {stopovers.map((s) => (
              <StopoverRow key={s.iata} stopover={s} onOpen={setActiveStopover} />
            ))}
          </div>

          {/* ── Tear line 2 ── */}
          <div className="my-6 px-1">
            <TearLine />
          </div>

          {/* Open destinations */}
          <p className="font-sans text-[10px] text-[#788999] tracking-[2.4px] uppercase text-center mb-6">
            Open Destinations — Yours to Fill
          </p>
          <div className="flex flex-col gap-7 px-1">
            {openDestinations.map((d, i) => (
              <OpenDestRow key={i} hint={d.hint} />
            ))}
          </div>

          {/* ── Footer: barcode + code ── */}
          <div className="flex items-end justify-between mt-10 px-1">
            {/* mix-blend-mode:multiply removes the white bg from the PNG */}
            <img
              src={assets.barcode}
              alt="Barcode"
              className="h-16 w-auto object-contain"
              style={{ mixBlendMode: 'multiply' }}
            />
            <span className="font-mono text-[11px] text-[#788999] tracking-[2.4px]">
              FAYA30 · 2026
            </span>
          </div>
        </div>
      </div>

      {/* ── Overlay ── */}
      {activeStopover && (
        <StopoverOverlay
          stopover={activeStopover}
          onClose={() => setActiveStopover(null)}
        />
      )}
    </>
  )
}
