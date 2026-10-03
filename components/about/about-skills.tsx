import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSkills() {
  const skillCategories = [
    {
      title: "Software Quality Testing",
      skills: [
        "Test Case Writing",
        "Manual Testing",
        "Smoke Testing",
        "Black Box Testing",
        "Bug Reporting",
        "Selenium",
      ],
    },
    {
      title: "Programming Languages",
      skills: [
        "Python",
        "R",
        "SQL",
        "JavaScript",
      ],
    },
    {
      title: "Libraries, Frameworks & AI",
      skills: [
        "PyTorch",
        "Computer Vision",
        "Predictive Modeling",
        "Roboflow Inference SDK",
        "Hugging Face Transformers",
        "OpenCV",
        "Pillow",
        "Google Gen AI SDK",
        "Flask",
      ],
    },
    {
      title: "Data & Analytics",
      skills: [
        "Power BI",
        "Excel",
        "Statistical Analysis",
        "Data Visualization",
        "Data Cleaning",
      ],
    },
    {
      title: "Databases",
      skills: [
        "Oracle",
        "MySQL",
        "MongoDB",
        "Firebase",
        "Supabase",
      ],
    },
    {
      title: "Cloud, DevOps & Project Management",
      skills: [
        "Microsoft Azure",
        "AWS",
        "Jira",
        "Asana",
        "Trello",
        "Microsoft Project",
        "Docker",
      ],
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-orbitron mb-6 text-gray-900">Skills & Expertise</h2>
          <p className="text-xl text-gray-600">My technical toolbox & professional strengths</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-900">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-3 py-1">
                      {skill}
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
