import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Image from "next/image"

export function AboutHero() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-between">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold font-orbitron mb-6 text-black">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Me
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I'm a Data Science student at SLIIT with a passion for turning complex data into actionable insights. My expertise spans machine learning, computer vision, predictive modeling, and AI-powered solutions.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From building Power BI dashboards to developing AI recommendation systems and healthcare analytics solutions, I combine analytical thinking with creative problem-solving. I'm committed to leveraging data science and machine learning to address real-world challenges and create meaningful impact.
            </p>

            <a href="/Rashmika%20Rupasinghe_Resume.pdf" download="Rashmika Rupasinghe_Resume.pdf">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </a>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <Image
                src="/me.png"
                alt="Rashmika - Data Scientist"
                width={400}
                height={500}
                className="relative z-10 w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
