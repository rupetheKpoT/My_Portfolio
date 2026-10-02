import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Github, ArrowLeft, Calendar, User, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProjectDetailProps {
  project: {
    id: number
    title: string
    description: string
    longDescription: string
    image: string
    images: string[]
    technologies: string[]
    liveUrl: string
    githubUrl: string
    features: string[]
    challenges: string[]
    solutions: string[]
    timeline: string
    client: string
    year: string
  }
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <article className=" px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="hover:bg-cyan-50 hover:text-cyan-700">
            <Link href="/projects">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-gray-900 leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>{project.client}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{project.timeline}</span>
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              asChild
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                View Live Project
              </a>
            </Button>
            <Button variant="outline" asChild className="border-gray-300 hover:bg-gray-50 bg-transparent text-black">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                View Source Code
              </a>
            </Button>
          </div>

          <div className="relative overflow-hidden rounded-xl shadow-lg mb-12">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Overview */}
            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 text-gray-900">Project Overview</h2>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                {project.longDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 text-gray-900">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges & Solutions */}
            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 text-gray-900">Challenges & Solutions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-red-200 bg-red-50/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-red-800">Challenges</h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="text-red-700 text-sm">
                          • {challenge}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-green-200 bg-green-50/50">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 text-green-800">Solutions</h3>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="text-green-700 text-sm">
                          • {solution}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="text-2xl font-bold font-orbitron mb-6 text-gray-900">Project Gallery</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-3 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Info */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Project Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Client:</span>
                    <p className="text-gray-900">{project.client}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Timeline:</span>
                    <p className="text-gray-900">{project.timeline}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Year:</span>
                    <p className="text-gray-900">{project.year}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="border-cyan-200 bg-cyan-50/50">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">Interested in Similar Work?</h3>
                <p className="text-sm text-gray-600 mb-4">Let's discuss how I can help bring your project to life.</p>
                <Button
                  asChild
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
                >
                  <Link href="/contact">Get In Touch</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </article>
  )
}
