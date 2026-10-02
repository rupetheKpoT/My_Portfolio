"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function AboutSection() {
  const skills = [
    "Python",
    "R",
    "SQL",
    "PyTorch",
    "Machine Learning",
    "Computer Vision",
    "Power BI",
    "OpenCV",
    "Google GenAI",
    "Flask",
    "MongoDB",
    "Firebase",
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Data Science student at SLIIT specializing in machine learning and AI solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">My Journey</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  I'm a Data Science student at SLIIT specializing in machine learning, computer vision, and predictive modeling. My passion lies in transforming complex data into actionable insights and building AI solutions that solve real-world challenges.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  From developing Power BI dashboards to creating AI recommendation systems and healthcare solutions, I combine analytical thinking with creative problem-solving. I'm committed to leveraging data science and machine learning to create meaningful impact.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-slate-800 mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-slate-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">5+</div>
                    <div className="text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">30+</div>
                    <div className="text-slate-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">24/7</div>
                    <div className="text-slate-600">Support</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
