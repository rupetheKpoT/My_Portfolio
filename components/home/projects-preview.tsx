import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function ProjectsPreview() {
  const featuredProjects = [
    {
      id: 1,
      title: "Criclytics",
      description:
        "Created an engaging Power BI dashboard for cricket analytics using real-world data. Gained insights into game strategies, player performances, and trend analysis with streamlined data processing.",
      image: "/cricklytics.jpg",
      technologies: ["Power BI", "Data Analytics", "Visualization", "Excel"],
      liveUrl: "https://1drv.ms/v/c/a86c177745b40270/IQABiYBi5Z5VT6GBzY55CNkzAeJE8P73TLHqgY8DBXZmRsw?e=MLjzJI",
      githubUrl: "https://github.com/IT22106360/Criclytics",
    },
    {
      id: 2,
      title: "MedIntel",
      description:
        "AI-based antibiotic recommendation system addressing antimicrobial resistance. Selected to semifinals at Brainstorm 2025. Developed ML-driven engine combining symptoms, patient data, and clinical guidelines.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
      technologies: ["Python", "Machine Learning", "Healthcare AI", "Data Science"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      id: 3,
      title: "FoodLensAI",
      description:
        "Leading development of an AI-powered system for sustainability, compliance, health impact, and market intelligence insights from U.S. food & dietary supplement labels. Developing multimodal extraction and sustainability analysis.",
      image: "/foodlens.jpg",
      technologies: ["PyTorch", "Computer Vision", "NLP", "Google GenAI"],
      liveUrl: "https://1drv.ms/v/c/a86c177745b40270/IQAr8jOR9t6LSJgjsFvX_wIYAY1WZgMNOqi1c51NFvuTCPI?e=0ks49K",
      githubUrl: "",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-black">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my latest work, demonstrating expertise in machine learning, data analytics, and AI-driven solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
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
                  {project.liveUrl && (
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h3>
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

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
          >
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
