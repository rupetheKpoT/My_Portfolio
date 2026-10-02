import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Smartphone, Globe, Database, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "End-to-end web application development using modern technologies like React, Next.js, Node.js, and databases.",
      features: ["Custom Web Applications", "API Development", "Database Design", "Performance Optimization"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Creating intuitive and visually appealing user interfaces that provide exceptional user experiences.",
      features: ["User Interface Design", "User Experience Research", "Prototyping", "Design Systems"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Responsive web applications and mobile-first designs that work seamlessly across all devices.",
      features: ["Responsive Design", "Mobile Optimization", "Cross-platform Solutions", "App Development"],
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern, fast, and SEO-optimized websites built with the latest web technologies and best practices.",
      features: ["Static Site Generation", "SEO Optimization", "Performance Tuning", "Modern Frameworks"],
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Robust server-side solutions with secure APIs, database management, and cloud integration.",
      features: ["RESTful APIs", "Database Management", "Cloud Integration", "Security Implementation"],
    },
    {
      icon: Zap,
      title: "Consulting & Support",
      description: "Technical consulting, code reviews, and ongoing support to help your projects succeed.",
      features: ["Technical Consulting", "Code Reviews", "Performance Audits", "Ongoing Support"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-slate-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-slate-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
