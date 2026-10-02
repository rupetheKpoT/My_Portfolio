import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Share2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface BlogPostProps {
  post: {
    id: number
    title: string
    content: string
    image: string
    category: string
    date: string
    readTime: string
    author: string
    tags: string[]
  }
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="hover:bg-cyan-50 hover:text-cyan-700">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="mb-6">
            <Badge className="bg-cyan-600 text-white mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-gray-900 leading-tight">
              {post.title}
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8" suppressHydrationWarning>
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{post.readTime}</span>
            </div>
            <Button variant="ghost" size="sm" className="hover:bg-cyan-50 hover:text-cyan-700">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          <div className="relative overflow-hidden rounded-xl shadow-lg mb-8">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </header>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none mb-12 text-black"
          dangerouslySetInnerHTML={{ __html: post.content }}
          style={{
            lineHeight: "1.8",
          }}
        />

        {/* Tags */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-lg font-semibold mb-4 text-gray-900">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="px-3 py-1">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
