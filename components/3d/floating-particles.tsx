"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export function FloatingParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const particleCount = 100

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < particleCount; i++) {
      temp.push({
        position: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20],
        velocity: [(Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02],
        scale: Math.random() * 0.5 + 0.1,
      })
    }
    return temp
  }, [])

  useFrame(() => {
    if (meshRef.current) {
      particles.forEach((particle, index) => {
        // Update positions
        particle.position[0] += particle.velocity[0]
        particle.position[1] += particle.velocity[1]
        particle.position[2] += particle.velocity[2]

        // Wrap around screen
        if (particle.position[0] > 10) particle.position[0] = -10
        if (particle.position[0] < -10) particle.position[0] = 10
        if (particle.position[1] > 10) particle.position[1] = -10
        if (particle.position[1] < -10) particle.position[1] = 10

        // Update instance matrix
        const matrix = new THREE.Matrix4()
        matrix.setPosition(...particle.position)
        matrix.scale(new THREE.Vector3(particle.scale, particle.scale, particle.scale))
        meshRef.current!.setMatrixAt(index, matrix)
      })
      meshRef.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, particleCount]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#ff00ff" transparent opacity={0.6} />
    </instancedMesh>
  )
}
