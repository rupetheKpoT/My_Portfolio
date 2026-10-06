import { Card, CardContent } from "@/components/ui/card"

export function AboutStory() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-orbitron mb-6 text-gray-900">My Story</h2>
          <p className="text-xl text-gray-600">My education, practical experience, and professional development</p>
        </div>

        <div className="space-y-8">
          {/* Card 1 - The Beginning */}
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Education</h3>
              <p className="text-gray-600 leading-relaxed">
                I graduated with a BSc (Hons) in IT specializing in Data Science at SLIIT (2022–2026). I previously attended D.S. Senanayake College, Colombo 07, achieving 9 A grades at O/L in 2017 and A, B, and C grades in the Physical Science stream at A/L in 2022.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 - Growth in Data Science */}
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Testing & Practical Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                My PortalKit work involved manual, smoke, and black box testing, writing and executing test cases, documenting bugs, and collaborating with developers before UAT release. At VSIS, I supported cloud and InfoSec project coordination, planning, and documentation. As a freelance business researcher, I researched business models and IT strategies to support sales insights and decision making.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 - Philosophy & Mindset */}
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Certifications & Professional Strengths</h3>
              <p className="text-gray-600 leading-relaxed">
                I have already sat for the ISTQB Certified Tester Foundation Level (CTFL) v4.0 exam. My completed courses include Statistics Foundations (1–4), Learning Data Analytics: 1 Foundations, Power BI: Dashboards for Beginners, Business Analysis Foundations, and SQL for Data Analysis. I bring analytical and critical thinking, problem solving, adaptability, attention to detail, communication and report writing, teamwork, and time management to my work.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
