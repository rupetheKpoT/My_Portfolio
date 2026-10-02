import { Card, CardContent } from "@/components/ui/card"

export function AboutStory() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-orbitron mb-6 text-gray-900">My Story</h2>
          <p className="text-xl text-gray-600">The journey that shaped my path as a data scientist</p>
        </div>

        <div className="space-y-8">
          {/* Card 1 - The Beginning */}
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">The Beginning</h3>
              <p className="text-gray-600 leading-relaxed">
                My journey into data science began at SLIIT, where I discovered a passion for transforming data into meaningful insights. Coming from D.S. Senanayake College, I was drawn to the intersection of statistics, programming, and artificial intelligence. I realized that data is everywhere—and with the right tools and mindset, it can drive powerful decisions and innovations.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 - Growth in Data Science */}
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Growth in Data Science</h3>
              <p className="text-gray-600 leading-relaxed">
                Through diverse projects and internships, I've developed expertise in machine learning, computer vision, and predictive modeling. At VSIS, I applied project management skills to cloud and InfoSec projects. As a freelance business researcher, I gained insights into data-driven decision making. Each experience has strengthened my ability to extract insights from complex datasets and build AI solutions that matter.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 - Philosophy & Mindset */}
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Philosophy & Mindset</h3>
              <p className="text-gray-600 leading-relaxed">
                I believe data science is about solving real-world problems through analytical thinking and creative innovation. I approach every challenge with curiosity—analyzing data thoroughly, testing hypotheses rigorously, and building models that deliver measurable impact. Whether analyzing cricket analytics or developing antibiotic recommendation systems, I'm committed to turning complex data into actionable insights that drive positive change.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
