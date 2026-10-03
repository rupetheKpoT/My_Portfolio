import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutSkills } from "@/components/about/about-skills"
import { AboutExperience } from "@/components/about/about-experience"

export const metadata: Metadata = {
  title: "About - Rashmika Rupasinghe | Software Testing & Data Science",
  description:
    "Learn about Rashmika Rupasinghe, an IT graduate specializing in Data Science at SLIIT, with software testing, analytics, AI, and project management skills.",
  openGraph: {
    title: "About Rashmika - Software Testing & Data Science",
    description:
      "Explore my education, PortalKit testing work, VSIS internship, QA skills, Azure Fundamentals certification, and preparation for ISTQB CTFL.",
  },
}

export default function AboutPage() {
  return (
    < >
      <AboutHero />
      <AboutStory />
      <AboutSkills />
      <AboutExperience />
    </>
  )
}
