"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export function ProjectsGrid() {
  const [filter, setFilter] = useState("all");
  const route = useRouter();

  const handleRouteSlug = (id: number) => {
    route.push(`/projects/${id}`);
  }

  const projects = [
    {
      id: 1,
      title: "Criclytics",
      description:
        "Created an engaging Power BI dashboard for cricket analytics using real-world data. Gained insights into game strategies, player performances, and trend analysis with streamlined data processing.",
      image: "/cricklytics.jpg",
      technologies: ["Power BI", "Data Analytics", "Visualization", "Excel"],
      category: "analytics",
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
      category: "ml",
      liveUrl: "",
      githubUrl: "",
    },
    {
      id: 3,
      title: "FoodLensAI - Ongoing Project",
      description:
        "Leading development of an AI-powered system for sustainability, compliance, health impact, and market intelligence insights from U.S. food & dietary supplement labels. Developing multimodal extraction and sustainability analysis.",
      image: "/foodlens.jpg",
      technologies: ["PyTorch", "Computer Vision", "NLP", "Google GenAI", "Roboflow"],
      category: "ml",
      liveUrl: "https://1drv.ms/v/c/a86c177745b40270/IQAr8jOR9t6LSJgjsFvX_wIYAY1WZgMNOqi1c51NFvuTCPI?e=0ks49K",
      githubUrl: "",
    },
    {
      id: 4,
      title: "Retention Radar",
      description:
        "Led a hiring analytics project for data scientists with data cleaning and handling imbalanced datasets. Built and deployed predictive models (Decision Trees, Random Forest, SVM, Logistic Regression) using Flask.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      technologies: ["Python", "Scikit-learn", "Flask", "Predictive Modeling"],
      category: "ml",
      liveUrl: "",
      githubUrl: "https://github.com/IT22106360/QuantaML-FDM-Employee-Retention",
    },
    {
      id: 5,
      title: "Instrument Hub",
      description:
        "Developed a personalized e-commerce recommendation system for musical instruments using machine learning. Applied collaborative and content-based filtering to improve recommendation accuracy.",
      image: "/instrument-hub.jpg",
      technologies: ["Python", "Machine Learning", "Recommendation Systems", "React.js"],
      category: "ml",
      liveUrl: "",
      githubUrl: "https://github.com/ascottR/Recommendation_SYS",
    },
  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ml", label: "Machine Learning" },
    { id: "analytics", label: "Data Analytics" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={
                filter === category.id
                  ? "bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
                  : "border-cyan-600/50 hover:bg-cyan-50 text-cyan-700"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-lg transition-shadow border-gray-200 hover:border-cyan-200 overflow-hidden "
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
                    <Button size="sm" variant="secondary" asChild onClick={(e) => { e.stopPropagation() }}>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="secondary" asChild onClick={(e) => { e.stopPropagation() }}>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:underline cursor-pointer" onClick={(e) => { handleRouteSlug(project.id as number) }}>{project.title}</h3>
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
