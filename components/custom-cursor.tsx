"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener("mousemove", updatePosition)

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button']")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: position.x - 10,
          top: position.y - 10,
          transform: `scale(${isHovering ? 1.5 : 1})`,
          transition: "transform 0.2s ease-out",
        }}
      >
        <div className="w-5 h-5 bg-white rounded-full" />
      </div>
      <div
        className="fixed pointer-events-none z-[9998] border-2 border-white/50 rounded-full"
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
          transform: `scale(${isHovering ? 0.8 : 1})`,
          transition: "transform 0.2s ease-out",
        }}
      />
    </>
  )
}
