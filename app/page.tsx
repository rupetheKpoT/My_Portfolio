'use client'
import { HeroSection } from "@/components/home/hero-section"
import { AboutPreview } from "@/components/home/about-preview"
import { ProjectsPreview } from "@/components/home/projects-preview"
import { BlogPreview } from "@/components/home/blog-preview"
import { ContactPreview } from "@/components/home/contact-preview"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ProjectsPreview />
      {/* <BlogPreview /> */}
      <ContactPreview />
    </>
  )
}
