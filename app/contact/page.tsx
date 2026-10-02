import type { Metadata } from "next"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact - Get In Touch",
  description:
    "Ready to start your next project? Get in touch to discuss how we can work together to bring your ideas to life.",
  openGraph: {
    title: "Contact Rashmika - Let's Connect",
    description:
      "Ready to start your next project? Get in touch to discuss how we can work together to bring your ideas to life.",
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
