import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface RelatedProjectsProps {
  currentProjectId: number
}

export function RelatedProjects({ currentProjectId }: RelatedProjectsProps) {
  // This would typically fetch related projects from a database
  const relatedProjects = [
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative projects with modern design.",
      image: "/placeholder.svg?height=300&width=400&text=Portfolio+Website",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts and analytics.",
      image: "/placeholder.svg?height=300&width=400&text=Weather+Dashboard",
      technologies: ["React", "API Integration", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A modern blog platform with content management and social sharing features.",
      image: "/placeholder.svg?height=300&width=400&text=Blog+Platform",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]
    .filter((project) => project.id !== currentProjectId)
    .slice(0, 3)

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold font-orbitron mb-12 text-center text-gray-900">Related Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-lg transition-shadow border-gray-200 hover:border-cyan-200 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-cyan-600 transition-colors">
                  <Link href={`/projects/${project.id}`}>{project.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
