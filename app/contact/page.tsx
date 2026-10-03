import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact - Get In Touch",
  description:
    "Contact Rashmika Rupasinghe about internship opportunities and collaboration in software testing, data analytics, AI, and project management.",
  openGraph: {
    title: "Contact Rashmika - Let's Connect",
    description:
      "Connect with Rashmika Rupasinghe, an IT graduate from SLIIT with software quality testing, data analytics, and AI skills.",
  },
}

export default function ContactPage() {
  return (
    < >
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
    </>
  )
}
