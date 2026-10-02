import type { Metadata } from "next"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsGrid } from "@/components/projects/projects-grid"

export const metadata: Metadata = {
  title: "Projects - Rashmika Rupasinghe | AI/ML Portfolio",
  description:
    "Explore my portfolio of machine learning, AI, and data science projects, featuring innovations in computer vision, predictive modeling, and analytics.",
  openGraph: {
    title: "Projects - Rashmika's AI/ML Portfolio",
    description:
      "Discover my AI and machine learning projects including Criclytics, MedIntel, FoodLensAI, and more data science solutions.",
  },
}

export default function ProjectsPage() {
  return (
    < >
      <ProjectsHero />
      <ProjectsGrid />
    </>
  )
}
