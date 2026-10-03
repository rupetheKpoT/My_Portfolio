import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ProjectDetail } from "@/components/projects/projects-detail"
import { RelatedProjects } from "@/components/projects/related-projects"
import { portfolioProjects } from "@/lib/portfolio-projects"

const getProject = (id: string) =>
  portfolioProjects.find((project) => String(project.id) === id)

type ProjectPageProps = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params
  const project = getProject(id)

  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: `${project.title} | Rashmika's Projects`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params
  const project = getProject(id)

  if (!project) {
    notFound()
  }

  return (
    <>
      <ProjectDetail project={project} />
      <RelatedProjects currentProjectId={project.id} />
    </>
  )
}
