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
              I'm Rashmika Rupasinghe, a BSc (Hons) in IT graduate specializing in Data Science at SLIIT (2022–2026). My skills span software quality testing, Python, SQL, Power BI, machine learning, and project management.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I performed manual, smoke, and black box testing for PortalKit, wrote and executed test cases, and documented bugs before UAT release. My projects also include cricket analytics, predictive models, and AI recommendation systems. I have already sat for the ISTQB CTFL v4.0 exam.
            </p>

            <a href="/Rashmika%20Rupasinghe_CV.pdf" download="Rashmika Rupasinghe_CV.pdf">
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </a>
          </div>

          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
              <Image
                src="/me.png"
                alt="Rashmika Rupasinghe - IT Graduate"
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
