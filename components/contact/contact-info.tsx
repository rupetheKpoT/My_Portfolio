import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Twitter } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      value: "rashmikarupasinghe27@gmail.com",
      description: "Send me an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+94 76 194 1017",
      description: "Call or WhatsApp",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Colombo, Sri Lanka",
      description: "Available for remote work",
    },
    {
      icon: Clock,
      title: "Opportunities",
      value: "Internships & Collaboration",
      description: "Software testing, data analytics, and AI",
    },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/IT22106360" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rashmika-rupasinghe-9047a1246" },
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold font-orbitron mb-4 text-gray-900">Let's Connect</h2>
          <p className="text-gray-600 leading-relaxed">
            I'm interested in internship opportunities and collaborations in software quality assurance, data analytics,
            machine learning, and project management. I'd love to discuss how my skills can support your team.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {contactDetails.map((detail, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <detail.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{detail.title}</h3>
                    <p className="text-lg text-cyan-600 font-medium mb-1">{detail.value}</p>
                    <p className="text-sm text-gray-600">{detail.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-gray-200">
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-cyan-50 hover:text-cyan-600"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 p-6 bg-cyan-50 rounded-lg border border-cyan-200">
          <h3 className="font-semibold text-gray-900 mb-2">Internship Opportunities</h3>
          <p className="text-sm text-gray-600">
            I'm interested in applying my software testing, analytical, and project management skills in a team.
            Reach out by email or phone to discuss an opportunity.
          </p>
        </div>
      </div>
    </section>
  )
}
