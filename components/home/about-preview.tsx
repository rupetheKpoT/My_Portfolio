import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";
import Link from "next/link";

export function AboutPreview() {
  const skills = [
    {
      icon: Code,
      title: "Software Quality Testing",
      description: "Manual, smoke, and black box testing, test case writing, bug reporting, and Selenium automation skills.",
    },
    {
      icon: Zap,
      title: "Data Analytics & Visualization",
      description: "Transforming raw data into actionable insights using Power BI, SQL, and statistical analysis.",
    },
    {
      icon: Palette,
      title: "Machine Learning & AI",
      description: "Building predictive models and recommendation systems using Python, PyTorch, and machine learning.",
    },
  ];

  return (
    <section className="relative bg-white px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-black md:text-5xl font-orbitron">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            BSc (Hons) in IT graduate specializing in Data Science at SLIIT (2022–2026). I combine hands-on experience in software testing and project coordination. I write and execute test cases, document defects, and support project planning and communication across technical teams with knowledge of Data Analytics and AI/ML.
          </p>
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group border-gray-200 transition-shadow hover:border-cyan-200 hover:shadow-lg"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 mx-auto">
                  <skill.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {skill.title}
                </h3>
                <p className="text-gray-600">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-cyan-600/50 bg-transparent text-cyan-700 hover:bg-cyan-50"
            asChild
          >
            <Link href="/about">Explore My Full Skill Set</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

