import type { Metadata } from "next"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogGrid } from "@/components/blog/blog-grid"

export const metadata: Metadata = {
  title: "Blog - Software Testing & Quality Assurance",
  description:
    "Read my articles on software testing principles, test management, quality assurance, and AI.",
  openGraph: {
    title: "Blog - Rashmika's Software Testing Articles",
    description: "Articles on software testing principles, test management, quality assurance, and AI.",
  },
}

export default function BlogPage() {
  return (
    < >
      <BlogHero />
      <BlogGrid />
    </>
  )
}
