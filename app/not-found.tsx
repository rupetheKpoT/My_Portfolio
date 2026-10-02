import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function Custom404() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 relative overflow-hidden">
      {/* Background Gradient Bubbles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-4rem] left-[-4rem] w-96 h-96 bg-gradient-to-br from-cyan-500 to-purple-500 opacity-30 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-[-6rem] right-[-6rem] w-[28rem] h-[28rem] bg-gradient-to-tr from-pink-500 to-purple-500 opacity-30 rounded-full filter blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-purple-500 to-cyan-500 opacity-20 rounded-full filter blur-[100px] transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl mx-auto">
        <h1 className="text-6xl sm:text-7xl font-bold font-orbitron text-black mb-6">
          404
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link href="/">
          <Button
            variant="default"
            className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-6 py-3 text-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back Home
          </Button>
        </Link>
      </div>
    </section>
  )
}
