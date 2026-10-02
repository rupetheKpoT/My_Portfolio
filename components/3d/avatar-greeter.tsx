"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text, Sphere } from "@react-three/drei"
import type * as THREE from "three"

function Avatar() {
  const meshRef = useRef<THREE.Group>(null)
  const [isWaving, setIsWaving] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1

      // Wave animation
      if (isWaving) {
        const armRotation = Math.sin(state.clock.elapsedTime * 8) * 0.5
        meshRef.current.rotation.z = armRotation * 0.2
      }
    }
  })

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisited")
    if (!hasVisited) {
      setIsWaving(true)
      localStorage.setItem("hasVisited", "true")

      // Stop waving after 3 seconds
      setTimeout(() => setIsWaving(false), 3000)
    }
  }, [])

  return (
    <group ref={meshRef}>
      {/* Head */}
      <Sphere args={[0.3]} position={[0, 0.5, 0]}>
        <meshStandardMaterial color="#ffdbac" />
      </Sphere>

      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.2, 0.25, 0.6]} />
        <meshStandardMaterial color="#4a90e2" />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.4, 0.2, 0]} rotation={[0, 0, isWaving ? -0.5 : 0.2]}>
        <cylinderGeometry args={[0.05, 0.05, 0.4]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>

      <mesh position={[0.4, 0.2, 0]} rotation={[0, 0, isWaving ? 0.5 : -0.2]}>
        <cylinderGeometry args={[0.05, 0.05, 0.4]} />
        <meshStandardMaterial color="#ffdbac" />
      </mesh>

      {/* Greeting text */}
      {isWaving && (
        <Text position={[0, 1.2, 0]} fontSize={0.2} color="#ffffff" anchorX="center" anchorY="middle">
          Hello! Welcome to my portfolio!
        </Text>
      )}
    </group>
  )
}

export function AvatarGreeter() {
  return (
    <div className="fixed top-20 right-10 w-64 h-64 z-20 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 5, 5]} />
        <Avatar />
      </Canvas>
    </div>
  )
}
