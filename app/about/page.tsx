import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutSkills } from "@/components/about/about-skills"
import { AboutExperience } from "@/components/about/about-experience"

export const metadata: Metadata = {
  title: "About - Rashmika Rupasinghe | Data Science & AI",
  description:
    "Learn about Rashmika Rupasinghe, a Data Science student at SLIIT specializing in machine learning, computer vision, and predictive modeling. Passionate about turning data into actionable insights.",
  openGraph: {
    title: "About Rashmika - Data Science & AI Specialist",
    description:
      "Discover my journey as a data scientist, my AI/ML projects, skills in Python, PyTorch, Power BI, and passion for building impactful AI solutions.",
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
