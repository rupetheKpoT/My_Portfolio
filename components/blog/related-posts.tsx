import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface RelatedPostsProps {
  currentPostId: number
}

export function RelatedPosts({ currentPostId }: RelatedPostsProps) {
  // This would typically fetch related posts from a database
  const relatedPosts = [
    {
      id: 3,
      title: "Design Systems for Scalable Applications",
      excerpt: "How to create and maintain design systems that enhance user experience and developer productivity.",
      image: "/placeholder.svg?height=200&width=300&text=Design+Systems",
      category: "Design",
      date: "2024-01-05",
      readTime: "6 min read",
      slug: "design-systems-scalable-applications",
    },
    {
      id: 4,
      title: "Getting Started with Next.js 14",
      excerpt:
        "A beginner's guide to Next.js 14 and its new features. Learn about the App Router and Server Components.",
      image: "/placeholder.svg?height=200&width=300&text=Next.js+14",
      category: "Tutorial",
      date: "2024-01-01",
      readTime: "7 min read",
      slug: "getting-started-nextjs-14",
    },
    {
      id: 5,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies that will shape the future of web development.",
      image: "/placeholder.svg?height=200&width=300&text=Future+Web+Dev",
      category: "Technology",
      date: "2023-12-28",
      readTime: "9 min read",
      slug: "future-of-web-development",
    },
  ]
    .filter((post) => post.id !== currentPostId)
    .slice(0, 3)

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold font-orbitron mb-12 text-center text-gray-900">Related Posts</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-lg transition-shadow border-gray-200 hover:border-cyan-200 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-cyan-600 text-white">{post.category}</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4" suppressHydrationWarning>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-cyan-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700 transition-colors font-medium"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
