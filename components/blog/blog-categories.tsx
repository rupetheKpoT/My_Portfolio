"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Posts", count: 12 },
    { id: "technology", label: "Technology", count: 5 },
    { id: "tutorial", label: "Tutorials", count: 4 },
    { id: "design", label: "Design", count: 3 },
  ]

  return (
    <section className="py-12 px-4 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? "bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
                  : "border-cyan-600/50 hover:bg-cyan-50 text-cyan-700"
              }
            >
              {category.label} ({category.count})
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
