import { useEffect } from 'react'

// Rotation angles for up to 6 scattered polaroids (alternating tilt)
const ROTATIONS = [-4, 3, -6, 5, -3, 7]

function Polaroid({ src, rotation }) {
  return (
    <div
      className="bg-white shadow-md flex-shrink-0"
      style={{
        transform: `rotate(${rotation}deg)`,
        padding: '8px 8px 28px 8px',
        width: 160,
        boxShadow: '0 4px 12px rgba(0,0,0,0.18)',
      }}
    >
      <div className="w-full overflow-hidden" style={{ height: 140 }}>
        <img src={src} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default function StopoverOverlay({ stopover, onClose }) {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  const { letter = {}, photos = [] } = stopover

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)', overflowY: 'auto' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="relative w-full rounded-[20px] overflow-hidden shadow-2xl"
        style={{ maxWidth: 580, background: '#EDF9FE', maxHeight: '92vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Hero photo ── */}
        <div className="relative w-full flex-shrink-0" style={{ height: 300 }}>
          {stopover.photo
            ? <img src={stopover.photo} alt={stopover.city} className="absolute inset-0 w-full h-full object-cover" />
            : <div className="absolute inset-0 bg-[#00A1E4]/30" />
          }
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.05) 60%)' }} />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors z-10"
            aria-label="Sluiten"
            style={{ backdropFilter: 'blur(4px)' }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1.5 1.5L12.5 12.5M12.5 1.5L1.5 12.5" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          </button>

          {/* IATA + city pill */}
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
            <span className="text-white font-mono font-bold drop-shadow-lg" style={{ fontSize: 'clamp(52px,12vw,76px)', lineHeight: 1 }}>
              {stopover.iata}
            </span>
            <span className="text-white font-sans text-[13px] tracking-[2.5px] px-4 py-2 rounded-full whitespace-nowrap" style={{ background: 'rgba(0,0,0,0.50)', backdropFilter: 'blur(4px)' }}>
              {stopover.city}
            </span>
          </div>
        </div>

        {/* ── Letter section ── */}
        <div className="px-7 pt-7 pb-4">
          {letter.greeting && (
            <p className="font-hand text-[26px] text-[#1393c8] mb-2">{letter.greeting}</p>
          )}
          {letter.body && letter.body.split('\n').map((line, i) => (
            line.trim()
              ? <p key={i} className="font-hand text-[20px] text-[#1393c8] leading-relaxed">{line}</p>
              : <div key={i} className="h-4" />
          ))}
          {letter.signoff && (
            <div className="mt-4">
              {letter.signoff.split('\n').map((line, i) => (
                <p key={i} className="font-hand text-[20px] text-[#1393c8] leading-snug">{line}</p>
              ))}
            </div>
          )}
        </div>

        {/* ── Polaroid photo collage ── */}
        {photos.length > 0 && (
          <div className="px-4 pb-10 pt-4">
            {/* Wrap: allow natural flow with slight overlap */}
            <div
              className="relative"
              style={{ minHeight: photos.length > 3 ? 360 : 200 }}
            >
              {/* Scattered layout: alternate rows */}
              <div className="flex flex-wrap justify-center gap-4 pb-4">
                {photos.map((src, i) => (
                  <Polaroid key={i} src={src} rotation={ROTATIONS[i % ROTATIONS.length]} />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Spacer when no photos so there's breathing room at bottom */}
        {photos.length === 0 && <div className="h-8" />}
      </div>
    </div>
  )
}
