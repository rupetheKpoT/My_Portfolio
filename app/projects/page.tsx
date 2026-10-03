import type { Metadata } from "next"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsGrid } from "@/components/projects/projects-grid"

export const metadata: Metadata = {
  title: "Projects - Rashmika Rupasinghe | QA, Data Analytics & AI",
  description:
    "Explore PortalKit software testing, Criclytics Power BI analytics, Retention Radar predictive modeling, Instrument Hub recommendations, and MedIntel.",
  openGraph: {
    title: "Projects - Rashmika's QA, Data Analytics & AI Portfolio",
    description:
      "Discover my manual testing, test case writing, bug reporting, Power BI dashboards, predictive models, and AI recommendation projects.",
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
