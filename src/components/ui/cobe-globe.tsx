import { useEffect, useRef, useCallback } from "react"
import createGlobe from "cobe"

interface PolaroidMarker {
  id: string
  location: [number, number]
  image: string
  caption: string
  rotate: number
}

interface CobeGlobeProps {
  markers?: PolaroidMarker[]
  className?: string
  speed?: number
}

const defaultMarkers: PolaroidMarker[] = [
  { id: "warsaw", location: [52.23, 21.01], image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=120&h=120&fit=crop", caption: "Warszawa", rotate: -4 },
  { id: "gambia", location: [13.45, -16.58], image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=120&h=120&fit=crop", caption: "Gambia", rotate: 5 },
]

export function CobeGlobe({
  markers = defaultMarkers,
  className = "",
  speed = 0.003,
}: CobeGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        }
      }
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let animationId: number
    let phi = 0

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.15,
        dark: 0,
        diffuse: 1.5,
        mapSamples: 16000,
        mapBrightness: 9,
        baseColor: [1, 1, 1],
        markerColor: [0.58, 0.77, 0.24],
        glowColor: [0.96, 0.95, 0.94],
        markers: markers.map((m) => ({ location: m.location, size: 0.07 })),
        opacity: 0.7,
        onRender: (state) => {
          if (!isPausedRef.current) phi += speed
          state.phi = phi + phiOffsetRef.current + dragOffset.current.phi
          state.theta = 0.15 + thetaOffsetRef.current + dragOffset.current.theta
        },
      })

      setTimeout(() => {
        if (canvas) canvas.style.opacity = "1"
      }, 100)
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      const ro = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          ro.disconnect()
          init()
        }
      })
      ro.observe(canvas)
    }

    return () => {
      if (globe) globe.destroy()
    }
  }, [markers, speed])

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        style={{
          width: "100%",
          maxWidth: 500,
          aspectRatio: "1",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 0.5s ease",
        }}
      />
      {/* Labels */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6">
        {markers.map((m) => (
          <div
            key={m.id}
            className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-[#94c43d]" />
            <span className="text-xs font-medium text-gray-700">{m.caption}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
