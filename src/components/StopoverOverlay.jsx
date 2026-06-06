import { useEffect, useRef, useState } from 'react'

const PHOTO_GAP = 8   // px gap between photos (Figma spec)
const MARQUEE_SPEED = 28 // px per second — same feel on every screen size

// Infinite seamless marquee strip. Photos keep their own aspect ratio at a
// fixed height; the set is duplicated and the track loops by exactly one set
// width (measured in px), so the seam is invisible and stays stable while the
// images are still loading. Duration is derived from the measured width so the
// scroll speed (px/sec) is identical on mobile and desktop.
function PhotoMarquee({ photos }) {
  const trackRef = useRef(null)
  const [vars, setVars] = useState({})
  const loop = [...photos, ...photos]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    function recalc() {
      const setW = track.scrollWidth / 2
      if (!setW) return
      setVars({
        '--marquee-shift': `${setW}px`,
        '--marquee-duration': `${setW / MARQUEE_SPEED}s`,
      })
    }
    recalc()
    window.addEventListener('resize', recalc)
    // ResizeObserver catches width changes as images finish loading
    const ro = new ResizeObserver(recalc)
    ro.observe(track)
    track.querySelectorAll('img').forEach((img) => {
      if (!img.complete) img.addEventListener('load', recalc, { once: true })
    })
    return () => { window.removeEventListener('resize', recalc); ro.disconnect() }
  }, [photos])

  return (
    <div className="w-full overflow-hidden">
      <div ref={trackRef} className="marquee-track" style={vars}>
        {loop.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            draggable={false}
            className="h-[180px] sm:h-[240px] w-auto object-cover rounded-[10px] select-none flex-shrink-0"
            style={{ marginRight: PHOTO_GAP }}
          />
        ))}
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
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-6"
      style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Modal — large, fixed max height, internal scroll */}
      <div
        className="relative w-full rounded-[20px] overflow-hidden shadow-2xl flex flex-col"
        style={{ maxWidth: 720, background: '#EDF9FE', height: '90vh', maxHeight: 980 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Scroll container — clip X so rotated polaroids never cause sideways scroll */}
        <div className="overflow-y-auto overflow-x-hidden flex-1">

          {/* ── Hero photo ── */}
          <div className="relative w-full flex-shrink-0" style={{ height: 340 }}>
            {stopover.photo
              ? <img src={stopover.photo} alt={stopover.city} className="absolute inset-0 w-full h-full object-cover" />
              : <div className="absolute inset-0 bg-[#00A1E4]/30" />}
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
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3">
              <span className="text-white font-mono font-bold drop-shadow-lg" style={{ fontSize: 'clamp(46px,11vw,68px)', lineHeight: 1 }}>
                {stopover.iata}
              </span>
              <span className="text-white font-sans text-[12px] tracking-[2.5px] px-4 py-1.5 rounded-full whitespace-nowrap" style={{ background: 'rgba(0,0,0,0.50)', backdropFilter: 'blur(2px)' }}>
                {stopover.city}
              </span>
            </div>
          </div>

          {/* ── Letter ── */}
          <div className="px-7 sm:px-10 pt-8 pb-2">
            {letter.greeting && (
              <p className="font-hand text-[26px] sm:text-[30px] text-[#1393c8] mb-3 leading-tight">{letter.greeting}</p>
            )}
            {letter.body && letter.body.split('\n').map((line, i) => (
              line.trim()
                ? <p key={i} className="font-hand text-[18px] sm:text-[20px] text-[#1393c8] leading-[1.55]">{line}</p>
                : <div key={i} className="h-4" />
            ))}
            {letter.signoff && (
              <div className="mt-5">
                {letter.signoff.split('\n').map((line, i) => (
                  <p key={i} className="font-hand text-[18px] sm:text-[20px] text-[#1393c8] leading-snug">{line}</p>
                ))}
              </div>
            )}
          </div>

          {/* ── Photo marquee (infinite loop) — full-bleed at the bottom ── */}
          {photos.length > 0 && (
            <div className="pt-6 pb-12">
              <PhotoMarquee photos={photos} />
            </div>
          )}
          {photos.length === 0 && <div className="h-10" />}
        </div>
      </div>
    </div>
  )
}
