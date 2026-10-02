import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";
import Link from "next/link";

export function AboutPreview() {
  const skills = [
    {
      icon: Code,
      title: "Machine Learning & AI",
      description: "Building intelligent systems using Python, PyTorch, and state-of-the-art AI/ML models.",
    },
    {
      icon: Zap,
      title: "Data Analytics & Visualization",
      description: "Transforming raw data into actionable insights using Power BI, SQL, and statistical analysis.",
    },
    {
      icon: Palette,
      title: "Computer Vision & NLP",
      description: "Developing AI-powered solutions for image processing and natural language understanding.",
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
            Data Science undergraduate at SLIIT specializing in machine learning, predictive modeling, and computer vision. I transform complex data into actionable insights and build impactful AI solutions that solve real-world challenges.
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

