import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare, Calendar } from "lucide-react"
import Link from "next/link"

export function ContactPreview() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-black">
            Let's{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Interested in discussing data science, AI projects, or collaboration opportunities? Let's connect and explore what we can build together!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Mail, title: "Email Me", description: "wark.rupasinghe.work@gmail.com" },
            { icon: MessageSquare, title: "Let's Chat", description: "About AI & Data Science" },
            { icon: Calendar, title: "LinkedIn", description: "Connect & collaborate" },
          ].map((item, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow border-gray-200 hover:border-cyan-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
