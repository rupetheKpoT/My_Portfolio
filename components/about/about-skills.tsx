import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSkills() {
  const skillCategories = [
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
      title: "Machine Learning & AI",
      skills: [
        "PyTorch",
        "Computer Vision",
        "Predictive Modeling",
        "Roboflow Inference SDK",
        "Google GenAI",
        "OpenAI",
        "Gemini",
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
      title: "Databases & Cloud",
      skills: [
        "Oracle",
        "MySQL",
        "MongoDB",
        "Firebase",
        "Superbase",
        "Google Cloud Vision",
        "Azure",
        "AWS",
      ],
    },
    {
      title: "Libraries & Frameworks",
      skills: [
        "OpenCV",
        "Pillow",
        "Pydantic",
        "SHAP",
        "PyMc",
        "Flask",
        "React.js",
        "Express.js",
      ],
    },
    {
      title: "Project Management & Tools",
      skills: [
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
