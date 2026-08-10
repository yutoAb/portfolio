import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 200)
    camera.position.set(0, 14, 26)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: 'low-power',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    const width = 80
    const depth = 80
    const spacing = 1.0
    const count = width * depth
    const positions = new Float32Array(count * 3)
    const bases = new Float32Array(count * 2)

    let idx = 0
    for (let ix = 0; ix < width; ix++) {
      for (let iz = 0; iz < depth; iz++) {
        const px = (ix - width / 2) * spacing
        const pz = (iz - depth / 2) * spacing
        positions[idx * 3] = px
        positions[idx * 3 + 1] = 0
        positions[idx * 3 + 2] = pz
        bases[idx * 2] = px
        bases[idx * 2 + 1] = pz
        idx++
      }
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      color: 0xd8b4fe,
      size: 0.09,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    const posAttr = geometry.attributes.position as THREE.BufferAttribute
    const posArr = posAttr.array as Float32Array

    let rafId = 0
    let running = false
    let last = performance.now()
    let elapsed = 0

    const tick = (now: number) => {
      if (!running) return
      const dt = Math.min((now - last) / 1000, 0.1)
      last = now
      elapsed += dt

      for (let i = 0; i < count; i++) {
        const bx = bases[i * 2]
        const bz = bases[i * 2 + 1]
        const dist = Math.sqrt(bx * bx + bz * bz)
        const radial = Math.sin(dist * 0.32 - elapsed * 1.4) * 1.6
        const cross = Math.sin(bx * 0.18 + elapsed * 0.6) * 0.4
        posArr[i * 3 + 1] = radial + cross
      }
      posAttr.needsUpdate = true

      renderer.render(scene, camera)
      rafId = requestAnimationFrame(tick)
    }

    const start = () => {
      if (running) return
      running = true
      last = performance.now()
      rafId = requestAnimationFrame(tick)
    }
    const stop = () => {
      running = false
      if (rafId) cancelAnimationFrame(rafId)
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) start()
          else stop()
        }
      },
      { threshold: 0 }
    )
    io.observe(container)

    const onVisibility = () => {
      if (document.hidden) stop()
      else start()
    }
    document.addEventListener('visibilitychange', onVisibility)

    const onResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      stop()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', onResize)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]"
    />
  )
}
