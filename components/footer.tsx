"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-orbitron bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent mb-4">
              RASHMIKA
            </h3>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              Data Science student and AI/ML enthusiast passionate about turning complex data into actionable insights. Specializing in machine learning, computer vision, and predictive modeling.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-cyan-600 hover:bg-cyan-50" asChild>
                <a href="https://github.com/IT22106360" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-cyan-600 hover:bg-cyan-50" asChild>
                <a href="https://www.linkedin.com/in/rashmika-rupasinghe-9047a1246/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-cyan-600 hover:bg-cyan-50" asChild>
                <a href="mailto:wark.rupasinghe.work@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-3 ">
              <li>
                <Link href="/" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Projects
                </Link>
              </li>
              {/* <li>
                <Link href="/blog" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Blog
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-end text-right">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-600">Data Analytics & Visualization</li>
              <li className="text-gray-600">Machine Learning & AI Solutions</li>
              <li className="text-gray-600">Project Management</li>
              <li className="text-gray-600">Web Development</li>
              <li className="text-gray-600">Business research & consulting</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 Rashmika Rupasinghe. All rights reserved.</p>
          <div className="flex items-center justify-end  mt-4 md:mt-0 space-x-4">
            <p className="text-gray-500 text-sm flex items- text-left justify-end">
              {/* Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> using Next.js */}
              Maximum Effort
            </p>
            <Button variant="ghost" size="icon" onClick={scrollToTop} className="hover:text-cyan-600 hover:bg-cyan-50 text-black bg-cyan-50">
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
