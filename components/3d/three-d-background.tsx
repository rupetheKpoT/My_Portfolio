"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { SpiderWeb } from "./spider-web"
import { FloatingParticles } from "./floating-particles"

export function ThreeDBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} style={{ background: "transparent" }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <SpiderWeb />
          <FloatingParticles />
        </Suspense>
      </Canvas>
    </div>
  )
}
