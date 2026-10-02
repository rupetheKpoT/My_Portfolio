import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Instagram,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const scrollByScreen = () => {
    if (typeof window !== "undefined") {
      window.scrollBy(0, window.innerHeight);
    }
  };

  return (
    <section className="min-h-screen relative bg-white overflow-hidden px-4 pt-20 flex items-center justify-center">
      {/* Blurred Gradient Bubbles Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-4rem] left-[-4rem] w-96 h-96 bg-gradient-to-br from-cyan-500 to-purple-500 opacity-30 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-[-6rem] right-[-6rem] w-[28rem] h-[28rem] bg-gradient-to-tr from-pink-500 to-purple-500 opacity-30 rounded-full filter blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-purple-500 to-cyan-500 opacity-20 rounded-full filter blur-[100px] transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12 text-center lg:text-left px-4 lg:px-8">
        {/* Text Content */}
        <div className="flex-1 w-full">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-orbitron mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              DATA SCIENCE
            </span>
            <br />
            <span className="text-gray-900">INNOVATOR</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Turning complex data into actionable insights and building impactful AI solutions through machine learning and data-driven innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              <Link href="/projects" className="flex items-center">
                View My Work
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg border-cyan-600/50 hover:bg-cyan-50 text-cyan-700 bg-transparent"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-6 mb-10 text-black">
            {/* GitHub */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-cyan-600 hover:bg-cyan-50 text-black "
              asChild
            >
              <a
                href="https://github.com/IT22106360"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-6 w-6" />
              </a>
            </Button>

            {/* LinkedIn */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-cyan-600 hover:bg-cyan-50 text-black "
              asChild
            >
              <a
                href="https://www.linkedin.com/in/rashmika-rupasinghe-9047a1246/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>

            {/* Email */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-cyan-600 hover:bg-cyan-50 text-black "
              asChild
            >
              <a href="mailto:wark.rupasinghe.work@gmail.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>

            {/* WhatsApp */}
            <a
              href="https://wa.me/94761941017"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-cyan-600 hover:bg-cyan-50 text-black "
              >
                <PhoneCall className="h-6 w-6" />
              </Button>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/rashmika_rupasinghe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-cyan-600 hover:bg-cyan-50 text-black "
              >
                <Instagram className="h-6 w-6" />
              </Button>
            </a>
          </div>

          {/* New Bottom-Left Gradient Bubble */}
          <div className="absolute bottom-[-5rem] left-[-5rem] w-72 h-72 bg-gradient-to-br from-cyan-400 to-purple-500 opacity-25 rounded-full filter blur-[100px]" />
        </div>

        {/* Developer Image */}
        <div className="flex justify-center items-center w-full h-full lg:w-auto ">
          <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-96 xl:h-96 relative rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg">
            <Image
              src="/me.png"
              alt="Developer Portrait"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <ArrowDown
            className="h-6 w-6 text-gray-400 cursor-pointer animate-bounce"
            onClick={scrollByScreen}
          />
        </div>
      </div>
    </section>
  );
}
