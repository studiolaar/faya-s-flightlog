import { useEffect } from 'react'

export default function StopoverOverlay({ stopover, onClose }) {
  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  // Escape key closes
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    /* Full-screen dimmed backdrop — click outside to close */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      style={{ overflowY: 'auto' }}
    >
      {/* Modal card — centred, max width, max height with internal scroll */}
      <div
        className="relative w-full max-w-[500px] rounded-[20px] overflow-hidden bg-[#EDF9FE] shadow-2xl"
        style={{ maxHeight: '90vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Hero photo ── */}
        <div className="relative h-[280px] sm:h-[320px] w-full flex-shrink-0 overflow-hidden">
          {stopover.photo ? (
            <img
              src={stopover.photo}
              alt={stopover.city}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-[#00A1E4]/30" />
          )}
          {/* gradient to bottom so text is legible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          {/* Close button — top right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/60 transition-colors z-10"
            aria-label="Sluiten"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1.5 1.5L12.5 12.5M12.5 1.5L1.5 12.5" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* IATA + city pill — pinned to bottom of photo */}
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
            <span
              className="text-white font-mono font-bold leading-none drop-shadow-lg"
              style={{ fontSize: 'clamp(56px, 14vw, 80px)', lineHeight: 1 }}
            >
              {stopover.iata}
            </span>
            <span className="bg-black/55 backdrop-blur-sm text-white font-sans text-[13px] tracking-[2.5px] px-4 py-2 rounded-full whitespace-nowrap">
              {stopover.city}
            </span>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="px-7 pt-6 pb-10">
          {/* Friend name */}
          <p className="font-sans text-[11px] tracking-[2.8px] text-[#788999] uppercase mb-3">
            {stopover.friend}
          </p>
          {/* Memory quote in Gochi Hand (handwritten feel) */}
          <p className="font-hand text-[22px] sm:text-[24px] leading-relaxed text-[#1393c8]">
            "{stopover.quote}"
          </p>
        </div>
      </div>
    </div>
  )
}
