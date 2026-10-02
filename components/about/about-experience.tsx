import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export function AboutExperience() {
  const experiences = [
    {
      title: "Project Management Intern",
      company: "VSIS",
      location: "Sri Lanka",
      period: "April 2025 – October 2025",
      description:
        "Assisted in managing Cloud-related and InfoSec related projects by coordinating tasks between development and business teams, improving workflow clarity and task tracking. Supported project planning and documentation, ensuring timely updates and better communication across stakeholders.",
    },
    {
      title: "Business Researcher",
      company: "Freelance",
      location: "Remote",
      period: "June 2024 – December 2024",
      description:
        "Conducted research on business models and IT strategies, contributing to improved sales insights and decision-making processes. Analyzed market trends and competitive landscapes to provide actionable business intelligence.",
    },
  ]

  const stats = [
    { number: "5+", label: "AI/ML Projects" },
    { number: "1+", label: "Years Experience" },
    { number: "8+", label: "Certifications Completed" },
    { number: "100%", label: "Commitment to Learning" },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-orbitron mb-6 text-gray-900">Experience</h2>
          <p className="text-xl text-gray-600">My professional journey and milestones</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                    <p className="text-lg text-cyan-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-gray-500 mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
