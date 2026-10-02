import type { Metadata } from "next"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogCategories } from "@/components/blog/blog-categories"

export const metadata: Metadata = {
  title: "Blog - Web Development Insights & Tutorials",
  description:
    "Read my latest thoughts, tutorials, and insights on web development, design, and emerging technologies.",
  openGraph: {
    title: "Blog - Rashmika's Data Science Insights",
    description:
      "Read my latest thoughts, tutorials, and insights on web development, design, and emerging technologies.",
  },
}

export default function BlogPage() {
  return (
    < >
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
    </>
  )
}
