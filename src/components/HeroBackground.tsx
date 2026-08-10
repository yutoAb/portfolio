import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  precision highp float;
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  const vec3 BASE  = vec3(94.0,  66.0, 166.0) / 255.0;
  const vec3 HUE_A = vec3(150.0, 108.0, 230.0) / 255.0;
  const vec3 HUE_B = vec3(58.0,  32.0, 128.0) / 255.0;
  const vec3 HUE_C = vec3(196.0, 138.0, 224.0) / 255.0;
  const vec3 HUE_D = vec3(110.0, 78.0,  190.0) / 255.0;

  float blob(vec2 p, vec2 c, float r) {
    float d = length(p - c);
    return smoothstep(r, 0.0, d);
  }

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;
    vec2 p = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);

    float t = uTime;

    vec2 c1 = vec2(-0.55 * aspect + sin(t * 0.045) * 0.18, 0.32 + cos(t * 0.037) * 0.10);
    vec2 c2 = vec2( 0.58 * aspect + cos(t * 0.055) * 0.16, -0.28 + sin(t * 0.048) * 0.10);
    vec2 c3 = vec2(-0.12 * aspect + sin(t * 0.062 + 1.3) * 0.22, -0.34 + cos(t * 0.052 + 2.1) * 0.12);
    vec2 c4 = vec2( 0.18 * aspect + cos(t * 0.040 + 0.7) * 0.20, 0.38 + sin(t * 0.058 + 1.1) * 0.09);
    vec2 c5 = vec2( 0.02 * aspect + sin(t * 0.033 + 2.4) * 0.28, 0.02 + cos(t * 0.041 + 0.4) * 0.24);

    float b1 = blob(p, c1, 0.90);
    float b2 = blob(p, c2, 0.95);
    float b3 = blob(p, c3, 0.80);
    float b4 = blob(p, c4, 0.85);
    float b5 = blob(p, c5, 1.10);

    vec3 col = BASE;
    col = mix(col, HUE_A, b1 * 0.55);
    col = mix(col, HUE_B, b2 * 0.45);
    col = mix(col, HUE_C, b3 * 0.28);
    col = mix(col, HUE_D, b4 * 0.42);
    col = mix(col, HUE_A, b5 * 0.20);

    float centerFade = smoothstep(0.15, 0.75, length(p * vec2(0.85, 1.0)));
    col = mix(col * 0.90, col, centerFade);

    float grain = hash(uv * 100.0);
    col += (grain - 0.5) * 0.006;

    gl_FragColor = vec4(col, 1.0);
  }
`

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    camera.position.z = 1

    const renderer = new THREE.WebGLRenderer({
      alpha: false,
      antialias: false,
      powerPreference: 'low-power',
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setClearColor(0x5e42a6, 1)
    container.appendChild(renderer.domElement)

    const geometry = new THREE.PlaneGeometry(2, 2)
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: {
          value: new THREE.Vector2(container.clientWidth, container.clientHeight),
        },
      },
    })
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    let rafId = 0
    let running = false
    let last = performance.now()
    let elapsed = 0

    const tick = (now: number) => {
      if (!running) return
      const dt = Math.min((now - last) / 1000, 0.1)
      last = now
      elapsed += dt
      material.uniforms.uTime.value = elapsed
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
      renderer.setSize(w, h)
      material.uniforms.uResolution.value.set(w, h)
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
      className="absolute inset-0 pointer-events-none"
    />
  )
}
