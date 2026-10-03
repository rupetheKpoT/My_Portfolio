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
    <section className="py-20 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-black">
            About{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BSc (Hons) in IT graduate specializing in Data Science at SLIIT (2022–2026). I combine software quality testing, data analytics, and machine learning with project management experience to build reliable, impactful software solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow border-gray-200 hover:border-cyan-200"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center">
                  <skill.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
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
            className="border-cyan-600/50 hover:bg-cyan-50 text-cyan-700 bg-transparent"
          >
            <Link href="/about">Explore My Full Skill Set</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

