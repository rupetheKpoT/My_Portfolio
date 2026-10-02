"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Line } from "@react-three/drei"
import type * as THREE from "three"

export function SpiderWeb() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  // Create web structure
  const webPoints = []
  const center = [0, 0, 0]
  const rings = 8
  const spokes = 12

  // Create concentric rings
  for (let ring = 1; ring <= rings; ring++) {
    const radius = ring * 0.5
    const ringPoints = []

    for (let spoke = 0; spoke < spokes; spoke++) {
      const angle = (spoke / spokes) * Math.PI * 2
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      ringPoints.push([x, y, 0])
    }

    // Connect ring points
    for (let i = 0; i < ringPoints.length; i++) {
      const nextIndex = (i + 1) % ringPoints.length
      webPoints.push([ringPoints[i], ringPoints[nextIndex]])
    }
  }

  // Create spokes
  for (let spoke = 0; spoke < spokes; spoke++) {
    const angle = (spoke / spokes) * Math.PI * 2
    const spokePoints = []

    for (let ring = 0; ring <= rings; ring++) {
      const radius = ring * 0.5
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      spokePoints.push([x, y, 0])
    }

    for (let i = 0; i < spokePoints.length - 1; i++) {
      webPoints.push([spokePoints[i], spokePoints[i + 1]])
    }
  }

  return (
    <group ref={groupRef}>
      {webPoints.map((points, index) => (
        <Line key={index} points={points} color="#00ffff" lineWidth={1} transparent opacity={0.3} />
      ))}
    </group>
  )
}
